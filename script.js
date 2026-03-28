// ============================================================
// راديو القرآن - بث مباشر
// ============================================================

const API_URL = "https://script.google.com/macros/s/AKfycbzod3HSUKOjxabBDeovU5UfVAE-bnb5DptND0MBmhIBL_sb01MOtaBStNGt9dhybHwu/exec?key=KIMO";

// عناصر DOM
const loadingDiv = document.getElementById('loading');
const contentDiv = document.getElementById('content');
const surahSpan = document.getElementById('surah');
const readerSpan = document.getElementById('reader');
const surahNumSpan = document.getElementById('surahNum');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const jsonPre = document.getElementById('jsonData');
const playBtn = document.getElementById('playBtn');
const muteBtn = document.getElementById('muteBtn');
const audio = document.getElementById('audio');

// حالة التطبيق
let currentData = null;
let isMuted = false;
let hasStarted = false;
let isUpdating = false;
let originalVolume = 1;

// ========== دوال مساعدة ==========
function toSeconds(t) {
    if (!t) return 0;
    let parts = t.split(':').map(Number);
    if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
    if (parts.length === 2) return parts[0]*60 + parts[1];
    return 0;
}

function toTime(sec) {
    if (isNaN(sec) || sec < 0) return "00:00";
    let hours = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = Math.floor(sec % 60);
    
    if (hours > 0) {
        return `${hours}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }
    return `${mins}:${secs.toString().padStart(2,'0')}`;
}

// ========== جلب البيانات ==========
async function fetchData() {
    try {
        let res = await fetch(API_URL + "&_=" + Date.now());
        if (!res.ok) throw new Error();
        let json = await res.json();
        if (json.error) throw new Error();
        
        return {
            ok: true,
            num: json.رقم_السورة || 0,
            reader: json.اسم_القارئ || "غير معروف",
            surah: json.اسم_السورة || "سورة",
            url: json.رابط_السورة || "",
            duration: json.مدة_السورة || "00:00",
            current: json.الوقت_الحالي_للسورة || "00:00"
        };
    } catch(e) {
        return { ok: false };
    }
}

// ========== تحديث الواجهة ==========
function updateDisplay(data) {
    if (!data) return;
    
    surahSpan.innerText = data.surah;
    readerSpan.innerText = data.reader;
    surahNumSpan.innerText = data.num;
    
    let now = (audio && !isNaN(audio.currentTime)) ? audio.currentTime : toSeconds(data.current);
    currentTimeSpan.innerText = toTime(now);
    durationSpan.innerText = `/ ${data.duration}`;
    
    let jsonObj = {
        "رقم_السورة": data.num,
        "اسم_القارئ": data.reader,
        "اسم_السورة": data.surah,
        "رابط_الصوت": data.url,
        "مدة_السورة": data.duration,
        "الوقت_الحالي": data.current
    };
    jsonPre.innerText = JSON.stringify(jsonObj, null, 2);
}

// ========== مزامنة الصوت ==========
function syncAudio() {
    if (!audio || !currentData) return;
    let serverTime = toSeconds(currentData.current);
    if (serverTime > 0 && Math.abs(audio.currentTime - serverTime) > 1.2) {
        audio.currentTime = serverTime;
    }
}

// ========== تحديث الوقت ==========
function startTimeUpdater() {
    function update() {
        if (audio && currentData && !isNaN(audio.currentTime)) {
            currentTimeSpan.innerText = toTime(audio.currentTime);
        }
        requestAnimationFrame(update);
    }
    update();
}

// ========== تحديث البيانات (خلفي) ==========
async function backgroundUpdate() {
    if (isUpdating) return;
    isUpdating = true;
    
    let result = await fetchData();
    
    if (result.ok) {
        let newData = {
            num: result.num,
            reader: result.reader,
            surah: result.surah,
            url: result.url,
            duration: result.duration,
            current: result.current
        };
        
        let wasPlaying = hasStarted && !audio.paused;
        let surahChanged = !currentData || currentData.surah !== newData.surah || currentData.url !== newData.url;
        
        if (surahChanged) {
            let oldVolume = audio.volume;
            let oldPlaying = wasPlaying;
            
            currentData = newData;
            
            if (audio.src !== newData.url) {
                audio.src = newData.url;
            }
            
            syncAudio();
            
            if (oldPlaying && hasStarted) {
                audio.volume = oldVolume;
                audio.play().catch(() => {});
            }
        } else {
            currentData = newData;
            syncAudio();
        }
        
        updateDisplay(currentData);
        
        if (!loadingDiv.classList.contains('hidden')) {
            loadingDiv.classList.add('hidden');
            contentDiv.classList.remove('hidden');
        }
    } else {
        if (!currentData) {
            loadingDiv.classList.add('hidden');
            contentDiv.classList.remove('hidden');
            surahSpan.innerText = "جاري الاتصال...";
            readerSpan.innerText = "الرجاء الانتظار";
        }
    }
    
    isUpdating = false;
}

// ========== إعداد الأزرار ==========
function setupButtons() {
    playBtn.onclick = () => {
        if (audio && currentData && currentData.url) {
            if (isMuted) {
                audio.volume = originalVolume;
                isMuted = false;
                muteBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg> كتم`;
            }
            
            audio.play().then(() => {
                hasStarted = true;
                playBtn.style.display = 'none';
            }).catch(() => {
                setTimeout(() => audio.play().catch(() => {}), 100);
            });
        }
    };
    
    muteBtn.onclick = () => {
        if (audio) {
            if (!isMuted) {
                originalVolume = audio.volume;
                audio.volume = 0;
                isMuted = true;
                muteBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <line x1="22" x2="16" y1="9" y2="15"/>
                    <line x1="16" x2="22" y1="9" y2="15"/>
                </svg> تشغيل الصوت`;
            } else {
                audio.volume = originalVolume;
                isMuted = false;
                muteBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg> كتم`;
            }
        }
    };
    
    audio.addEventListener('ended', () => {
        backgroundUpdate();
    });
}

// ========== إعدادات مع أنيميشن ==========
function setupSettings() {
    let btn = document.getElementById('settingsBtn');
    let panel = document.getElementById('settingsContent');
    let apiLink = document.getElementById('apiLink');
    let apiUrlInput = document.getElementById('apiUrl');
    
    apiUrlInput.value = API_URL;
    apiLink.href = API_URL;
    apiLink.innerText = API_URL.length > 50 ? API_URL.substring(0, 47) + '...' : API_URL;
    
    btn.onclick = () => {
        panel.classList.toggle('show');
    };
    
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.onclick = () => {
            let targetId = btn.getAttribute('data-target');
            let input = document.getElementById(targetId);
            if (input) {
                navigator.clipboard.writeText(input.value);
                let originalText = btn.innerText;
                btn.innerText = '✓ تم النسخ';
                setTimeout(() => btn.innerText = originalText, 1500);
            }
        };
    });
    
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !panel.contains(e.target)) {
            panel.classList.remove('show');
        }
    });
}

// ========== بدء التشغيل ==========
async function init() {
    setupButtons();
    setupSettings();
    startTimeUpdater();
    
    audio.volume = 1;
    
    await backgroundUpdate();
    
    setInterval(() => {
        backgroundUpdate();
    }, 25000);
    
    audio.addEventListener('canplay', () => {
        syncAudio();
    });
    
    audio.addEventListener('error', () => {
        setTimeout(() => backgroundUpdate(), 1500);
    });
}

init();
