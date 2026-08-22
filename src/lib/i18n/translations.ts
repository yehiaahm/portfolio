export type Locale = "en" | "ar";

export interface Project {
  index: string;
  status: string;
  name: string;
  tagline: string;
  problem: string;
  build: string;
  role: string;
  value: string;
  edge: string;
  tech: string[];
  year: string;
  accent: "clay" | "sage" | "gold" | "sky";
  liveUrl?: string;
}

export interface Dictionary {
  dir: "ltr" | "rtl";
  langLabel: string;
  email: string;
  nav: {
    work: string;
    about: string;
    capabilities: string;
    process: string;
    contact: string;
    talk: string;
  };
  hero: {
    badge: string;
    name: string;
    line2: string;
    line3: string;
    accentWord: string;
    tagline: string;
    ctaWork: string;
    ctaTalk: string;
    scroll: string;
    keywords: string[];
    badgeFullStack: string;
    badgeCsStudent: string;
  };
  about: {
    index: string;
    label: string;
    heading1: string;
    heading2: string;
    body: string[];
    factsLabel: string;
    facts: { label: string; value: string }[];
  };
  work: {
    index: string;
    label: string;
    heading: string;
    description: string;
    problemLabel: string;
    builtLabel: string;
    roleLabel: string;
    edgeLabel: string;
    ctaDiscuss: string;
    ctaLive: string;
    projects: Project[];
  };
  capabilities: {
    index: string;
    label: string;
    heading: string;
    description: string;
    items: { title: string; description: string }[];
  };
  skills: {
    index: string;
    label: string;
    heading: string;
    description: string;
    groups: { title: string; skills: string[] }[];
  };
  process: {
    index: string;
    label: string;
    heading: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    badge: string;
    heading1: string;
    heading2: string;
    body: string;
    socials: { key: string; label: string; href: string }[];
  };
  footer: {
    tagline: string;
    designedBy: string;
    rights: string;
  };
}

const email = "yehiaahmed195200@gmail.com";

