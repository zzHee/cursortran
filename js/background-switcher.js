// 背景切换器
document.addEventListener('DOMContentLoaded', function() {
    // 初始化背景切换按钮
    initBackgroundSwitcher();

    // 初始化3D波浪动画
    initWaveAnimation();
    
    // 初始化星空动画
    initStarryAnimation();
    
    // 初始化网格动画
    initGridAnimation();
    
    // 初始化漩涡动画
    initVortexAnimation();
    
    // 初始化泡泡动画
    initBubbleAnimation();
    
    // 初始化渐变动画
    initGradientAnimation();
    
    // 初始化纸浮雕动画
    initPaperAnimation();
    
    // 初始化主题切换
    initThemeSwitcher();
});

// 初始化背景切换功能
function initBackgroundSwitcher() {
    const bgButtons = document.querySelectorAll('.bg-toggle-btn');
    const geometricBg = document.querySelector('.geometric-background');
    const waveBg = document.querySelector('.wave-background');
    const starryBg = document.querySelector('.starry-background');
    const gridBg = document.querySelector('.grid-background');
    const vortexBg = document.querySelector('.vortex-background');
    const bubbleBg = document.querySelector('.bubble-background');
    const gradientBg = document.querySelector('.gradient-background');
    const paperBg = document.querySelector('.paper-background');
    
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
            starryBg.classList.remove('active');
            gridBg.classList.remove('active');
            vortexBg.classList.remove('active');
            bubbleBg.classList.remove('active');
            gradientBg.classList.remove('active');
            paperBg.classList.remove('active');
            
            // 激活选中的背景
            if (bgType === 'geometric') {
                geometricBg.classList.add('active');
            } else if (bgType === 'wave') {
                waveBg.classList.add('active');
            } else if (bgType === 'starry') {
                starryBg.classList.add('active');
            } else if (bgType === 'grid') {
                gridBg.classList.add('active');
            } else if (bgType === 'vortex') {
                vortexBg.classList.add('active');
            } else if (bgType === 'bubble') {
                bubbleBg.classList.add('active');
            } else if (bgType === 'gradient') {
                gradientBg.classList.add('active');
            } else if (bgType === 'paper') {
                paperBg.classList.add('active');
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
    const starryBg = document.querySelector('.starry-background');
    const gridBg = document.querySelector('.grid-background');
    const vortexBg = document.querySelector('.vortex-background');
    const bubbleBg = document.querySelector('.bubble-background');
    const gradientBg = document.querySelector('.gradient-background');
    const paperBg = document.querySelector('.paper-background');
    
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
        starryBg.classList.remove('active');
        gridBg.classList.remove('active');
        vortexBg.classList.remove('active');
        bubbleBg.classList.remove('active');
        gradientBg.classList.remove('active');
        paperBg.classList.remove('active');
        
        // 激活选中的背景
        if (bgType === 'geometric') {
            geometricBg.classList.add('active');
        } else if (bgType === 'wave') {
            waveBg.classList.add('active');
        } else if (bgType === 'starry') {
            starryBg.classList.add('active');
        } else if (bgType === 'grid') {
            gridBg.classList.add('active');
        } else if (bgType === 'vortex') {
            vortexBg.classList.add('active');
        } else if (bgType === 'bubble') {
            bubbleBg.classList.add('active');
        } else if (bgType === 'gradient') {
            gradientBg.classList.add('active');
        } else if (bgType === 'paper') {
            paperBg.classList.add('active');
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

// 初始化星空动画
function initStarryAnimation() {
    const canvas = document.getElementById('starryCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const starCount = 200;
    let shootingStars = [];
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // 重新创建星星
        createStars();
    }
    
    // 创建星星
    function createStars() {
        stars = [];
        
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                blinkRate: Math.random() * 0.05,
                brightness: Math.random() * 0.5 + 0.5,
                blinkDirection: Math.random() > 0.5 ? 1 : -1
            });
        }
    }
    
    // 创建流星
    function createShootingStar() {
        if (Math.random() < 0.03 && shootingStars.length < 3) {
            const startX = Math.random() * canvas.width;
            const startY = Math.random() * canvas.height / 3;
            shootingStars.push({
                x: startX,
                y: startY,
                length: Math.random() * 80 + 100,
                speed: Math.random() * 10 + 15,
                angle: (Math.random() * 30 + 20) * Math.PI / 180,
                trailWidth: Math.random() * 2 + 1,
                progress: 0
            });
        }
    }
    
    // 更新流星
    function updateShootingStars() {
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const shootingStar = shootingStars[i];
            shootingStar.progress += shootingStar.speed / 100;
            
            if (shootingStar.progress >= 1) {
                shootingStars.splice(i, 1);
            }
        }
    }
    
    // 绘制星空
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor);
        
        // 绘制星星
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            
            // 使星星闪烁
            star.brightness += star.blinkDirection * star.blinkRate;
            if (star.brightness > 1) {
                star.brightness = 1;
                star.blinkDirection = -1;
            } else if (star.brightness < 0.5) {
                star.brightness = 0.5;
                star.blinkDirection = 1;
            }
            
            // 绘制星星 - 使用有轻微主题色彩的白色
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            ctx.fill();
            
            // 为一些较大的星星添加彩色光晕
            if (star.size > 1.5) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${star.brightness * 0.2})`;
                ctx.fill();
            }
        }
        
        // 绘制流星
        for (let i = 0; i < shootingStars.length; i++) {
            const shootingStar = shootingStars[i];
            const startX = shootingStar.x;
            const startY = shootingStar.y;
            const dx = Math.cos(shootingStar.angle) * shootingStar.length * shootingStar.progress;
            const dy = Math.sin(shootingStar.angle) * shootingStar.length * shootingStar.progress;
            
            // 创建渐变 - 使用主题色彩
            const gradient = ctx.createLinearGradient(
                startX, startY,
                startX + dx, startY + dy
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0.5, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.5)`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
            
            // 绘制流星线
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX + dx, startY + dy);
            ctx.lineWidth = shootingStar.trailWidth;
            ctx.strokeStyle = gradient;
            ctx.stroke();
            
            // 绘制流星头部
            ctx.beginPath();
            ctx.arc(startX + dx, startY + dy, shootingStar.trailWidth * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.8)`;
            ctx.fill();
        }
        
        // 创建新的流星
        createShootingStar();
        
        // 更新流星
        updateShootingStars();
        
        // 继续动画
        requestAnimationFrame(drawStars);
    }
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    
    // 主题变化时刷新
    document.addEventListener('themeChanged', function() {
        drawStars();
    });
    
    resizeCanvas();
    drawStars();
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
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor) || { r: 76, g: 175, b: 80 }; // 默认绿色
        
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
            ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${p.z * 0.5})`;
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
                    ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${(1 - distance / connectionDistance) * 0.3 * Math.min(p.z, p2.z)})`;
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
    
    // 主题变化时刷新颜色
    document.addEventListener('themeChanged', function() {
        drawParticles();
    });
    
    resizeCanvas();
    drawParticles();
}

// 初始化网格动画
function initGridAnimation() {
    const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');
    let points = [];
    const pointCount = 80; // 点的数量
    const connectionDistance = 150; // 连接距离
    let mouseX = -1000; // 默认鼠标位置（屏幕外）
    let mouseY = -1000;
    const mouseRadius = 200; // 鼠标影响半径
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // 重新创建点
        createPoints();
    }
    
    // 跟踪鼠标位置
    function trackMouse(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // 鼠标离开窗口
    function mouseLeave() {
        mouseX = -1000;
        mouseY = -1000;
    }
    
    // 创建点
    function createPoints() {
        points = [];
        
        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 2,
                originalX: 0, // 将在下一步计算
                originalY: 0, // 将在下一步计算
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                opacity: Math.random() * 0.5 + 0.5
            });
        }
        
        // 设置初始位置作为原始位置
        for (let i = 0; i < points.length; i++) {
            points[i].originalX = points[i].x;
            points[i].originalY = points[i].y;
        }
    }
    
    // 绘制网格
    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor) || { r: 76, g: 175, b: 80 }; // 默认绿色
        
        // 更新并绘制点
        for (let i = 0; i < points.length; i++) {
            let p = points[i];
            
            // 更新点位置
            p.x += p.speedX;
            p.y += p.speedY;
            
            // 边界检查
            if (p.x < 0) {
                p.x = 0;
                p.speedX *= -1;
            }
            if (p.x > canvas.width) {
                p.x = canvas.width;
                p.speedX *= -1;
            }
            if (p.y < 0) {
                p.y = 0;
                p.speedY *= -1;
            }
            if (p.y > canvas.height) {
                p.y = canvas.height;
                p.speedY *= -1;
            }
            
            // 计算与鼠标的距离
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // 如果在鼠标影响范围内，将点向鼠标反方向移动
            if (distance < mouseRadius) {
                const force = (mouseRadius - distance) / mouseRadius;
                const angle = Math.atan2(dy, dx);
                p.x -= Math.cos(angle) * force * 5;
                p.y -= Math.sin(angle) * force * 5;
            } else {
                // 缓慢恢复到原始位置
                p.x += (p.originalX - p.x) * 0.02;
                p.y += (p.originalY - p.y) * 0.02;
            }
            
            // 绘制点
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${p.opacity})`;
            ctx.fill();
            
            // 连接附近点
            for (let j = i + 1; j < points.length; j++) {
                let p2 = points[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    // 绘制连接线
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    const lineOpacity = (1 - distance / connectionDistance) * 0.2 * Math.min(p.opacity, p2.opacity);
                    ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${lineOpacity})`;
                    ctx.lineWidth = Math.min(p.size, p2.size) / 8;
                    ctx.stroke();
                }
            }
        }
        
        // 继续动画
        requestAnimationFrame(drawGrid);
    }
    
    // 主题变化时刷新颜色
    document.addEventListener('themeChanged', function() {
        drawGrid();
    });
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', trackMouse);
    window.addEventListener('mouseleave', mouseLeave);
    
    resizeCanvas();
    drawGrid();
}

// 初始化粒子漩涡动画
function initVortexAnimation() {
    const canvas = document.getElementById('vortexCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 150; // 粒子数量
    const maxRadius = 350; // 最大轨道半径
    let centerX = window.innerWidth / 2; // 中心X坐标
    let centerY = window.innerHeight / 2; // 中心Y坐标
    let hue = 120; // 初始色相值 (绿色)
    let baseHue = 120; // 将根据主题颜色设置
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        centerX = window.innerWidth / 2;
        centerY = window.innerHeight / 2;
        createParticles();
    }
    
    // 创建粒子
    function createParticles() {
        particles = [];
        
        // 根据主题获取基础色相
        updateBaseHue();
        
        for (let i = 0; i < particleCount; i++) {
            const radius = Math.random() * maxRadius;
            const angle = Math.random() * Math.PI * 2;
            const orbitSpeed = 0.01 + Math.random() * 0.01; // 轨道速度
            
            particles.push({
                x: 0, // 将在绘制时计算
                y: 0, // 将在绘制时计算
                radius: radius, // 轨道半径
                angle: angle, // 初始角度
                orbitSpeed: orbitSpeed, // 轨道速度
                size: 1 + Math.random() * 3, // 粒子大小
                alpha: 0.2 + Math.random() * 0.8, // 透明度
                growing: Math.random() > 0.5, // 是否正在增长
                colorOffset: Math.random() * 30 - 15, // 颜色偏移
                pulseSpeed: 0.01 + Math.random() * 0.02 // 脉冲速度
            });
        }
    }
    
    // 更新基础色相
    function updateBaseHue() {
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor);
        if (rgbColor) {
            const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);
            baseHue = hslColor.h;
            hue = baseHue;
        }
    }
    
    // 绘制粒子
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 缓慢改变全局色相，围绕基础色相变化
        hue = (baseHue + Math.sin(Date.now() / 3000) * 20) % 360;
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor);
        
        // 为粒子创建径向渐变背景
        const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, maxRadius
        );
        gradient.addColorStop(0, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2)`); // 中心稍微亮一些
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // 边缘完全透明
        
        // 绘制渐变背景
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 更新和绘制粒子
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // 更新角度
            p.angle += p.orbitSpeed;
            
            // 计算新位置
            p.x = centerX + Math.cos(p.angle) * p.radius;
            p.y = centerY + Math.sin(p.angle) * p.radius;
            
            // 粒子大小脉动
            if (p.growing) {
                p.size += p.pulseSpeed;
                if (p.size > 5) {
                    p.growing = false;
                }
            } else {
                p.size -= p.pulseSpeed;
                if (p.size < 1) {
                    p.growing = true;
                }
            }
            
            // 计算颜色
            const colorHue = (hue + p.colorOffset) % 360;
            
            // 绘制粒子
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            
            // 创建粒子径向渐变
            const particleGradient = ctx.createRadialGradient(
                p.x, p.y, 0,
                p.x, p.y, p.size * 2
            );
            particleGradient.addColorStop(0, `hsla(${colorHue}, 100%, 60%, ${p.alpha})`); // 粒子中心
            particleGradient.addColorStop(1, `hsla(${colorHue}, 100%, 60%, 0)`); // 粒子边缘
            
            ctx.fillStyle = particleGradient;
            ctx.fill();
            
            // 绘制光晕效果
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${colorHue}, 100%, 70%, ${p.alpha * 0.2})`;
            ctx.fill();
            
            // 连接到中心的线
            if (Math.random() < 0.02) { // 仅随机绘制一些线条，避免过多
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = `hsla(${colorHue}, 100%, 60%, ${p.alpha * 0.5})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
        
        // 中心发光圆
        ctx.beginPath();
        ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
        const centerGlow = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, 30
        );
        centerGlow.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.8)`);
        centerGlow.addColorStop(1, `hsla(${hue}, 100%, 60%, 0)`);
        ctx.fillStyle = centerGlow;
        ctx.fill();
        
        // 继续动画
        requestAnimationFrame(drawParticles);
    }
    
    // 主题变化时刷新颜色
    document.addEventListener('themeChanged', function() {
        updateBaseHue();
    });
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    drawParticles();
}

// 初始化泡泡动画
function initBubbleAnimation() {
    const canvas = document.getElementById('bubbleCanvas');
    const ctx = canvas.getContext('2d');
    let bubbles = [];
    const bubbleCount = 50; // 泡泡数量
    let mouseX = -1000;
    let mouseY = -1000;
    const mouseRadius = 150; // 鼠标影响半径
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBubbles();
    }
    
    // 跟踪鼠标位置
    function trackMouse(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // 鼠标离开窗口
    function mouseLeave() {
        mouseX = -1000;
        mouseY = -1000;
    }
    
    // 创建泡泡
    function createBubbles() {
        bubbles = [];
        
        for (let i = 0; i < bubbleCount; i++) {
            bubbles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 10 + Math.random() * 50, // 随机半径
                dx: Math.random() * 2 - 1, // 随机水平速度
                dy: Math.random() * 2 - 1, // 随机垂直速度
                opacity: 0.1 + Math.random() * 0.4, // 随机透明度
                hue: Math.random() * 40 + 180, // 蓝绿色系范围
                pulseSpeed: 0.01 + Math.random() * 0.02, // 脉动速度
                pulseFactor: 0, // 脉动因子
                pulseDirection: 1, // 脉动方向
                waveOffset: Math.random() * Math.PI * 2 // 波动偏移
            });
        }
    }
    
    // 绘制泡泡
    function drawBubbles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor);
        
        // 更新和绘制泡泡
        for (let i = 0; i < bubbles.length; i++) {
            const bubble = bubbles[i];
            
            // 使泡泡脉动
            bubble.pulseFactor += bubble.pulseSpeed * bubble.pulseDirection;
            if (bubble.pulseFactor > 0.3) {
                bubble.pulseDirection = -1;
            } else if (bubble.pulseFactor < -0.2) {
                bubble.pulseDirection = 1;
            }
            
            // 计算当前大小 (加入脉动效果)
            const currentRadius = bubble.radius * (1 + bubble.pulseFactor);
            
            // 波动效果 - 基于时间的轻微垂直波动
            const time = Date.now() / 1000;
            const waveY = Math.sin(time + bubble.waveOffset) * 2;
            
            // 更新泡泡位置
            bubble.x += bubble.dx;
            bubble.y += bubble.dy + waveY * 0.3;
            
            // 计算与鼠标的距离
            const dx = mouseX - bubble.x;
            const dy = mouseY - bubble.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // 如果在鼠标影响范围内，将泡泡向鼠标反方向移动
            if (distance < mouseRadius + currentRadius) {
                const force = (mouseRadius - distance + currentRadius) / mouseRadius;
                const angle = Math.atan2(dy, dx);
                
                // 计算排斥力
                const repelX = Math.cos(angle) * force * 1.5;
                const repelY = Math.sin(angle) * force * 1.5;
                
                // 更新速度向量
                bubble.dx -= repelX;
                bubble.dy -= repelY;
                
                // 限制最大速度
                const speed = Math.sqrt(bubble.dx * bubble.dx + bubble.dy * bubble.dy);
                if (speed > 3) {
                    bubble.dx = (bubble.dx / speed) * 3;
                    bubble.dy = (bubble.dy / speed) * 3;
                }
            } else {
                // 轻微减速
                bubble.dx *= 0.99;
                bubble.dy *= 0.99;
                
                // 防止完全停止
                if (Math.abs(bubble.dx) < 0.2) bubble.dx += (Math.random() * 0.2 - 0.1);
                if (Math.abs(bubble.dy) < 0.2) bubble.dy += (Math.random() * 0.2 - 0.1);
            }
            
            // 边界检查 - 反弹效果
            if (bubble.x - currentRadius < 0) {
                bubble.x = currentRadius;
                bubble.dx *= -0.7;
            }
            if (bubble.x + currentRadius > canvas.width) {
                bubble.x = canvas.width - currentRadius;
                bubble.dx *= -0.7;
            }
            if (bubble.y - currentRadius < 0) {
                bubble.y = currentRadius;
                bubble.dy *= -0.7;
            }
            if (bubble.y + currentRadius > canvas.height) {
                bubble.y = canvas.height - currentRadius;
                bubble.dy *= -0.7;
            }
            
            // 绘制泡泡外圈
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, currentRadius, 0, Math.PI * 2);
            
            // 创建径向渐变 - 使用主题色和透明度
            let gradient = ctx.createRadialGradient(
                bubble.x - currentRadius * 0.3, 
                bubble.y - currentRadius * 0.3, 
                0,
                bubble.x, 
                bubble.y, 
                currentRadius
            );
            
            // 使用主题色作为基础
            const bubbleColor1 = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${bubble.opacity * 0.8})`;
            const bubbleColor2 = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${bubble.opacity * 0.3})`;
            const bubbleColor3 = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0)`;
            
            // 添加渐变色
            gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 0.7})`); // 亮点
            gradient.addColorStop(0.2, bubbleColor1);
            gradient.addColorStop(0.8, bubbleColor2);
            gradient.addColorStop(1, bubbleColor3);
            
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // 绘制泡泡高光
            ctx.beginPath();
            const hlSize = currentRadius * 0.25;
            ctx.arc(
                bubble.x - currentRadius * 0.4,
                bubble.y - currentRadius * 0.4, 
                hlSize, 
                0, 
                Math.PI * 2
            );
            gradient = ctx.createRadialGradient(
                bubble.x - currentRadius * 0.4,
                bubble.y - currentRadius * 0.4,
                0,
                bubble.x - currentRadius * 0.4,
                bubble.y - currentRadius * 0.4,
                hlSize
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // 绘制第二个小泡泡高光
            ctx.beginPath();
            const hlSize2 = currentRadius * 0.1;
            ctx.arc(
                bubble.x - currentRadius * 0.15,
                bubble.y - currentRadius * 0.25, 
                hlSize2, 
                0, 
                Math.PI * 2
            );
            gradient = ctx.createRadialGradient(
                bubble.x - currentRadius * 0.15,
                bubble.y - currentRadius * 0.25,
                0,
                bubble.x - currentRadius * 0.15,
                bubble.y - currentRadius * 0.25,
                hlSize2
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        
        // 继续动画
        requestAnimationFrame(drawBubbles);
    }
    
    // 主题变化时刷新颜色
    document.addEventListener('themeChanged', function() {
        drawBubbles();
    });
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', trackMouse);
    window.addEventListener('mouseleave', mouseLeave);
    
    resizeCanvas();
    drawBubbles();
}

// 初始化主题切换功能
function initThemeSwitcher() {
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    
    // 从缓存恢复主题设置
    applyThemeFromCache();
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的活跃状态
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前按钮的活跃状态
            this.classList.add('active');
            
            // 获取要激活的主题类型
            const themeType = this.getAttribute('data-theme');
            
            // 应用主题
            applyTheme(themeType);
            
            // 保存主题选择到缓存
            saveThemeType(themeType);
        });
    });
}

// 应用主题
function applyTheme(themeType) {
    // 移除所有已有的主题属性
    document.documentElement.removeAttribute('data-theme');
    
    // 如果选择非默认主题，添加主题属性
    if (themeType !== 'green') {
        document.documentElement.setAttribute('data-theme', themeType);
    }
    
    // 更新主题相关UI
    updateThemeUI(themeType);
}

// 更新主题相关UI
function updateThemeUI(themeType) {
    // 更新主题菜单按钮的颜色
    const themeMenuBtn = document.querySelector('.theme-menu-btn');
    
    // 根据主题设置菜单按钮的背景色
    themeMenuBtn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    
    // 更新背景菜单按钮的颜色
    const bgMenuBtn = document.querySelector('.bg-menu-btn');
    bgMenuBtn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    
    // 触发主题变更事件
    document.dispatchEvent(new Event('themeChanged'));
}

// 从缓存恢复主题设置
function applyThemeFromCache() {
    const themeType = getThemeType();
    const themeButton = document.querySelector(`.theme-toggle-btn[data-theme="${themeType}"]`);
    
    // 如果找到对应按钮
    if (themeButton) {
        // 移除所有按钮的活跃状态
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 添加当前按钮的活跃状态
        themeButton.classList.add('active');
        
        // 应用主题
        applyTheme(themeType);
    }
}

// 保存主题类型到本地存储
function saveThemeType(type) {
    localStorage.setItem('preferredTheme', type);
}

// 从本地存储获取主题类型
function getThemeType() {
    return localStorage.getItem('preferredTheme') || 'green';
}

// Hex转RGB工具函数
function hexToRgb(hex) {
    // 确保是标准格式
    hex = hex.replace(/^#/, '');
    
    // 处理缩写形式
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const bigint = parseInt(hex, 16);
    
    // 检查是否有效
    if (isNaN(bigint)) {
        return { r: 76, g: 175, b: 80 }; // 默认绿色
    }
    
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

// RGB转HSL工具函数
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0; // 灰色
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

// 初始化渐变动画
function initGradientAnimation() {
    const canvas = document.getElementById('gradientCanvas');
    const ctx = canvas.getContext('2d');
    let gradients = [];
    const gradientCount = 5; // 渐变元素数量
    let animationSpeed = 0.001; // 动画速度
    let time = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createGradients();
    }
    
    // 跟踪鼠标位置
    function trackMouse(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // 创建渐变元素
    function createGradients() {
        gradients = [];
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor) || { r: 76, g: 175, b: 80 }; // 默认绿色
        const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);
        
        for (let i = 0; i < gradientCount; i++) {
            const centerX = Math.random() * canvas.width;
            const centerY = Math.random() * canvas.height;
            const radius = Math.random() * 300 + 100;
            const hueOffset = (i * 20) % 60 - 30; // 色相变化范围
            
            gradients.push({
                x: centerX,
                y: centerY,
                radius: radius,
                hue: (hslColor.h + hueOffset) % 360,
                saturation: Math.max(30, hslColor.s - 20), // 降低饱和度使其更柔和
                originalX: centerX,
                originalY: centerY,
                offsetX: 0,
                offsetY: 0,
                speed: 0.5 + Math.random() * 0.5,
                amplitude: 50 + Math.random() * 50, // 波动幅度
                period: Math.random() * Math.PI * 2 // 初始相位
            });
        }
    }
    
    // 绘制渐变
    function drawGradients() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 获取主题颜色
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-gradient-end').trim();
        const rgbPrimary = hexToRgb(primaryColor) || { r: 76, g: 175, b: 80 };
        const rgbAccent = hexToRgb(accentColor) || { r: 33, g: 150, b: 243 };
        
        // 添加柔和的背景色
        ctx.fillStyle = `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 0.05)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 计算全局时间
        time += animationSpeed;
        
        // 计算鼠标对渐变的影响权重
        const mouseInfluence = 0.1;
        
        // 绘制每个渐变
        for (let i = 0; i < gradients.length; i++) {
            const g = gradients[i];
            
            // 计算波动偏移量
            g.offsetX = Math.sin(time * g.speed + g.period) * g.amplitude;
            g.offsetY = Math.cos(time * g.speed + g.period) * g.amplitude;
            
            // 添加鼠标影响，使渐变轻微跟随鼠标
            const dx = mouseX - g.originalX;
            const dy = mouseY - g.originalY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;
            const mouseEffect = Math.max(0, 1 - distance / maxDistance) * mouseInfluence;
            
            // 更新位置
            g.x = g.originalX + g.offsetX + dx * mouseEffect;
            g.y = g.originalY + g.offsetY + dy * mouseEffect;
            
            // 创建径向渐变
            const gradient = ctx.createRadialGradient(
                g.x, g.y, 0,
                g.x, g.y, g.radius
            );
            
            // 使用主题颜色创建渐变
            const mainColor = `hsla(${g.hue}, ${g.saturation}%, 70%, 0.4)`;
            gradient.addColorStop(0, mainColor);
            
            // 混合主题色和辅助色
            const midColor = `hsla(${(g.hue + 15) % 360}, ${g.saturation}%, 75%, 0.2)`;
            gradient.addColorStop(0.6, midColor);
            
            // 边缘渐变为透明
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            
            // 绘制渐变圆形
            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // 添加柔和光线效果
        addLightRays();
        
        // 继续动画
        requestAnimationFrame(drawGradients);
    }
    
    // 添加光线效果
    function addLightRays() {
        const rayCount = 5;
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor) || { r: 76, g: 175, b: 80 };
        const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);
        
        for (let i = 0; i < rayCount; i++) {
            const angle = (i / rayCount) * Math.PI * 2 + time;
            const rayX = canvas.width / 2 + Math.cos(angle) * canvas.width;
            const rayY = canvas.height / 2 + Math.sin(angle) * canvas.height;
            
            // 创建从中心到边缘的光线渐变
            const gradient = ctx.createLinearGradient(
                canvas.width / 2, canvas.height / 2,
                rayX, rayY
            );
            
            // 中心颜色为主题色
            gradient.addColorStop(0, `hsla(${hslColor.h}, ${Math.min(60, hslColor.s)}%, 80%, 0.1)`);
            // 边缘完全透明
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.lineTo(rayX, rayY);
            ctx.lineWidth = 80 + Math.sin(time * 2 + i) * 40; // 光线宽度随时间波动
            ctx.strokeStyle = gradient;
            ctx.stroke();
        }
    }
    
    // 主题变化时刷新颜色
    document.addEventListener('themeChanged', function() {
        createGradients();
    });
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', trackMouse);
    
    resizeCanvas();
    drawGradients();
}

