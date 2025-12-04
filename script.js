// 预定义祝福语
const blessings = [
    "祝你天天开心！",
    "愿你永远美丽！",
    "好运常相伴！",
    "幸福永相随！",
    "愿你梦想成真！",
    "身体健康，万事如意！",
    "友谊地久天长！",
    "笑口常开，好运自然来！",
    "每一天都充满阳光！",
    "愿你被世界温柔以待！",
    "所有的美好都与你相关！",
    "愿你眼中总有光芒！",
    "活成自己喜欢的模样！",
    "心想事成，美梦成真！",
    "爱你所爱，行你所行！",
    "要天天开心哦！😊",
        "越来越漂亮！🌹",
        "心想事成！✨",
        "万事如意！🎁",
        "友谊长存！👭",
        "爱你爱你！💖",
        "暴富暴美！💰",
        "永远的小仙女！🧚‍♀️",
        "一切顺遂！🌈",
        "快乐每一天！🎈",
        "愿你的每一个梦想都能实现✨",
        "愿你永远被爱与温暖包围💕",
        "愿我们的友谊地久天长",
        "愿你的人生旅途精彩纷呈",
        "愿你心中永远有星辰大海",
        "愿快乐与健康常伴你左右",
        "愿你成为最好的自己",
        "天天开心，永远十八岁！",
        "好运常伴，万事顺意！",
        "心想事成，美梦成真！",
        "笑口常开，青春永在！",
        "平安喜乐，无忧无虑！",
        "前程似锦，未来可期！",
        "幸福满满，甜甜蜜蜜！",
        "越来越好，越来越美！",
        "好运爆棚，惊喜不断！",
        "一切顺利，没有烦恼！",
        "快乐加倍，幸福满满！",
        "永远年轻，永远热泪盈眶！",
        "愿你如风般自由，无拘无束！",
        "保持热忱，永远对生活充满激情！",
        "愿你的勇敢照亮前行的每一步！",
        "你当向鸟，飞向你的山！",
        "坚守内心的坚定，不为外界所动！",
        "愿你永远保持那份纯粹的热忱！",
        "勇敢做自己，不迎合任何人！",
        "自由永远是进行时！",
        "热忱地喜欢你所喜欢的一切！",
        "愿你永远无拘无束！",
        "勇敢追寻，哪怕道路崎岖！",
        "坚定地走自己的路，不左右摇摆！",
        "愿你活得热烈而自由！",
        "保持内心的野性，不驯服于世俗！",
        "勇敢地打破所有限制！",
        "自由是你能给自己的最好礼物！",
        "热忱地爱，热忱地生活！",
        "愿你永远开心快乐！",
        "愿你心想事成！",
        "愿你健康平安！",
        "愿你越来越美丽！",
        "愿你天天好心情！",
        "愿你梦想成真！",
        "愿你无忧无虑！",
        "愿你被世界温柔以待！",
        "愿你每天都有好运气！",
        "愿你笑口常开！",
        "愿我们的友谊长存！",
        "愿你永远年轻漂亮！",
        "愿你事业顺利！",
        "愿你家庭幸福！",
        "愿你万事如意！",
        "愿你前程似锦！",
        "愿你天天开心！",
        "坚定地相信自己的价值！",
        "愿你拥有不羁的灵魂！",
        "勇敢地表达真实的自己！",
        "自由地呼吸，自由地存在！",
        "热忱是生命最美的状态！",
        "愿你永远不被定义，永远在成长！",
        "勇敢地探索未知的领域！",
        "像星星般自由闪烁！",
        "坚定地守护内心的光芒！",
        "愿你活成自己想要的模样！",
        "希望你能一直做自己",
        "愿你的笑容永远灿烂",
        "简单快乐，就是最好的生活",
        "记得要好好照顾自己",
        "累了就休息，别太逞强",
        "你真的很棒，要相信自己",
        "愿你被温柔以待",
        "不开心的时候，记得有我",
        "做你想做的事，过你想过的生活",
        "愿你永远保持善良",
        "健康比什么都重要",
        "愿你眼里总有光",
        "平凡的日子也要过得精彩",
        "愿你拥有简单的幸福",
        "累了的时候，我在",
        "愿你活出自己喜欢的模样",
        "开心最重要，其他都是其次",
        "愿你总能感受到生活的美好",
        "做最真实的自己就好",
        "愿你被爱包围",
        "好好吃饭，好好睡觉",
        "愿你总能看到希望",
        "一切都会越来越好",
        "愿你心中有阳光",
        "累了就来找我聊聊",
        "愿你平安喜乐",
        "记得你值得一切美好",
        "愿你从容面对生活",
        "我们一起慢慢变好",
        "愿你每一天都充满阳光和欢笑",
        "快乐永远伴随你左右，好运常相伴",
        "所有的愿望都能实现，所有的梦想都能成真",
        "健康平安幸福永远，无忧无虑每一天",
        "友谊长存，永远快乐，永远年轻",
        "每一天都有小确幸，每时每刻都开心",
        "好运连连，惊喜不断，好事成双",
        "笑口常开，青春永驻，美丽永远",
];

