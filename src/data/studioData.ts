import { Project, Service, StudioPrinciple } from '../types';

export const STUDIO_PROJECTS: Project[] = [
  {
    id: 'novaos',
    title: 'NovaOS Cloud Engine',
    subtitle: '基于 WebAssembly 的轻量级云原生开发与协作工作台',
    category: 'Full-Stack',
    year: '2026',
    description: '一个完全运行在现代浏览器内的轻量级虚拟操作系统与代码工作区。无需本地配置，毫秒级冷启动，支持多窗口视口管理与端到端沙盒执行。',
    challenge: '在浏览器单线程与内存受限的环境下实现多进程调度与低延迟虚拟文件系统。',
    solution: '深度结合 WebAssembly 与 SharedArrayBuffer 构建多线程虚拟调度总线，并利用 OPFS (Origin Private File System) 达成接近原生磁盘的读写吞吐。',
    highlights: [
      '<10ms 交互响应延迟',
      '完全离线可用的客户端沙盒',
      '支持多窗口拖拽分屏与平铺模式'
    ],
    tags: ['React 19', 'TypeScript', 'WebAssembly', 'Tailwind', 'Motion'],
    liveUrl: 'https://novaos.cong.ltd',
    githubUrl: 'https://github.com/usmcong/novaos',
    role: '独力架构与全栈实现',
    color: '#38bdf8',
    previewGradient: 'from-sky-950/60 via-cyan-900/30 to-zinc-950'
  },
  {
    id: 'aetheria',
    title: 'Aetheria Design System',
    subtitle: '多端自适应流体设计系统与数学美感交互规范',
    category: 'Creative Dev',
    year: '2025',
    description: '专为高密度 SaaS 与沉浸式数字体验定制的现代化设计资产与动效库。涵盖 60+ 生产就绪组件、数学黄金比例排版系统及符合 WCAG 2.2 AAA 的色彩感知模型。',
    challenge: '在复杂状态和高频动效交织下，保持 120fps 的丝滑刷新率与零无用重渲染。',
    solution: '使用 GPU 加速的合成层隔离与 transform-only 动效策略，配合细粒度响应式 Token 系统。',
    highlights: [
      '严格 8pt 网格与数学流体比例',
      '内置微震动与自然弹簧物理衰减',
      '支持深色/极光/高对比无障碍模式'
    ],
    tags: ['Design System', 'Tailwind CSS', 'Framer Motion', 'Figma Tokens'],
    liveUrl: 'https://aetheria.cong.ltd',
    githubUrl: 'https://github.com/usmcong/aetheria',
    role: '设计总监 & 创意工程研发',
    color: '#a855f7',
    previewGradient: 'from-purple-950/60 via-fuchsia-900/30 to-zinc-950'
  },
  {
    id: 'hyperion',
    title: 'Hyperion Trading Terminal',
    subtitle: '实时去中心化流动性聚合与毫秒级深度图终端',
    category: 'Full-Stack',
    year: '2025',
    description: '面向专业量化机构与高频交易者的桌面级 Web 交易看板，集成多交易所 WebSocket 聚合流、极速 Canvas K线图与秒级策略回测。',
    challenge: '每秒处理超过 50,000 条订单簿增量广播，同时避免 UI 丢帧或内存泄漏。',
    solution: '引入 Web Worker 进行订单聚合与差异计算，采用双缓冲 Canvas 与 FlatBuffer 二进制协议传输。',
    highlights: [
      '50k TPS 毫秒级数据通道',
      '自定义指标公式沙盒引擎',
      '全键盘热键无鼠标极客模式'
    ],
    tags: ['TypeScript', 'Canvas 2D', 'WebSockets', 'Web Workers', 'Node.js'],
    liveUrl: 'https://hyperion.cong.ltd',
    githubUrl: 'https://github.com/usmcong/hyperion',
    role: '系统架构师 & 前端主程',
    color: '#10b981',
    previewGradient: 'from-emerald-950/60 via-teal-900/30 to-zinc-950'
  },
  {
    id: 'luminal',
    title: 'Luminal AI Agent Studio',
    subtitle: '多模态语义图谱探索与智能代理工作流系统',
    category: 'AI Systems',
    year: '2026',
    description: '连接人类直觉与大模型决策中枢的生成式知识平台。支持多源异构文档智能解析、实体关系拓扑自动生成与自主工具调用链路编排。',
    challenge: '解决复杂多步 Agent 推理过程的黑盒状态，让用户能够直观干预与回溯分支。',
    solution: '设计了类似力导向图的思考链路树（Tree of Thoughts Visualizer），支持断点调试与提示词微调。',
    highlights: [
      '直观的 Agent 思考链路拓扑图',
      '混合检索与精准向量定位',
      '一键部署工具链与 API 钩子'
    ],
    tags: ['Gemini 2.5', 'Vector DB', 'Next.js', 'FastAPI', 'D3.js'],
    liveUrl: 'https://luminal.cong.ltd',
    githubUrl: 'https://github.com/usmcong/luminal-ai',
    role: '全栈 AI 工程师',
    color: '#f59e0b',
    previewGradient: 'from-amber-950/60 via-orange-900/30 to-zinc-950'
  }
];

