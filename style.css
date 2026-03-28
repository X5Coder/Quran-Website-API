* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: 'SF Pro Display', 'Noto Sans Arabic', -apple-system, BlinkMacSystemFont, sans-serif;
    background: radial-gradient(circle at 20% 30%, #1a1a2e, #0f0f1a);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

/* Glass Container - iOS Style */
.glass-container {
    max-width: 420px;
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 48px;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    padding: 24px 20px 32px;
    transition: all 0.3s ease;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    padding: 0 8px;
}

.header h1 {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #fff, #e0e0ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -0.3px;
}

.settings-glass {
    width: 44px;
    height: 44px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.settings-glass:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(0.96);
}

/* Settings Panel - iOS Style */
.settings-glass-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    width: 340px;
    background: rgba(30, 30, 45, 0.95);
    backdrop-filter: blur(40px);
    border-radius: 44px;
    padding: 24px;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.settings-glass-panel.show {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
}

.settings-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.15);
}

.settings-title {
    font-size: 20px;
    font-weight: 600;
    color: white;
}

.close-settings {
    width: 32px;
    height: 32px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.setting-item {
    margin-bottom: 24px;
}

.setting-label {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 12px;
}

.setting-link-group {
    display: flex;
    gap: 10px;
    align-items: center;
}

.glass-link {
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    padding: 12px 14px;
    border-radius: 30px;
    font-size: 11px;
    font-family: monospace;
    color: #8b9aff;
    text-decoration: none;
    word-break: break-all;
    text-align: left;
    direction: ltr;
    transition: all 0.2s;
}

.glass-link:hover {
    background: rgba(255, 255, 255, 0.15);
}

.glass-copy {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 10px 18px;
    border-radius: 30px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
}

.glass-copy:hover {
    background: rgba(255, 255, 255, 0.2);
}

.hidden-input {
    display: none;
}

/* Loading */
.loading-glass {
    text-align: center;
    padding: 60px 20px;
}

.glass-spinner {
    width: 50px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: #8b9aff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.loading-glass p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
}

/* Cards Grid - iOS Style */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 28px;
}

.glass-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 28px;
    padding: 18px 12px;
    text-align: center;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s;
}

.card-icon {
    font-size: 28px;
    margin-bottom: 8px;
}

.card-label {
    font-size: 11px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.3px;
    margin-bottom: 6px;
}

.card-value {
    font-size: 17px;
    font-weight: 700;
    color: white;
    line-height: 1.3;
}

.card-sub {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 4px;
}

/* Progress Bar - iOS Style */
.progress-section {
    margin: 20px 0 28px;
}

.progress-bar-glass {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    height: 4px;
    overflow: hidden;
    cursor: pointer;
}

.progress-fill-glass {
    background: linear-gradient(90deg, #8b9aff, #5f7aff);
    height: 100%;
    width: 0%;
    border-radius: 12px;
    transition: width 0.2s ease;
}

.time-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 11px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    direction: ltr;
}

/* Controls - iOS Style */
.controls-glass {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 20px 0 28px;
}

.glass-action {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.glass-action:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(0.96);
}

.glass-action:active {
    transform: scale(0.92);
}

.play-action {
    background: linear-gradient(135deg, #8b9aff, #5f7aff);
    box-shadow: 0 8px 20px rgba(91, 122, 255, 0.3);
}

.play-action:hover {
    transform: scale(0.96);
    box-shadow: 0 4px 12px rgba(91, 122, 255, 0.4);
}

/* JSON Section - iOS Style */
.json-glass {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 28px;
    padding: 16px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
}

.json-header-glass {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
}

.json-glass pre {
    font-family: 'SF Mono', monospace;
    font-size: 9px;
    color: rgba(255, 255, 255, 0.7);
    white-space: pre-wrap;
    word-break: break-all;
    line-height: 1.5;
    background: transparent;
    direction: ltr;
    text-align: left;
}

/* Utility */
.hidden {
    display: none;
}

/* Responsive */
@media (max-width: 450px) {
    .glass-container {
        padding: 20px 16px 28px;
    }
    
    .cards-grid {
        gap: 12px;
    }
    
    .glass-card {
        padding: 14px 10px;
    }
    
    .card-value {
        font-size: 15px;
    }
    
    .glass-action {
        width: 64px;
        height: 64px;
    }
    
    .settings-glass-panel {
        width: 300px;
        padding: 20px;
    }
}