// 预定义照片URL（使用示例图片，实际使用时可以替换）
const photoUrls = [
"https://i.ibb.co/HDJ2f200/mmexport1764857106585.jpg",
"https://i.ibb.co/9mCTFS4N/mmexport1764857109920.jpg",
"https://i.ibb.co/ym9VB57H/mmexport1764857108345.jpg",
"https://i.ibb.co/wNXykYcD/photo4.jpg",
"https://i.ibb.co/MxW5n3cs/photo5.jpg",
"https://i.ibb.co/PsJ40nDF/photo6.jpg",
"https://i.ibb.co/8LL0yg9m/photo7.jpg",
"https://i.ibb.co/C3PzW4S3/photo8.jpg"
];

// 获取DOM元素
const popupContainer = document.getElementById('popupContainer');
const startContainer = document.getElementById('startContainer');
const startBtn = document.getElementById('startBtn');
const countdownContainer = document.getElementById('countdownContainer');
const mainContent = document.getElementById('mainContent');
const blessingsContainer = document.getElementById('blessingsContainer');
const photosContainer = document.getElementById('photosContainer');
const dateDisplay = document.getElementById('dateDisplay');
const restartBtn = document.getElementById('restartBtn');

// 音频元素
const dingSound = document.getElementById('dingSound');
const countdownSound = document.getElementById('countdownSound');
const surpriseSound = document.getElementById('surpriseSound');

// 爱心形状的坐标（8个点形成爱心）
const heartCoordinates = [
    { x: 0.4, y: 0.25 },   // 顶部
    { x: 0.4, y: 0.85 },  // 右上
    { x: 0.1, y: 0.1 },   // 右中
    { x: 0.7, y: 0.1 },   // 底部
    { x: -0.1, y: 0.38 },   // 左中
    { x: 0.9, y: 0.38 },  // 左上
    { x: 0.1, y: 0.65 },   // 中心上
    { x: 0.7, y: 0.65 }    // 中心下
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化弹窗序列
    initPopupSequence();
    
    // 设置今天的日期
    setCurrentDate();
});

// 初始化弹窗序列
function initPopupSequence() {
    const popups = document.querySelectorAll('.popup');
    let currentPopupIndex = 0;
    
    // 隐藏所有弹窗
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    
    // 显示第一个弹窗
    showNextPopup();
    
    function showNextPopup() {
        if (currentPopupIndex < popups.length) {
            const currentPopup = popups[currentPopupIndex];
            
            // 显示当前弹窗
            currentPopup.style.display = 'block';
            currentPopup.classList.add('show');
            
            // 播放提示音
            if (currentPopupIndex === 0) {
                dingSound.currentTime = 0;
                dingSound.play().catch(e => console.log("音频自动播放被阻止，用户需要交互"));
            }
            
            // 设置定时器，1.2秒后隐藏当前弹窗并显示下一个
            setTimeout(() => {
                currentPopup.classList.remove('show');
                
                // 等待动画完成
                setTimeout(() => {
                    currentPopup.style.display = 'none';
                    currentPopupIndex++;
                    
                    if (currentPopupIndex < popups.length) {
                        // 显示下一个弹窗
                        showNextPopup();
                    } else {
                        // 所有弹窗显示完毕，显示开始按钮
                        setTimeout(() => {
                            popupContainer.style.display = 'none';
                            startContainer.classList.add('show');
                            
                            // 用户点击开始按钮后，开始倒计时
                            startBtn.addEventListener('click', startCountdown);
                        }, 500);
                    }
                }, 500); // 等待动画完成
            }, 1200); // 弹窗显示时间
        }
    }
}

