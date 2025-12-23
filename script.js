let userName = "";

function startSetup() {
    userName = document.getElementById('username-input').value;
    if (!userName) { alert("من فضلك أدخل اسمك أولاً"); return; }
    
    document.querySelector('.progress-container').style.display = "block";
    let bar = document.getElementById('progress-bar');
    let width = 0;
    
    let interval = setInterval(() => {
        width += 5;
        bar.style.width = width + "%";
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('setup-screen').style.display = "none";
            document.getElementById('desktop').style.display = "block";
            document.getElementById('user-display').innerText = userName;
        }
    }, 150);
}

function toggleStart() {
    let menu = document.getElementById('start-menu');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function openApp(app) {
    let container = document.getElementById('window-layer');
    let win = document.createElement('div');
    win.className = "app-window";
    
    let content = "";
    if(app === 'browser') {
        // المتصفح يستخدم محرك بحث متاح بدلاً من Google الذي يمنع الـ frame
        content = `<iframe src="https://www.bing.com" style="width:100%; height:100%; border:none;"></iframe>`;
    } else if(app === 'settings') {
        content = `<div style="padding:20px;"><h3>اعدادات AzaamOS</h3>
                   <p>المستخدم الحالي: ${userName}</p>
                   <button onclick="document.getElementById('desktop').style.backgroundImage='url(https://wallpaperaccess.com/full/1155013.jpg)'">خلفية 1</button>
                   <button onclick="document.getElementById('desktop').style.backgroundImage='url(https://wallpapercave.com/wp/wp4354271.jpg)'">خلفية 2</button>
                   </div>`;
    } else if(app === 'notes') {
        content = `<textarea style="width:100%; height:100%; border:none; padding:10px;" placeholder="اكتب هنا..."></textarea>`;
    }
    
    win.innerHTML = `
        <div class="win-header">
            <span>${app} - AzaamOS</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background:red; color:white; border:none; padding:0 10px; cursor:pointer;">X</button>
        </div>
        <div style="flex-grow:1;">${content}</div>
    `;
    container.appendChild(win);
}

// تحديث الساعة
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}, 1000);
