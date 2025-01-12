const socket = io();
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const playerSize = 20;
const tankColor = 'blue';

// 玩家坦克的初始位置
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;

// 监听服务器发送的玩家位置更新
socket.on('updatePlayerPosition', function(data) {
    playerX = data.x;
    playerY = data.y;
    render();
});

// 监听服务器发送的子弹位置更新
socket.on('updateBullets', function(bullets) {
    // 更新子弹位置的逻辑
});

// 玩家移动坦克
document.addEventListener('keydown', function(e) {
    const moveDistance = 5;
    let newX, newY;
    switch(e.keyCode) {
        case 37: newX = playerX - moveDistance; break; // 左
        case 38: newY = playerY - moveDistance; break; // 上
        case 39: newX = playerX + moveDistance; break; // 右
        case 40: newY = playerY + moveDistance; break; // 下
        default: return;
    }
    // 向服务器发送移动指令
    socket.emit('movePlayer', { x: newX, y: newY });
});

// 渲染坦克
function renderTank(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, playerSize, playerSize);
}

// 渲染游戏画面
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
    renderTank(playerX, playerY, tankColor); // 渲染玩家坦克
    // 这里可以添加渲染子弹的代码
    requestAnimationFrame(render); // 请求下一帧
}

// 启动游戏渲染循环
render();

// 连接成功后，发送加入游戏的事件
socket.on('connect', function() {
    socket.emit('joinGame');
});