// 初始化纸浮雕动画
function initPaperAnimation() {
    const canvas = document.getElementById('paperCanvas');
    const ctx = canvas.getContext('2d');
    let patterns = [];
    const patternCount = 8; // 纹理图案数量
    let paperColor = '#f9f9f9'; // 纸张默认颜色
    let timeOffset = 0; // 用于创造缓慢的移动效果
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createPatterns();
    }
    
    // 创建纸张纹理图案
    function createPatterns() {
        patterns = [];
        
        // 获取主题颜色，用于微妙的色彩融入
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const rgbColor = hexToRgb(primaryColor) || { r: 76, g: 175, b: 80 }; // 默认绿色
        
        // 根据主题色计算浅色纸张底色
        paperColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.03)`;
        
        // 创建纹理图案
        for (let i = 0; i < patternCount; i++) {
            // 添加浮雕纹理
            const size = 150 + Math.random() * 200; // 大型纹理区域
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const patternType = Math.floor(Math.random() * 4); // 4种不同纹理样式
            
            patterns.push({
                x: x,
                y: y,
                size: size,
                opacity: 0.03 + Math.random() * 0.03, // 非常低的不透明度
                type: patternType,
                rotation: Math.random() * Math.PI * 2, // 随机旋转
                scale: 0.5 + Math.random() * 0.5, // 随机缩放
                floatSpeed: 0.1 + Math.random() * 0.1, // 缓慢移动速度
                floatAngle: Math.random() * Math.PI * 2, // 随机移动方向
                floatDistance: 10 + Math.random() * 20, // 移动距离
                floatOffset: Math.random() * Math.PI * 2, // 移动相位偏移
                colorTint: { // 微妙色彩变化
                    r: Math.floor(rgbColor.r + (Math.random() * 20 - 10)),
                    g: Math.floor(rgbColor.g + (Math.random() * 20 - 10)),
                    b: Math.floor(rgbColor.b + (Math.random() * 20 - 10))
                }
            });
        }
    }
    
    // 绘制圆形浮雕图案
    function drawCirclePattern(x, y, size, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        // 光的方向 - 左上
        const lightX = -0.7;
        const lightY = -0.7;
        
        // 创建多个同心圆，模拟浮雕效果
        for (let r = size; r > 0; r -= size/8) {
            // 计算这个圆上光源的影响
            const nx = Math.cos(rotation); // 法线 x 坐标
            const ny = Math.sin(rotation); // 法线 y 坐标
            const lightDot = nx * lightX + ny * lightY; // 光与法线的点积
            
            // 根据光影创建浮雕效果
            if (lightDot > 0) {
                // 亮面
                ctx.fillStyle = `rgba(255, 255, 255, ${0.05 * lightDot})`;
            } else {
                // 暗面
                ctx.fillStyle = `rgba(0, 0, 0, ${-0.05 * lightDot})`;
            }
            
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    // 绘制线性浮雕图案
    function drawLinearPattern(x, y, size, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        const lineCount = 5 + Math.floor(Math.random() * 5);
        const lineWidth = size / (lineCount * 2);
        const lineDist = size / lineCount;
        
        // 光的方向 - 左上
        const lightX = -0.7;
        const lightY = -0.7;
        
        for (let i = -lineCount/2; i < lineCount/2; i++) {
            // 计算光源影响
            const nx = Math.cos(rotation + Math.PI/2); // 法线 x 坐标
            const ny = Math.sin(rotation + Math.PI/2); // 法线 y 坐标
            const lightDot = nx * lightX + ny * lightY; // 光与法线的点积
            
            if (lightDot > 0) {
                // 亮面
                ctx.fillStyle = `rgba(255, 255, 255, ${0.05 * lightDot})`;
            } else {
                // 暗面
                ctx.fillStyle = `rgba(0, 0, 0, ${-0.05 * lightDot})`;
            }
            
            ctx.fillRect(-size/2, i * lineDist, size, lineWidth);
        }
        
        ctx.restore();
    }
    
    // 绘制点状浮雕图案
    function drawDotPattern(x, y, size, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        const rows = 8 + Math.floor(Math.random() * 4);
        const cols = 8 + Math.floor(Math.random() * 4);
        const dotSize = size / (cols * 3);
        const dotDist = size / cols;
        
        // 光的方向 - 左上
        const lightX = -0.7;
        const lightY = -0.7;
        
        for (let i = -rows/2; i < rows/2; i++) {
            for (let j = -cols/2; j < cols/2; j++) {
                // 计算光源影响
                const nx = Math.cos(rotation); // 法线 x 坐标
                const ny = Math.sin(rotation); // 法线 y 坐标
                const lightDot = nx * lightX + ny * lightY; // 光与法线的点积
                
                if (lightDot > 0) {
                    // 亮面
                    ctx.fillStyle = `rgba(255, 255, 255, ${0.08 * lightDot})`;
                } else {
                    // 暗面
                    ctx.fillStyle = `rgba(0, 0, 0, ${-0.05 * lightDot})`;
                }
                
                ctx.beginPath();
                ctx.arc(j * dotDist, i * dotDist, dotSize, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    // 绘制波浪浮雕图案
    function drawWavePattern(x, y, size, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        const waveCount = 3 + Math.floor(Math.random() * 3);
        const amplitude = size / 8;
        const segments = 40;
        
        // 光的方向 - 左上
        const lightX = -0.7;
        const lightY = -0.7;
        
        for (let w = 0; w < waveCount; w++) {
            ctx.beginPath();
            const phaseOffset = Math.random() * Math.PI * 2;
            const frequency = (1 + Math.random()) * Math.PI * 2 / size;
            
            for (let i = 0; i <= segments; i++) {
                const xPos = -size/2 + i * size / segments;
                const yPos = Math.sin(xPos * frequency + phaseOffset) * amplitude;
                
                if (i === 0) {
                    ctx.moveTo(xPos, yPos + w * amplitude * 3);
                } else {
                    ctx.lineTo(xPos, yPos + w * amplitude * 3);
                }
            }
            
            // 计算光源影响
            const nx = Math.cos(rotation + Math.PI/2); // 法线 x 坐标
            const ny = Math.sin(rotation + Math.PI/2); // 法线 y 坐标
            const lightDot = nx * lightX + ny * lightY; // 光与法线的点积
            
            ctx.lineWidth = size / 40;
            if (lightDot > 0) {
                // 亮面
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * lightDot})`;
            } else {
                // 暗面
                ctx.strokeStyle = `rgba(0, 0, 0, ${-0.05 * lightDot})`;
            }
            
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    // 绘制纸浮雕效果
    function drawPaper() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制纸张基础颜色
        ctx.fillStyle = paperColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制纸张纹理
        const noiseCanvas = document.createElement('canvas');
        const noiseCtx = noiseCanvas.getContext('2d');
        noiseCanvas.width = 200;
        noiseCanvas.height = 200;
        
        // 创建噪点纹理
        const noiseData = noiseCtx.createImageData(200, 200);
        for (let i = 0; i < noiseData.data.length; i += 4) {
            const value = Math.floor(Math.random() * 255);
            noiseData.data[i] = value;
            noiseData.data[i+1] = value;
            noiseData.data[i+2] = value;
            noiseData.data[i+3] = 1; // 非常低的不透明度
        }
        noiseCtx.putImageData(noiseData, 0, 0);
        
        // 使用噪点纹理作为纸张质感
        const paperPattern = ctx.createPattern(noiseCanvas, 'repeat');
        ctx.fillStyle = paperPattern;
        ctx.globalAlpha = 0.02; // 非常低的不透明度
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
        
        // 更新时间偏移
        timeOffset += 0.005;
        
        // 绘制各种纸张浮雕图案
        for (const pattern of patterns) {
            // 计算浮动位置
            const floatX = Math.sin(timeOffset * pattern.floatSpeed + pattern.floatOffset) * pattern.floatDistance;
            const floatY = Math.cos(timeOffset * pattern.floatSpeed + pattern.floatOffset) * pattern.floatDistance;
            
            // 添加微妙的颜色
            ctx.fillStyle = `rgba(${pattern.colorTint.r}, ${pattern.colorTint.g}, ${pattern.colorTint.b}, ${pattern.opacity})`;
            ctx.globalAlpha = pattern.opacity;
            
            // 根据图案类型绘制不同的浮雕效果
            switch (pattern.type) {
                case 0:
                    drawCirclePattern(pattern.x + floatX, pattern.y + floatY, pattern.size * pattern.scale, pattern.rotation);
                    break;
                case 1:
                    drawLinearPattern(pattern.x + floatX, pattern.y + floatY, pattern.size * pattern.scale, pattern.rotation);
                    break;
                case 2:
                    drawDotPattern(pattern.x + floatX, pattern.y + floatY, pattern.size * pattern.scale, pattern.rotation);
                    break;
                case 3:
                    drawWavePattern(pattern.x + floatX, pattern.y + floatY, pattern.size * pattern.scale, pattern.rotation);
                    break;
            }
        }
        
        ctx.globalAlpha = 1.0;
        
        // 添加整体浮雕光影效果
        addOverallLighting();
        
        // 继续动画
        requestAnimationFrame(drawPaper);
    }
    
    // 添加整体光影效果
    function addOverallLighting() {
        // 创建径向渐变效果模拟整体光源
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const lightAngle = timeOffset * 0.1; // 缓慢移动的光源
        
        // 模拟左上角的光源
        const lightX = centerX - Math.cos(lightAngle) * canvas.width * 0.4;
        const lightY = centerY - Math.sin(lightAngle) * canvas.height * 0.4;
        
        const gradient = ctx.createRadialGradient(
            lightX, lightY, 0,
            lightX, lightY, canvas.width * 0.8
        );
        
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.03)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 添加边缘阴影
        addEdgeShadow();
    }
    
    // 添加边缘阴影效果
    function addEdgeShadow() {
        const shadowSize = Math.min(canvas.width, canvas.height) * 0.15;
        
        // 左侧阴影
        const leftGradient = ctx.createLinearGradient(0, 0, shadowSize, 0);
        leftGradient.addColorStop(0, 'rgba(0, 0, 0, 0.03)');
        leftGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = leftGradient;
        ctx.fillRect(0, 0, shadowSize, canvas.height);
        
        // 右侧阴影
        const rightGradient = ctx.createLinearGradient(canvas.width, 0, canvas.width - shadowSize, 0);
        rightGradient.addColorStop(0, 'rgba(0, 0, 0, 0.03)');
        rightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = rightGradient;
        ctx.fillRect(canvas.width - shadowSize, 0, shadowSize, canvas.height);
        
        // 顶部阴影
        const topGradient = ctx.createLinearGradient(0, 0, 0, shadowSize);
        topGradient.addColorStop(0, 'rgba(0, 0, 0, 0.03)');
        topGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = topGradient;
        ctx.fillRect(0, 0, canvas.width, shadowSize);
        
        // 底部阴影
        const bottomGradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - shadowSize);
        bottomGradient.addColorStop(0, 'rgba(0, 0, 0, 0.03)');
        bottomGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bottomGradient;
        ctx.fillRect(0, canvas.height - shadowSize, canvas.width, shadowSize);
    }
    
    // 主题变化时刷新颜色
    document.addEventListener('themeChanged', function() {
        createPatterns();
    });
    
    // 初始化
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    drawPaper();
} 