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
    color: '#a1a1aa',
    previewGradient: 'from-zinc-900 via-zinc-950 to-black'
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
      '支持深色/冷灰/高对比无障碍模式'
    ],
    tags: ['Design System', 'Tailwind CSS', 'Framer Motion', 'Figma Tokens'],
    liveUrl: 'https://aetheria.cong.ltd',
    githubUrl: 'https://github.com/usmcong/aetheria',
    role: '设计总监 & 创意工程研发',
    color: '#d4d4d8',
    previewGradient: 'from-zinc-900/90 via-[#121215] to-black'
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
    color: '#71717a',
    previewGradient: 'from-[#1a1a1e] via-[#0d0d10] to-black'
  },
  {
    id: 'chronicle',
    title: 'Chronicle Reading Engine',
    subtitle: '专注于深度长文排版美学与纯净交互的数字出版引擎',
    category: 'Product Craft',
    year: '2026',
    description: '为独立写作者与数字刊物定制的无干扰阅读器与排版工具。严格依据活字排版韵律、自适应段落网格与离线字体子集化渲染。',
    challenge: '在多设备和不同语言混排时维持优雅的基线对齐与极致流畅的翻页物理动效。',
    solution: '自主构建排版网格度量系统，配合基于 CSS Houdini 与 WebGL 的纸质翻折质感，带来温润自然的数字阅读体验。',
    highlights: [
      '经典版式与黄金比例行距系统',
      '零网络依赖的离线离壳存储',
      '沉浸式纸张色彩与环境光感自适应'
    ],
    tags: ['TypeScript', 'Typography Engine', 'CSS Houdini', 'Tailwind', 'Motion'],
    liveUrl: 'https://chronicle.cong.ltd',
    githubUrl: 'https://github.com/usmcong/chronicle',
    role: '独立设计师 & 开发者',
    color: '#e4e4e7',
    previewGradient: 'from-zinc-900 via-zinc-950 to-black'
  }
];

export const STUDIO_SERVICES: Service[] = [
  {
    id: 's1',
    number: '01',
    title: '现代 Web 与全栈架构工程',
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
    description: '拒绝平庸的静态界面，通过数学韵律、物理动效与着色器赋予网页灵魂。打造令人过目难忘的品牌视觉与触觉微交互体验。',
    deliverables: ['定制级流光与着色器动效', 'WebGL 3D 展厅与空间交互', '丝滑滚轮驱动叙事', '触觉反馈与微交互动画'],
    techStack: ['Motion', 'Three.js / WebGL', 'Canvas API', 'GLSL Shaders', 'SVG Animations'],
    icon: 'Sparkles'
  },
  {
    id: 's3',
    number: '03',
    title: '独立数字产品孵化与出海',
    englishTitle: 'Indie Product & Global Craft',
    description: '助力创始人从 0 到 1 将产品想法雕琢为具备商业变现能力的全球化数字产品。包含用户体验闭环、国际化支付集成与转化率优化。',
    deliverables: ['MVP 敏捷研发与快速交付', 'Stripe / 全球支付流打通', '多语言国际化 (i18n) 架构', 'SEO 与网页核心性能指标优化'],
    techStack: ['SaaS Stacks', 'Stripe', 'Supabase / Firebase', 'Vercel', 'PostHog'],
    icon: 'Rocket'
  },
  {
    id: 's4',
    number: '04',
    title: '系统性能重构与设计工程规范',
    englishTitle: 'System Optimization & Design Systems',
    description: '为复杂业务提供性能诊断、渲染瓶颈疏通与设计系统搭建。统一工程与设计的语言，让团队在扩展期仍能保持极致的敏捷与美感。',
    deliverables: ['首屏加载与关键渲染路径优化', '多端组件库与 Figma Tokens 对齐', '代码可维护性与重构治理', '工程质量与自动化审查规范'],
    techStack: ['Design Systems', 'Performance Profiling', 'Webpack / Vite Tuning', 'Architecture Audit'],
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