export const STUDIO_SERVICES: Service[] = [
  {
    id: 's1',
    number: '01',
    title: '全栈现代架构与应用研发',
    englishTitle: 'Full-Stack Web & App Engineering',
    description: '从系统顶层架构到微交互细节的端到端实现。专注于 React 19、TypeScript、Node.js 与分布式云原生应用，追求极致代码优雅与卓越性能。',
    deliverables: ['高并发 Web 应用程序', '多端适配响应式系统', '高性能 RESTful / GraphQL API', '自动化测试与 CI/CD 管道'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker'],
    icon: 'Layers'
  },
  {
    id: 's2',
    number: '02',
    title: '创意开发与沉浸式动态交互',
    englishTitle: 'Creative Development & Motion',
    description: '拒绝平庸的静态界面，通过数学韵律、物理动效与 Shader 着色器赋予网页灵魂。打造令人过目难忘的品牌首屏与微交互体验。',
    deliverables: ['极光/流光/粒子等定制动效', 'WebGL 3D 展厅与空间交互', '丝滑滚轮驱动叙事', '触觉与微交互动画'],
    techStack: ['Motion (Framer)', 'Three.js / WebGL', 'Canvas API', 'GLSL Shaders', 'SVG Animations'],
    icon: 'Sparkles'
  },
  {
    id: 's3',
    number: '03',
    title: '独立产品孵化与全球化工程',
    englishTitle: 'Indie Product & Global SaaS',
    description: '助力创始人从 0 到 1 将产品想法雕琢为具备商业变现能力的全球化数字产品。包含用户体验闭环、国际化支付集成与转化率优化。',
    deliverables: ['MVP 敏捷研发与快速交付', 'Stripe / LemonSqueezy 支付流', '多语言国际化 (i18n) 架构', 'SEO 与网页核心性能指标 (Core Web Vitals) 优化'],
    techStack: ['SaaS Stacks', 'Stripe', 'Supabase / Firebase', 'Vercel', 'PostHog'],
    icon: 'Rocket'
  },
  {
    id: 's4',
    number: '04',
    title: 'AI 赋能系统与智能代理方案',
    englishTitle: 'AI Integration & Agent Workflows',
    description: '将现代生成式 AI (Gemini / Claude / DeepSeek) 的能力落地到具体业务场景，打造具备自主感知、工具调用与多步推理的实用生产力工具。',
    deliverables: ['智能问答与知识库 (RAG)', '多模态图像/语音交互接口', 'Function Calling 业务自动化', '提示词工程与模型微调'],
    techStack: ['Google GenAI SDK', 'LangChain', 'Vector Search', 'Python / TS API'],
    icon: 'Cpu'
  }
];

export const STUDIO_PRINCIPLES: StudioPrinciple[] = [
  {
    number: '01',
    title: '形式忠于功能，克制胜于繁复',
    description: '任何视觉装饰如果不能提升用户理解或情感共鸣，便是多余的杂音。我们崇尚减法设计，用极简的排版和留白传递力量。'
  },
  {
    number: '02',
    title: '毫秒级的交互执念',
    description: '60fps 与 120fps 之间的微小差异能被指尖清晰感知。我们在每一个过渡曲线、合成层和网络请求上做极致压榨。'
  },
  {
    number: '03',
    title: '类型安全与工程工匠精神',
    description: '100% 严格类型检查、无副作用的清晰模块设计与自解释代码。优秀的架构不仅在今天健壮运行，也能优雅地面对未来的扩展。'
  }
];

export const TECH_STACKS = {
  frontend: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite', 'Zustand', 'Radix UI'],
  backend: ['Node.js', 'Express', 'Go', 'PostgreSQL', 'Redis', 'GraphQL', 'Prisma', 'Cloudflare Workers'],
  creative: ['GLSL Shaders', 'Three.js', 'Canvas API', 'Figma', 'SVG Manipulation', 'Audio Synth'],
  devops: ['Docker', 'Google Cloud Run', 'GitHub Actions', 'Vercel', 'AWS', 'Linux']
};
