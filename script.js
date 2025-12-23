// محاكاة التثبيت عند فتح الموقع
window.onload = () => {
    let bar = document.getElementById('progress-bar');
    let status = document.getElementById('setup-status');
    let width = 0;
    let interval = setInterval(() => {
        width += Math.random() * 10;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            status.innerText = "اكتمل التثبيت!";
            document.getElementById('start-install').style.display = "inline-block";
        }
        bar.style.width = width + "%";
    }, 400);
};

function runInstallation() {
    document.getElementById('setup-screen').style.display = "none";
    document.getElementById('desktop').style.display = "block";
}

function toggleStart() {
    let menu = document.getElementById('start-menu');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function openApp(type) {
    let container = document.getElementById('window-layer');
    let win = document.createElement('div');
    win.className = "app-window";
    
    let content = "";
    if(type === 'browser') content = `<iframe src="https://www.bing.com" style="width:100%; height:100%; border:none;"></iframe>`;
    else if(type === 'notes') content = `<textarea style="width:100%; height:100%; border:none; outline:none;" placeholder="اكتب هنا..."></textarea>`;
    else if(type === 'paint') content = `<canvas id="p-canvas" style="width:100%; height:100%; background:#fff; border:1px solid #000;"></canvas>`;
    else content = `<div>محتوى تطبيق ${type} لـ AzaamOS 10</div>`;

    win.innerHTML = `
        <div class="win-header">
            <span>${type.toUpperCase()}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background:red; color:white; border:none; padding:2px 10px;">X</button>
        </div>
        <div class="win-content">${content}</div>
    `;
    container.appendChild(win);
}

// تحديث الساعة
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}, 1000);
