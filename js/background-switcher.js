// 背景切换器
document.addEventListener('DOMContentLoaded', function() {
    // 初始化背景切换按钮
    initBackgroundSwitcher();

    // 初始化3D波浪动画
    initWaveAnimation();
});

// 初始化背景切换功能
function initBackgroundSwitcher() {
    const bgButtons = document.querySelectorAll('.bg-toggle-btn');
    const geometricBg = document.querySelector('.geometric-background');
    const waveBg = document.querySelector('.wave-background');
    
    // 从缓存恢复背景设置
    applyBackgroundFromCache();
    
    bgButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的活跃状态
            bgButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前按钮的活跃状态
            this.classList.add('active');
            
            // 获取要激活的背景类型
            const bgType = this.getAttribute('data-bg');
            
            // 隐藏所有背景
            geometricBg.classList.remove('active');
            waveBg.classList.remove('active');
            
            // 激活选中的背景
            if (bgType === 'geometric') {
                geometricBg.classList.add('active');
            } else if (bgType === 'wave') {
                waveBg.classList.add('active');
            }
            // 对于'none'选项不需要激活任何背景
            
            // 保存背景选择到缓存
            saveBackgroundType(bgType);
        });
    });
}

// 从缓存恢复背景设置
function applyBackgroundFromCache() {
    const bgType = getBackgroundType();
    const bgButton = document.querySelector(`.bg-toggle-btn[data-bg="${bgType}"]`);
    const geometricBg = document.querySelector('.geometric-background');
    const waveBg = document.querySelector('.wave-background');
    
    // 如果找到对应按钮
    if (bgButton) {
        // 移除所有按钮的活跃状态
        document.querySelectorAll('.bg-toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 添加当前按钮的活跃状态
        bgButton.classList.add('active');
        
        // 隐藏所有背景
        geometricBg.classList.remove('active');
        waveBg.classList.remove('active');
        
        // 激活选中的背景
        if (bgType === 'geometric') {
            geometricBg.classList.add('active');
        } else if (bgType === 'wave') {
            waveBg.classList.add('active');
        }
        // 对于'none'选项不需要激活任何背景
    }
}

// 保存背景类型到本地存储
function saveBackgroundType(type) {
    localStorage.setItem('preferredBackground', type);
}

// 从本地存储获取背景类型
function getBackgroundType() {
    return localStorage.getItem('preferredBackground') || 'geometric';
}

// 初始化3D波浪动画
function initWaveAnimation() {
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let connectionDistance = 150;
    let mouseX = 0;
    let mouseY = 0;
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // 重新创建粒子
        createParticles();
    }
    
    // 跟踪鼠标位置
    function trackMouse(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // 创建粒子
    function createParticles() {
        particles = [];
        const particleCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 2, // 增加粒子的基础大小
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                z: Math.random() * 0.7 + 0.5, // 增加z深度范围，使点更明显
            });
        }
    }
    
    // 绘制粒子
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 更新并绘制粒子
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            
            // 创建波浪效果 - 粒子在y轴上波动
            let time = Date.now() / 2000;
            let waveY = Math.sin(time + p.x / 100) * 25 * p.z;
            
            // 更新粒子位置
            p.x += p.speedX;
            p.y += p.speedY + Math.sin(time) * 0.2;
            
            // 边界检查
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            // 绘制粒子
            let displayY = p.y + waveY;
            
            ctx.beginPath();
            ctx.arc(p.x, displayY, p.size * p.z, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(76, 175, 80, ${p.z * 0.5})`; // 使用更柔和的绿色
            ctx.fill();
            
            // 连接附近粒子
            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dx = p.x - p2.x;
                let dy = (displayY) - (p2.y + Math.sin(time + p2.x / 100) * 25 * p2.z);
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    // 绘制连接线
                    ctx.beginPath();
                    ctx.moveTo(p.x, displayY);
                    ctx.lineTo(p2.x, p2.y + Math.sin(time + p2.x / 100) * 25 * p2.z);
                    ctx.strokeStyle = `rgba(76, 175, 80, ${(1 - distance / connectionDistance) * 0.3 * Math.min(p.z, p2.z)})`; // 使用更柔和的绿色
                    ctx.lineWidth = Math.min(p.z, p2.z) * 1.2;
                    ctx.stroke();
                    ctx.lineWidth = 1;
                }
            }
        }
        
        // 继续动画
        requestAnimationFrame(drawParticles);
    }
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', trackMouse);
    
    resizeCanvas();
    drawParticles();
} 