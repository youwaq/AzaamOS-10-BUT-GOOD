// محاكاة الإقلاع (Boot)
setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('setup-screen').style.display = 'flex';
}, 3000);

function finishSetup() {
    let name = document.getElementById('username').value;
    if(!name) return alert("ادخل اسمك يا بطل!");
    
    document.getElementById('display-name').innerText = name;
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
}

function toggleStart() {
    let menu = document.getElementById('start-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function openApp(type) {
    let manager = document.getElementById('window-manager');
    let win = document.createElement('div');
    win.className = 'win-box';
    
    let content = "";
    if(type === 'browser') {
        content = `<iframe src="https://duckduckgo.com/search?q=AzaamOS" style="width:100%; height:100%; border:none;"></iframe>`;
    } else if(type === 'settings') {
        content = `<div style="padding:20px;"><h2>الإعدادات</h2><p>النظام: AzaamOS 10 Professional</p><button onclick="alert('تم التحديث!')">تحديث النظام</button></div>`;
    } else {
        content = `<div style="padding:20px;">تطبيق ${type} شغال تماماً في AzaamOS</div>`;
    }

    win.innerHTML = `
        <div class="win-title">
            <span>${type.toUpperCase()}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background:red; color:white; border:none; cursor:pointer;">X</button>
        </div>
        <div style="flex:1">${content}</div>
    `;
    manager.appendChild(win);
}

// الساعة
setInterval(() => {
    let d = new Date();
    document.getElementById('clock').innerText = d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes();
}, 1000);
