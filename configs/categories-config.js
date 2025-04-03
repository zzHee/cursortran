// 分类配置
const categoriesConfig = [
    {
        id: "all",
        name: "全部分类",
        isDefault: true
    },
    {
        id: "ai",
        name: "AI引擎"
    },
    {
        id: "text",
        name: "文本处理"
    },
    {
        id: "coding",
        name: "编程工具"
    },
    {
        id: "converter",
        name: "格式转换"
    },
    {
        id: "other",
        name: "其他工具"
    }
];

// 导出配置
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = categoriesConfig;
} 