const socialsBase = [
  { key: "github", label: "GitHub", href: "https://github.com/yehiaahm" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/yahya-ahmed-035054325" },
];

export const translations: Record<Locale, Dictionary> = {
  en: {
    dir: "ltr",
    langLabel: "العربية",
    email,
    nav: {
      work: "Work",
      about: "About",
      capabilities: "Capabilities",
      process: "Process",
      contact: "Contact",
      talk: "Let's Talk",
    },
    hero: {
      badge: "Available for opportunities",
      name: "Yehia Ahmed",
      line2: "I build digital",
      line3: "experiences that ",
      accentWord: "matter.",
      tagline:
        "Computer Science student and digital product builder. I turn ideas into modern web products that look great, work smoothly, and create real value.",
      ctaWork: "Selected Work",
      ctaTalk: "Let's Talk",
      scroll: "Scroll",
      keywords: [
        "Full-Stack Development",
        "Product Engineering",
        "React & Next.js",
        "System Design",
        "Interaction Design",
        "Clean Code",
      ],
      badgeFullStack: "Full-Stack",
      badgeCsStudent: "CS Student",
    },
    about: {
      index: "02",
      label: "About",
      heading1: "I care about the details most people scroll past — ",
      heading2: "the ones that make something feel finished.",
      body: [
        "I'm Yehia Ahmed, a Computer Science student and digital product builder passionate about creating modern websites, web applications, and digital experiences.",
        "I combine technology, design, and product thinking to turn ideas into polished digital products — not just functional, but engaging and visually impressive.",
        "I enjoy working on real-world problems, building products from the ground up, and continuously exploring new technologies to create better digital experiences.",
      ],
      factsLabel: "Quick Facts",
      facts: [
        { label: "Focus", value: "Full-Stack Web Development" },
        { label: "Currently", value: "Computer Science Student" },
        { label: "Working style", value: "Remote-friendly" },
        { label: "Available", value: "Open to opportunities" },
      ],
    },
    work: {
      index: "03",
      label: "Selected Work",
      heading: "Products, not just projects.",
      description:
        "A closer look at what I've built end-to-end — the problem behind each one, the decisions I made, and why it matters.",
      problemLabel: "The Problem",
      builtLabel: "What I Built",
      roleLabel: "My Role",
      edgeLabel: "What Makes It Different",
      ctaDiscuss: "Discuss a project like this",
      ctaLive: "View Live Site",
      projects: [
        {
          index: "01",
          status: "Individual Project",
          name: "Pharmacy E-commerce & ERP",
          tagline:
            "A full-stack platform where customers shop and pharmacies run their entire operation — in one system.",
          problem:
            "Pharmacies need to combine an easy customer shopping experience with precise control over inventory, pricing, and orders. Running e-commerce and internal operations as separate systems makes the data hard to track and keep in sync.",
          build:
            "A full-stack pharmacy platform combining a customer-facing storefront with a branch-level ERP — product catalog, search and variants, cart and orders, inventory and stock tracking with batch and expiry-date management, pricing, authentication, and admin tooling, with offline caching via IndexedDB.",
          role:
            "Full-stack developer, solo project — built the frontend, backend, database, deployment, and the integration between them.",
          value:
            "Demonstrates the ability to design a real operational system — handling product variants, batch numbers, and expiry-date tracking — not just a storefront bolted onto a shopping cart.",
          edge:
            "Combines customer experience, pharmacy operations, and inventory management in one system — with real batch and expiry-date tracking that makes it closer to production-grade software than an academic exercise.",
          tech: ["React 19", "TypeScript", "Spring Boot 3", "Java 21", "MySQL", "Spring Security / JWT", "TanStack Query", "IndexedDB"],
          year: "2025",
          accent: "sage",
          liveUrl: "https://dahmed-production.up.railway.app/",
        },
        {
          index: "02",
          status: "Individual Project",
          name: "AnimaSys",
          tagline:
            "An AI-powered ERP for pet shops — packaged as a standalone desktop app with its own embedded database.",
          problem:
            "Pet shops need to manage daily sales, inventory, cash flow, grooming services, employees, and permissions in one place — and traditional systems make it hard for owners to quickly see what's selling, what needs attention, and where the business is underperforming.",
          build:
            "An internal ERP for pet shops covering daily revenue and cashier transactions, inventory with QR/barcode scanning, grooming services, and role-based permissions — layered with AI-powered business insights and an AI chat companion, packaged as a standalone Windows desktop application.",
          role:
            "Full-stack developer, solo project — designed the system architecture, frontend, business workflows, AI features, desktop packaging, and the deployment/installation flow.",
          value:
            "Proves the ability to combine traditional business systems with an AI intelligence layer, then ship it as production-grade desktop software, not just a web dashboard.",
          edge:
            "Packaged as a standalone Windows desktop app with a fully embedded backend and database (portable JRE + MySQL), plus an AI chat companion that explains the business data instead of just displaying it.",
          tech: ["React", "TypeScript", "Electron", "Spring Boot", "Java", "MySQL", "Zustand", "Inno Setup"],
          year: "2026",
          accent: "gold",
        },
        {
          index: "03",
          status: "Individual Project",
          name: "AI Fitness & Nutrition Coaching Platform",
          tagline:
            "A unified AI coaching platform that brings workouts, nutrition, and progress tracking into one personalized experience.",
          problem:
            "People often struggle to follow a consistent fitness and nutrition plan because workout routines, nutrition guidance, and progress tracking are usually spread across different apps or handled manually.",
          build:
            "An AI-powered fitness and nutrition coaching platform bringing together personalized fitness planning, workout management, nutrition guidance, progress tracking, and a dashboard — built as an MVP with a scalable architecture ready to connect to a full backend and AI services.",
          role:
            "Full-stack / product developer, solo project — worked on the product concept, user experience, frontend architecture, application workflows, and the overall platform structure.",
          value:
            "Demonstrates the ability to design a coherent AI-driven product experience from the ground up, not just implement isolated screens — architecture built to scale into real backend and AI services.",
          edge:
            "Combines fitness, nutrition, and AI coaching into one unified experience instead of another basic workout tracker — designed as a digital coaching layer focused on personalization, not just data display.",
          tech: ["React", "TypeScript", "Vite", "Modern Frontend Architecture", "localStorage (MVP)", "AI-Oriented Architecture"],
          year: "2026",
          accent: "sky",
        },
        {
          index: "04",
          status: "Individual Project",
          name: "PetMate",
          tagline: "A matchmaking platform that turns pet breeding into a structured, discoverable experience.",
          problem:
            "Pet owners struggle to find suitable breeding matches for their pets in an organized way, usually relying on scattered, informal communication instead of structured discovery.",
          build:
            "A web platform that connects pet owners and helps them discover suitable breeding matches — structured pet profiles, a discovery and matching workflow, and a modern, responsive interface built around finding the right match rather than browsing at random.",
          role: "Full-stack developer, solo project — designed and built the frontend, backend, and database from scratch.",
          value:
            "Shows the ability to turn a real-world problem into a specialized product experience — not just another CRUD app, but a matching-oriented platform built around discovery.",
          edge:
            "Built around structured discovery and matching rather than generic profile browsing — profiles, discovery, and matching work together as one coherent product experience.",
          tech: ["React", "TypeScript", "Vite", "Prisma", "PostgreSQL", "Tailwind CSS"],
          year: "2024",
          accent: "clay",
        },
      ],
    },
    capabilities: {
      index: "04",
      label: "Capabilities",
      heading: "What I can do for you.",
      description:
        "From the first data model to the last pixel — I work across the full stack so nothing gets lost in translation.",
      items: [
        {
          title: "Product Engineering",
          description:
            "End-to-end web application development — from data model and API design to a polished, production-ready interface.",
        },
        {
          title: "Frontend & Interaction",
          description:
            "Interfaces that feel considered: deliberate motion, responsive layouts, and details that hold up under real use, not just first glance.",
        },
        {
          title: "Backend & Systems",
          description:
            "Reliable APIs, sensible data modeling, and server-side logic built to stay maintainable as a product grows.",
        },
        {
          title: "Product Thinking",
          description:
            "Every feature starts with a real problem. I scope, prioritize, and cut ruthlessly toward what actually matters to the person using it.",
        },
      ],
    },
    skills: {
      index: "05",
      label: "Skills & Technologies",
      heading: "The stack behind the work.",
      description: "Tools I reach for often — chosen because they're reliable, not because they're trendy.",
      groups: [
        { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL"] },
        { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
        { title: "Backend", skills: ["Node.js", "Express", "REST APIs", "WebSockets"] },
        { title: "Data & Infra", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker"] },
        { title: "Tools", skills: ["Git", "Figma", "Vercel", "Linux"] },
      ],
    },
    process: {
      index: "06",
      label: "How I Work",
      heading: "A process built for clarity.",
      description:
        "No black boxes. Here's what actually happens between an idea landing in my inbox and a product shipping.",
      steps: [
        {
          title: "Discover",
          description:
            "I start by understanding the real problem — the constraints, the users, and what success actually looks like before writing a line of code.",
        },
        {
          title: "Design",
          description:
            "I sketch the structure first: data model, user flows, and interface direction. Design decisions are made deliberately, not accidentally.",
        },
        {
          title: "Build",
          description:
            "I build in vertical slices — a working feature end-to-end before moving to the next — so the product is always in a demoable state.",
        },
        {
          title: "Refine",
          description:
            "Motion, edge cases, performance, and polish. This is where a functional product becomes one that feels genuinely well-made.",
        },
        {
          title: "Ship",
          description:
            "Deployed, tested, and documented — ready for real use, with room built in for whatever comes after launch.",
        },
      ],
    },
    contact: {
      badge: "Open to new opportunities",
      heading1: "Have an idea worth",
      heading2: "building well?",
      body: "I'm currently open to freelance work, internships, and collaborations. If you've got a project in mind, I'd love to hear about it.",
      socials: [
        ...socialsBase,
        { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/201128779577" },
        { key: "email", label: "Email", href: `mailto:${email}` },
      ],
    },
    footer: {
      tagline: "Computer Science student and digital product builder, turning ideas into polished web experiences.",
      designedBy: "Designed & built by Yehia Ahmed",
      rights: "All rights reserved.",
    },
  },
  ar: {
    dir: "rtl",
    langLabel: "English",
    email,
    nav: {
      work: "الأعمال",
      about: "نبذة عني",
      capabilities: "الإمكانيات",
      process: "طريقة العمل",
      contact: "تواصل",
      talk: "لنتحدث",
    },
    hero: {
      badge: "متاح لفرص جديدة",
      name: "يحيى أحمد",
      line2: "أبني تجارب رقمية",
      line3: "ليها ",
      accentWord: "قيمة حقيقية.",
      tagline:
        "طالب علوم حاسب وباني منتجات رقمية. بحوّل الأفكار لمنتجات ويب حديثة، شكلها حلو، شغالة كويس، وبتقدّم قيمة حقيقية.",
      ctaWork: "أعمالي المختارة",
      ctaTalk: "لنتحدث",
      scroll: "مرّر لأسفل",
      keywords: [
        "تطوير متكامل",
        "هندسة المنتجات",
        "React & Next.js",
        "تصميم الأنظمة",
        "تصميم التفاعل",
        "كود نظيف",
      ],
      badgeFullStack: "مطور متكامل",
      badgeCsStudent: "طالب علوم حاسب",
    },
    about: {
      index: "02",
      label: "نبذة عني",
      heading1: "بهتم بالتفاصيل اللي أغلب الناس بيتخطوها — ",
      heading2: "اللي بتخلي أي حاجة تحس إنها متقنة فعلاً.",
      body: [
        "أنا يحيى أحمد، طالب علوم حاسب وباني منتجات رقمية، شغوف ببناء مواقع وتطبيقات ويب وتجارب رقمية حديثة.",
        "بدمج بين التكنولوجيا والتصميم والتفكير المنتجي عشان أحوّل الأفكار لمنتجات رقمية متقنة — مش بس شغالة، لكن جذابة ومبهرة بصريًا كمان.",
        "بحب أشتغل على مشاكل حقيقية، وأبني منتجات من الصفر، وباستمرار بستكشف تقنيات جديدة عشان أقدّم تجارب رقمية أحسن.",
      ],
      factsLabel: "معلومات سريعة",
      facts: [
        { label: "التركيز", value: "تطوير الويب المتكامل" },
        { label: "حاليًا", value: "طالب علوم حاسب" },
        { label: "طريقة العمل", value: "عن بُعد" },
        { label: "التوفر", value: "متاح لفرص جديدة" },
      ],
    },
    work: {
      index: "03",
      label: "أعمال مختارة",
      heading: "منتجات، مش مجرد مشاريع.",
      description: "نظرة أقرب على اللي بنيته من الألف للياء — المشكلة اللي وراء كل مشروع، القرارات اللي اتخذتها، وليه ده مهم.",
      problemLabel: "المشكلة",
      builtLabel: "إيه اللي بنيته",
      roleLabel: "دوري",
      edgeLabel: "إيه اللي يميزه",
      ctaDiscuss: "نتكلم عن مشروع زي ده",
      ctaLive: "شوف الموقع لايف",
      projects: [
        {
          index: "01",
          status: "مشروع فردي",
          name: "Pharmacy E-commerce & ERP",
          tagline: "منصة متكاملة العميل بيشتري من خلالها والصيدلية بتدير كل عملياتها — في نظام واحد.",
          problem:
            "الصيدليات محتاجة تجمع بين تجربة شراء سهلة للعملاء وإدارة دقيقة للمخزون والأسعار والطلبات. وجود نظام منفصل للتجارة الإلكترونية وواحد للإدارة الداخلية بيعقّد الأمور وبيصعّب متابعة البيانات.",
          build:
            "منصة صيدلية متكاملة بتجمع بين واجهة تسوق للعملاء ونظام ERP على مستوى الفروع — كتالوج منتجات، بحث ومتغيرات، سلة وطلبات، إدارة مخزون وتتبع كميات مع الدفعات وتواريخ الصلاحية، تسعير، مصادقة، وأدوات إدارية، مع تخزين مؤقت أوفلاين عبر IndexedDB.",
          role: "مطور متكامل، مشروع فردي — بنيت الواجهة الأمامية والخلفية وقاعدة البيانات والنشر والربط بينهم.",
          value:
            "بيوضح القدرة على تصميم نظام تشغيلي حقيقي — بيتعامل مع متغيرات المنتجات وأرقام الدفعات وتواريخ الصلاحية — مش مجرد متجر إلكتروني بسيط.",
          edge:
            "بيجمع بين تجربة العميل وعمليات الصيدلية وإدارة المخزون في نظام واحد — مع تتبع حقيقي للدفعات وتواريخ الصلاحية بيخليه أقرب لبرنامج جاهز للاستخدام الفعلي مش مجرد مشروع أكاديمي.",
          tech: ["React 19", "TypeScript", "Spring Boot 3", "Java 21", "MySQL", "Spring Security / JWT", "TanStack Query", "IndexedDB"],
          year: "2025",
          accent: "sage",
          liveUrl: "https://dahmed-production.up.railway.app/",
        },
        {
          index: "02",
          status: "مشروع فردي",
          name: "AnimaSys",
          tagline: "نظام ERP مدعوم بالذكاء الاصطناعي لمحلات الحيوانات الأليفة — متجهز كتطبيق سطح مكتب مستقل بقاعدة بياناته الخاصة.",
          problem:
            "محلات الحيوانات الأليفة محتاجة تدير المبيعات اليومية والمخزون والتدفق النقدي وخدمات العناية والموظفين والصلاحيات في مكان واحد — والأنظمة التقليدية بتصعّب على أصحاب المحلات إنهم يعرفوا بسرعة إيه اللي بيتباع، وإيه اللي محتاج اهتمام، وفين الأداء ضعيف.",
          build:
            "نظام ERP داخلي لمحلات الحيوانات الأليفة بيغطي الإيرادات اليومية ومعاملات الكاشير، إدارة المخزون بالمسح بالباركود/QR، خدمات العناية، والصلاحيات حسب الدور — مع طبقة رؤى ذكاء اصطناعي ومساعد محادثة ذكي، ومتجهز كتطبيق ويندوز مستقل.",
          role: "مطور متكامل، مشروع فردي — صممت معمارية النظام والواجهة الأمامية وسير العمل التجاري وميزات الذكاء الاصطناعي وتجهيز نسخة سطح المكتب وعملية النشر والتثبيت.",
          value:
            "بيثبت القدرة على دمج أنظمة الأعمال التقليدية مع طبقة ذكاء اصطناعي، وتسليمه كبرنامج سطح مكتب جاهز للاستخدام الفعلي، مش مجرد لوحة تحكم ويب.",
          edge:
            "متجهز كتطبيق ويندوز مستقل بخلفية وقاعدة بيانات مدمجة بالكامل (JRE محمول + MySQL)، مع مساعد محادثة ذكاء اصطناعي بيشرح بيانات العمل بدل ما يعرضها بس.",
          tech: ["React", "TypeScript", "Electron", "Spring Boot", "Java", "MySQL", "Zustand", "Inno Setup"],
          year: "2026",
          accent: "gold",
        },
        {
          index: "03",
          status: "مشروع فردي",
          name: "AI Fitness & Nutrition Coaching Platform",
          tagline: "منصة تدريب ذكية بتجمع التمارين والتغذية ومتابعة التقدم في تجربة واحدة شخصية.",
          problem:
            "الناس غالبًا بتواجه صعوبة في الالتزام بخطة لياقة وتغذية ثابتة لأن التمارين والإرشادات الغذائية ومتابعة التقدم بتكون متفرقة على تطبيقات مختلفة أو بتتعمل يدويًا.",
          build:
            "منصة لياقة وتغذية مدعومة بالذكاء الاصطناعي بتجمع بين تخطيط لياقة شخصي، إدارة تمارين، إرشاد غذائي، متابعة تقدم، ولوحة تحكم — بُنيت كـ MVP بمعمارية قابلة للتوسع جاهزة للربط بـbackend كامل وخدمات ذكاء اصطناعي.",
          role: "مطور متكامل ومنتج، مشروع فردي — اشتغلت على فكرة المنتج، تجربة المستخدم، معمارية الواجهة الأمامية، سير عمل التطبيق، وهيكلة المنصة ككل.",
          value:
            "بيوضح القدرة على تصميم تجربة منتج مدعومة بالذكاء الاصطناعي من الصفر بشكل متماسك، مش بس تنفيذ شاشات منفصلة — معمارية مبنية عشان تتوسع لbackend وخدمات ذكاء اصطناعي حقيقية.",
          edge:
            "بيجمع اللياقة والتغذية والتدريب بالذكاء الاصطناعي في تجربة واحدة متكاملة بدل ما يكون تطبيق تتبع تمارين تقليدي — مصمم كطبقة تدريب رقمية بتركز على التخصيص الشخصي مش بس عرض البيانات.",
          tech: ["React", "TypeScript", "Vite", "Modern Frontend Architecture", "localStorage (MVP)", "AI-Oriented Architecture"],
          year: "2026",
          accent: "sky",
        },
        {
          index: "04",
          status: "مشروع فردي",
          name: "PetMate",
          tagline: "منصة تعارف بتحوّل تزاوج الحيوانات الأليفة لتجربة منظمة وسهلة الاكتشاف.",
          problem:
            "أصحاب الحيوانات الأليفة بيواجهوا صعوبة في إيجاد حيوانات مناسبة للتزاوج بطريقة منظمة، وغالبًا بيعتمدوا على تواصل عشوائي بدل الاكتشاف المنظم.",
          build:
            "منصة ويب بتربط أصحاب الحيوانات الأليفة وتساعدهم يكتشفوا حيوانات مناسبة للتزاوج — بروفايلات منظمة، آلية اكتشاف ومطابقة، وواجهة عصرية متجاوبة مبنية حول إيجاد المطابقة الصح مش التصفح العشوائي.",
          role: "مطور متكامل، مشروع فردي — صممت وبنيت الواجهة الأمامية والخلفية وقاعدة البيانات من الصفر.",
          value:
            "بيوضح القدرة على تحويل مشكلة واقعية لتجربة منتج متخصصة — مش مجرد تطبيق CRUD تاني، لكن منصة مبنية حول فكرة الاكتشاف.",
          edge:
            "مبني حول الاكتشاف والمطابقة المنظمة بدل التصفح العشوائي للبروفايلات — البروفايلات والاكتشاف والمطابقة بتشتغل مع بعض كتجربة منتج واحدة متكاملة.",
          tech: ["React", "TypeScript", "Vite", "Prisma", "PostgreSQL", "Tailwind CSS"],
          year: "2024",
          accent: "clay",
        },
      ],
    },
    capabilities: {
      index: "04",
      label: "الإمكانيات",
      heading: "إيه اللي أقدر أقدمهولك.",
      description: "من أول نموذج بيانات لآخر بيكسل — بشتغل على المنتج بالكامل عشان مفيش حاجة تضيع في المنتصف.",
      items: [
        {
          title: "هندسة المنتجات",
          description: "تطوير تطبيقات ويب من الألف للياء — من تصميم نموذج البيانات والـAPI لواجهة نهائية جاهزة للإنتاج.",
        },
        {
          title: "الواجهة والتفاعل",
          description: "واجهات محسوبة بعناية: حركة متعمدة، تصميم متجاوب، وتفاصيل بتفضل شغالة كويس مع الاستخدام الحقيقي، مش بس أول نظرة.",
        },
        {
          title: "الخلفية والأنظمة",
          description: "APIs موثوقة، نمذجة بيانات منطقية، ومنطق سيرفر مبني عشان يفضل قابل للصيانة مع نمو المنتج.",
        },
        {
          title: "التفكير المنتجي",
          description: "كل ميزة بتبدأ من مشكلة حقيقية. بحدد الأولويات وبقطع بلا رحمة عشان أوصل للي فعلاً مهم للمستخدم.",
        },
      ],
    },
    skills: {
      index: "05",
      label: "المهارات والتقنيات",
      heading: "الأدوات اللي بتقف وراء الشغل.",
      description: "أدوات بستخدمها كتير — مختارة لأنها موثوقة، مش لأنها ترند.",
      groups: [
        { title: "اللغات", skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL"] },
        { title: "الواجهة الأمامية", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
        { title: "الخلفية", skills: ["Node.js", "Express", "REST APIs", "WebSockets"] },
        { title: "البيانات والبنية التحتية", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker"] },
        { title: "الأدوات", skills: ["Git", "Figma", "Vercel", "Linux"] },
      ],
    },
    process: {
      index: "06",
      label: "طريقة عملي",
      heading: "طريقة عمل واضحة.",
      description: "من غير صناديق سوداء. ده اللي بيحصل فعليًا من لحظة ما الفكرة توصلي لحد ما المنتج يشتغل فعليًا.",
      steps: [
        {
          title: "الاكتشاف",
          description: "بابدأ بفهم المشكلة الحقيقية — القيود، المستخدمين، وشكل النجاح الفعلي قبل ما أكتب أي سطر كود.",
        },
        {
          title: "التصميم",
          description: "برسم البنية الأول: نموذج البيانات، مسارات المستخدم، واتجاه الواجهة. قرارات التصميم بتتاخد بوعي، مش بالصدفة.",
        },
        {
          title: "البناء",
          description: "بابني على شرائح رأسية — ميزة كاملة شغالة قبل ما أنتقل للي بعدها — عشان المنتج يفضل دايمًا في حالة قابلة للعرض.",
        },
        {
          title: "الصقل",
          description: "الحركة، الحالات الاستثنائية، الأداء، والتلميع. هنا المنتج الشغال بيتحول لمنتج حاسس إنه متقن فعلاً.",
        },
        {
          title: "الإطلاق",
          description: "منشور، متجرب، وموثّق — جاهز للاستخدام الفعلي، ومجهز لأي حاجة جاية بعد الإطلاق.",
        },
      ],
    },
    contact: {
      badge: "متاح لفرص جديدة",
      heading1: "عندك فكرة تستاهل",
      heading2: "تتبني كويس؟",
      body: "متاح حاليًا للشغل الفريلانس، التدريب، والتعاون. لو عندك مشروع في بالك، هبقى مبسوط أسمع عنه.",
      socials: [
        ...socialsBase,
        { key: "whatsapp", label: "واتساب", href: "https://wa.me/201128779577" },
        { key: "email", label: "البريد الإلكتروني", href: `mailto:${email}` },
      ],
    },
    footer: {
      tagline: "طالب علوم حاسب وباني منتجات رقمية، بحوّل الأفكار لتجارب ويب متقنة.",
      designedBy: "تصميم وتطوير يحيى أحمد",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
