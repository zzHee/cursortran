// 自动加载分类列表
function loadCategories() {
    const categoryList = document.querySelector('.category-list');
    if (!categoryList) return;
    
    // 清空现有的分类
    categoryList.innerHTML = '';
    
    // 获取保存的分类选择
    const savedCategory = CacheManager.getSelectedCategory();
    
    // 加载配置的分类
    categoriesConfig.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = 'category-btn';
        categoryBtn.setAttribute('data-category', category.id);
        categoryBtn.textContent = category.name;
        
        // 设置选中的分类（优先使用缓存中的选择）
        if ((savedCategory && category.id === savedCategory) || 
            (!savedCategory && category.isDefault)) {
            categoryBtn.classList.add('active');
        }
        
        categoryList.appendChild(categoryBtn);
    });
    
    // 添加分类点击事件
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的活跃状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的活跃状态
            this.classList.add('active');
            
            // 获取选中的分类
            const selectedCategory = this.getAttribute('data-category');
            // 保存选中的分类到localStorage
            CacheManager.saveSelectedCategory(selectedCategory);
            // 过滤工具
            filterTools(selectedCategory);
            
            // 在小屏幕上点击分类后收起侧边栏
            if (window.innerWidth <= 768) {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) {
                    sidebar.classList.remove('expanded');
                    // 保存侧边栏状态
                    CacheManager.saveSidebarState(false);
                }
            }
        });
    });
}

// 自动加载工具列表
function loadTools() {
    const toolsGrid = document.getElementById('tools-grid');
    if (!toolsGrid) return;
    
    // 清空现有的工具
    toolsGrid.innerHTML = '';
    
    for (const [id, toolConfig] of Object.entries(toolsConfig)) {
        const toolCard = document.createElement('a');
        
        // 根据工具类型设置不同的链接
        if (toolConfig.type === 'external') {
            toolCard.href = toolConfig.url;
            toolCard.target = '_blank';  // 在新标签页打开外部链接
            toolCard.rel = 'noopener noreferrer';  // 安全属性
        } else {
            toolCard.href = `tools/${id}`;
        }
        
        toolCard.className = 'tool-link';
        // 添加数据分类属性
        toolCard.setAttribute('data-category', toolConfig.category);
        
        toolCard.innerHTML = `
            <div class="tool-card">
                <h3>${toolConfig.title}</h3>
                <p>${toolConfig.description}</p>
                ${toolConfig.type === 'external' ? '<span class="external-badge">外部链接</span>' : ''}
            </div>
        `;
        
        toolsGrid.appendChild(toolCard);
    }
}

// 根据分类筛选工具
function filterTools(category) {
    const toolCards = document.querySelectorAll('.tool-link');
    
    toolCards.forEach(card => {
        const toolCategory = card.getAttribute('data-category');
        
        if (category === 'all' || toolCategory === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// 当页面加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadTools();
    
    // 应用保存的分类选择
    const savedCategory = CacheManager.getSelectedCategory();
    if (savedCategory) {
        filterTools(savedCategory);
    }
}); 