/**
 * 缓存管理器 - 用于保存和恢复用户界面设置
 */

// 缓存键名常量
const CACHE_KEYS = {
    BACKGROUND_TYPE: 'userPref_backgroundType',
    SIDEBAR_STATE: 'userPref_sidebarExpanded',
    SELECTED_CATEGORY: 'userPref_selectedCategory'
};

/**
 * 缓存管理器对象
 */
const CacheManager = {
    /**
     * 保存设置到localStorage
     * @param {string} key - 设置键名
     * @param {any} value - 要保存的值
     */
    savePreference(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('保存用户偏好设置失败:', error);
        }
    },

    /**
     * 获取保存的设置
     * @param {string} key - 设置键名
     * @param {any} defaultValue - 默认值（如果没有找到缓存）
     * @returns {any} 返回保存的值或默认值
     */
    getPreference(key, defaultValue) {
        try {
            const value = localStorage.getItem(key);
            return value !== null ? JSON.parse(value) : defaultValue;
        } catch (error) {
            console.error('获取用户偏好设置失败:', error);
            return defaultValue;
        }
    },

    /**
     * 保存背景类型设置
     * @param {string} type - 背景类型 ('geometric' 或 'wave')
     */
    saveBackgroundType(type) {
        this.savePreference(CACHE_KEYS.BACKGROUND_TYPE, type);
    },

    /**
     * 获取保存的背景类型
     * @returns {string} 背景类型
     */
    getBackgroundType() {
        return this.getPreference(CACHE_KEYS.BACKGROUND_TYPE, 'geometric');
    },

    /**
     * 保存侧边栏状态
     * @param {boolean} isExpanded - 侧边栏是否展开
     */
    saveSidebarState(isExpanded) {
        this.savePreference(CACHE_KEYS.SIDEBAR_STATE, isExpanded);
    },

    /**
     * 获取保存的侧边栏状态
     * @returns {boolean} 侧边栏状态
     */
    getSidebarState() {
        return this.getPreference(CACHE_KEYS.SIDEBAR_STATE, false);
    },

    /**
     * 保存选中的分类
     * @param {string} category - 分类ID
     */
    saveSelectedCategory(category) {
        this.savePreference(CACHE_KEYS.SELECTED_CATEGORY, category);
    },

    /**
     * 获取保存的选中分类
     * @returns {string} 分类ID
     */
    getSelectedCategory() {
        return this.getPreference(CACHE_KEYS.SELECTED_CATEGORY, 'all');
    },

    /**
     * 清除所有用户偏好设置
     */
    clearAllPreferences() {
        Object.values(CACHE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    }
}; 