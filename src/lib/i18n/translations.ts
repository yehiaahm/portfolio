export type Locale = "en" | "ar";

export interface Project {
  index: string;
  name: string;
  tagline: string;
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
    moreLabel: string;
    liveLabel: string;
    playLabel: string;
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
      line2: "I build software small",
      line3: "businesses actually ",
      accentWord: "run on.",
      tagline:
        "Full-stack developer building operational systems for small businesses — pharmacy e-commerce and inventory, retail storefronts, service-shop management — not portfolio demos.",
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
    },
    about: {
      index: "03",
      label: "About",
      heading1: "I care about the details most people scroll past — ",
      heading2: "the ones that make something feel finished.",
      body: [
        "I'm Yehia Ahmed, a full-stack developer who builds real operational software for small businesses — the kind that handles inventory, orders, and day-to-day operations, not just a landing page.",
        "I work across the stack — React and Next.js on the frontend, Java, Spring Boot, and Node.js on the backend, MySQL and PostgreSQL underneath — picking whatever the problem actually calls for.",
        "I care about shipping software that holds up in production, not just in a demo — from a pharmacy's inventory system to a storefront customers use every day.",
      ],
      factsLabel: "Quick Facts",
      facts: [
        { label: "Focus", value: "Full-Stack Web Development" },
        { label: "Working style", value: "Remote-friendly" },
        { label: "Available", value: "Open to opportunities" },
      ],
    },
    work: {
      index: "02",
      label: "Selected Work",
      heading: "Products, not just projects.",
      description: "Solo builds — designed, built, and shipped end-to-end.",
      moreLabel: "More Work",
      liveLabel: "Live",
      playLabel: "Play demo",
      ctaLive: "Visit Live Site",
      projects: [
        {
          index: "01",
          name: "Pharmacy E-commerce & ERP",
          tagline: "Online storefront and branch-level ERP in one system — with batch and expiry tracking.",
          tech: ["React 19", "TypeScript", "Spring Boot 3", "Java 21", "MySQL"],
          year: "2025",
          accent: "sage",
          liveUrl: "https://dahmed-production.up.railway.app/",
        },
        {
          index: "02",
          name: "MERRIER",
          tagline: "A live storefront for an independent streetwear label.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Railway"],
          year: "2026",
          accent: "clay",
          liveUrl: "https://merriereg-production.up.railway.app/",
        },
        {
          index: "03",
          name: "AnimaSys",
          tagline: "AI-powered ERP for pet shops, shipped as a standalone Windows app.",
          tech: ["React", "TypeScript", "Electron", "Spring Boot", "MySQL"],
          year: "2026",
          accent: "gold",
        },
        {
          index: "04",
          name: "VOID",
          tagline: "A bilingual storefront for an Egyptian streetwear label, built around limited drops.",
          tech: ["React", "React Router", "TanStack Query", "Railway"],
          year: "2026",
          accent: "sky",
          liveUrl: "https://voideg-production.up.railway.app/en",
        },
        {
          index: "05",
          name: "PetMate",
          tagline: "Structured breeding-match discovery for pet owners.",
          tech: ["React", "TypeScript", "Prisma", "PostgreSQL"],
          year: "2024",
          accent: "clay",
        },
        {
          index: "06",
          name: "AI Fitness & Nutrition Coaching Platform",
          tagline: "Workouts, nutrition, and progress tracking in one AI coaching MVP.",
          tech: ["React", "TypeScript", "Vite"],
          year: "2026",
          accent: "sky",
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
        { title: "Languages", skills: ["TypeScript", "Java", "SQL"] },
        { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Vite"] },
        { title: "Backend", skills: ["Spring Boot", "Spring Security / JWT", "REST APIs", "Prisma"] },
        { title: "Data & Infra", skills: ["MySQL", "PostgreSQL", "IndexedDB", "Railway"] },
        { title: "Desktop & Tools", skills: ["Electron", "Zustand", "TanStack Query", "Git"] },
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
      tagline: "Full-stack developer building operational software for small businesses.",
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
      line2: "أبني الأنظمة اللي",
      line3: "شركات صغيرة فعلاً ",
      accentWord: "بتشتغل بيها.",
      tagline:
        "مطور full-stack بابني أنظمة تشغيلية لشركات صغيرة — منصات صيدليات إلكترونية ومخزون، متاجر تجزئة، وأنظمة إدارة محلات — مش مجرد عروض بورتفوليو.",
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
    },
    about: {
      index: "03",
      label: "نبذة عني",
      heading1: "بهتم بالتفاصيل اللي أغلب الناس بيتخطوها — ",
      heading2: "اللي بتخلي أي حاجة تحس إنها متقنة فعلاً.",
      body: [
        "أنا يحيى أحمد، مطور full-stack بابني أنظمة تشغيلية حقيقية لشركات صغيرة — من النوع اللي بيدير المخزون والطلبات والعمليات اليومية، مش مجرد صفحة هبوط.",
        "بشتغل على الستاك بالكامل — React وNext.js في الواجهة، Java وSpring Boot وNode.js في الخلفية، MySQL وPostgreSQL تحتها — واختار اللي المشكلة فعلاً محتاجاه.",
        "بهتم إني أسلّم برنامج شغال فعليًا في الإنتاج مش بس في العرض التجريبي — من نظام مخزون صيدلية لمتجر بيستخدمه عملاء كل يوم.",
      ],
      factsLabel: "معلومات سريعة",
      facts: [
        { label: "التركيز", value: "تطوير الويب المتكامل" },
        { label: "طريقة العمل", value: "عن بُعد" },
        { label: "التوفر", value: "متاح لفرص جديدة" },
      ],
    },
    work: {
      index: "02",
      label: "أعمال مختارة",
      heading: "منتجات، مش مجرد مشاريع.",
      description: "مشاريع فردية — صممتها وبنيتها ونشرتها من الألف للياء.",
      moreLabel: "أعمال إضافية",
      liveLabel: "لايف",
      playLabel: "شغّل الديمو",
      ctaLive: "شوف الموقع لايف",
      projects: [
        {
          index: "01",
          name: "Pharmacy E-commerce & ERP",
          tagline: "متجر إلكتروني ونظام ERP للفروع في نظام واحد — مع تتبع الدفعات وتواريخ الصلاحية.",
          tech: ["React 19", "TypeScript", "Spring Boot 3", "Java 21", "MySQL"],
          year: "2025",
          accent: "sage",
          liveUrl: "https://dahmed-production.up.railway.app/",
        },
        {
          index: "02",
          name: "MERRIER",
          tagline: "متجر إلكتروني شغال لبراند ستريت وير مستقل.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Railway"],
          year: "2026",
          accent: "clay",
          liveUrl: "https://merriereg-production.up.railway.app/",
        },
        {
          index: "03",
          name: "AnimaSys",
          tagline: "نظام ERP لمحلات الحيوانات الأليفة مدعوم بالذكاء الاصطناعي — كتطبيق ويندوز مستقل.",
          tech: ["React", "TypeScript", "Electron", "Spring Boot", "MySQL"],
          year: "2026",
          accent: "gold",
        },
        {
          index: "04",
          name: "VOID",
          tagline: "متجر ستريت وير مصري بلغتين، مبني حوالين الـ drops المحدودة.",
          tech: ["React", "React Router", "TanStack Query", "Railway"],
          year: "2026",
          accent: "sky",
          liveUrl: "https://voideg-production.up.railway.app/en",
        },
        {
          index: "05",
          name: "PetMate",
          tagline: "منصة بتساعد أصحاب الحيوانات الأليفة يلاقوا شريك التزاوج المناسب بشكل منظم.",
          tech: ["React", "TypeScript", "Prisma", "PostgreSQL"],
          year: "2024",
          accent: "clay",
        },
        {
          index: "06",
          name: "AI Fitness & Nutrition Coaching Platform",
          tagline: "التمارين والتغذية ومتابعة التقدم في MVP واحد للتدريب الذكي.",
          tech: ["React", "TypeScript", "Vite"],
          year: "2026",
          accent: "sky",
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
        { title: "اللغات", skills: ["TypeScript", "Java", "SQL"] },
        { title: "الواجهة الأمامية", skills: ["React", "Next.js", "Tailwind CSS", "Vite"] },
        { title: "الخلفية", skills: ["Spring Boot", "Spring Security / JWT", "REST APIs", "Prisma"] },
        { title: "البيانات والبنية التحتية", skills: ["MySQL", "PostgreSQL", "IndexedDB", "Railway"] },
        { title: "سطح المكتب والأدوات", skills: ["Electron", "Zustand", "TanStack Query", "Git"] },
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
      tagline: "مطور full-stack بابني أنظمة تشغيلية لشركات صغيرة.",
      designedBy: "تصميم وتطوير يحيى أحمد",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
