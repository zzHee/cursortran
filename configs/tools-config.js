// 工具配置
const toolsConfig = {
    // 本地工具配置
    "unicode-converter.html": {
        title: "Unicode 转换器",
        description: "将 Unicode 编码转换为对应的文字，支持 \\uXXXX 格式",
        type: "local",
        category: "converter"
    },
    // AI引擎链接
    "auto-coder": {
        title: "Auto-Coder.Chat",
        description: "AI驱动的交互式编程助手，支持Python 3.10-3.12版本",
        type: "external",
        url: "https://auto-coder.chat/en",
        category: "coding"
    },
    "torchv-kb": {
        title: "TorchV KB",
        description: "TorchV 知识库系统，提供智能知识管理和检索服务",
        type: "external",
        url: "https://kb.torchv.com/",
        category: "ai"
    },
    "volcano-ark": {
        title: "火山方舟引擎",
        description: "火山引擎提供的人工智能大模型引擎，基于方舟架构",
        type: "external",
        url: "https://www.volcengine.com/product/ark",
        category: "ai"
    },
    "aliyun-bailian": {
        title: "阿里云百炼",
        description: "阿里云提供的大语言模型产品，具有丰富的企业级应用能力",
        type: "external",
        url: "https://bailian.aliyun.com/",
        category: "ai"
    },
    "bocha-ai": {
        title: "博查AI",
        description: "专注于智能检索和知识分析的AI平台",
        type: "external",
        url: "https://www.bochaai.com/",
        category: "ai"
    },
    // 外部工具配置示例
    "external-tool-1": {
        title: "外部工具示例",
        description: "这是一个外部工具的示例",
        type: "external",
        url: "https://example.com/tool",
        category: "other"
    },
    // 添加更多示例工具
    "text-tool-example": {
        title: "文本工具示例",
        description: "用于处理文本的示例工具",
        type: "local",
        category: "text"
    },
    "coding-tool-example": {
        title: "编程工具示例",
        description: "用于编程的示例工具",
        type: "external",
        url: "https://example.com/coding-tool",
        category: "coding"
    }
};

// 导出配置
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = toolsConfig;
} 