// 开始倒计时
function startCountdown() {
    startContainer.classList.remove('show');
    countdownContainer.classList.add('show');
    
    // 播放倒计时声音
    countdownSound.currentTime = 0;
    countdownSound.play().catch(e => console.log("音频自动播放被阻止"));
    
    const countdown3 = document.getElementById('countdown3');
    const countdown2 = document.getElementById('countdown2');
    const countdown1 = document.getElementById('countdown1');
    
    // 显示3
    setTimeout(() => {
        countdown3.classList.add('show');
    }, 100);
    
    // 显示2
    setTimeout(() => {
        countdown3.classList.remove('show');
        countdown3.classList.add('hide');
        countdown2.classList.add('show');
    }, 1000);
    
    // 显示1
    setTimeout(() => {
        countdown2.classList.remove('show');
        countdown2.classList.add('hide');
        countdown1.classList.add('show');
    }, 2000);
    
    // 倒计时结束，显示主内容
    setTimeout(() => {
        countdown1.classList.remove('show');
        countdown1.classList.add('hide');
        countdownContainer.classList.remove('show');
        
        // 显示主内容
        showMainContent();
    }, 3000);
}

// 显示主内容
function showMainContent() {
    mainContent.style.display = 'flex';
    
    // 播放惊喜音乐
    surpriseSound.currentTime = 0;
    surpriseSound.play().catch(e => console.log("音频自动播放被阻止"));
    
    // 显示随机祝福语
    showRandomBlessings();
    
    // 显示照片爱心
    setTimeout(() => {
        showPhotoHeart();
    }, 5000);
    
    // 显示日期
    setTimeout(() => {
        dateDisplay.classList.add('show');
    }, 8000);
    
    // 显示重新开始按钮
    setTimeout(() => {
        restartBtn.classList.add('show');
    }, 10000);
}

// 显示随机祝福语
function showRandomBlessings() {
    // 创建20个随机祝福语
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const blessing = document.createElement('div');
            blessing.className = 'blessing';
            blessing.textContent = blessings[Math.floor(Math.random() * blessings.length)];
            
            // 随机位置
            const left = Math.random() * 85;
            const top = Math.random() * 85;
            
            blessing.style.left = `${left}%`;
            blessing.style.top = `${top}%`;
            
            // 随机颜色
            const colors = ['#d81b60', '#c2185b', '#ad1457', '#880e4f'];
            blessing.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // 随机大小
            const size = 0.8 + Math.random() * 0.7;
            blessing.style.fontSize = `${size}rem`;
            
            // 添加到容器
            blessingsContainer.appendChild(blessing);
            
            // 5秒后移除
            setTimeout(() => {
                blessing.remove();
            }, 5000);
        }, i * 300);
    }
}

// 显示照片爱心
function showPhotoHeart() {
    // 清空容器
    photosContainer.innerHTML = '';
    
    // 创建8个照片框
    for (let i = 0; i < 8; i++) {
        const photoFrame = document.createElement('div');
        photoFrame.className = 'photo-frame';
        photoFrame.id = `photo${i}`;
        
        const img = document.createElement('img');
        img.src = photoUrls[i];
        img.alt = `祝福照片 ${i + 1}`;
        
        photoFrame.appendChild(img);
        photosContainer.appendChild(photoFrame);
        
        // 初始随机位置
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        photoFrame.style.left = `${left}%`;
        photoFrame.style.top = `${top}%`;
        
        // 延迟显示并移动到爱心位置
        setTimeout(() => {
            photoFrame.classList.add('show');
            
            // 移动到爱心位置
            setTimeout(() => {
                const coord = heartCoordinates[i];
                photoFrame.style.left = `${coord.x * 100}%`;
                photoFrame.style.top = `${coord.y * 100}%`;
            }, 100);
        }, i * 200);
    }
}

// 设置当前日期
function setCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('zh-CN', options);
    dateDisplay.textContent = dateString;
}

// 重新开始功能
restartBtn.addEventListener('click', function() {
    // 重置所有状态
    mainContent.style.display = 'none';
    dateDisplay.classList.remove('show');
    restartBtn.classList.remove('show');
    blessingsContainer.innerHTML = '';
    photosContainer.innerHTML = '';
    
    // 重新显示弹窗序列
    popupContainer.style.display = 'flex';
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.remove('show');
    });
    
    // 重新开始
    setTimeout(() => {
        initPopupSequence();
    }, 100);
});

// 确保音频可以在用户交互后播放
document.addEventListener('click', function enableAudio() {
    // 尝试播放所有音频（静音）
    dingSound.volume = 0.5;
    countdownSound.volume = 0.5;
    surpriseSound.volume = 0.5;
    
    dingSound.play().then(() => {
        dingSound.pause();
        dingSound.currentTime = 0;
    }).catch(e => {});
    
    countdownSound.play().then(() => {
        countdownSound.pause();
        countdownSound.currentTime = 0;
    }).catch(e => {});
    
    surpriseSound.play().then(() => {
        surpriseSound.pause();
        surpriseSound.currentTime = 0;
    }).catch(e => {});
    
    // 移除事件监听器，只需要一次
    document.removeEventListener('click', enableAudio);
});