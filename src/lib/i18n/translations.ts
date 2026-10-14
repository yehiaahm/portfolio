import type { BusinessId, DeadlineId, FeatureId, KindId, Range } from "@/lib/finder/config";

export type Locale = "en" | "ar";

interface OptionCopy {
  title: string;
  desc: string;
}

interface StepCopy {
  heading: string;
  accent: string;
  sub: string;
}

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
  name: string;
  email: string;
  nav: {
    work: string;
    about: string;
    capabilities: string;
    process: string;
    contact: string;
    quote: string;
  };
  finder: {
    eyebrow: string;
    stepLabel: string;
    back: string;
    skip: string;
    next: string;
    business: StepCopy & { options: Record<BusinessId, OptionCopy> };
    match: StepCopy & { cta: string };
    kind: StepCopy & { recommended: string; notSure: OptionCopy; options: Record<KindId, OptionCopy> };
    features: StepCopy & { options: Record<FeatureId, OptionCopy> };
    budget: StepCopy & { currency: string; placeholder: string; unsure: string };
    deadline: StepCopy & { options: Record<DeadlineId, OptionCopy> };
    result: StepCopy & {
      cost: string;
      timeline: string;
      weeks: (n: number | Range) => string;
      included: string;
      includes: Record<KindId, string[]>;
      disclaimer: string;
      budgetFit: Record<"unsure" | "fits" | "close" | "phased" | "below", string>;
      phaseNow: string;
      phaseLater: string;
      deadlineFit: Record<"flexible" | "fits" | "tight" | "phased", string>;
      answers: string;
      edit: string;
      labels: { business: string; kind: string; features: string; budget: string; deadline: string };
      none: string;
      whatsapp: string;
      whatsappHint: string;
      email: string;
      startOver: string;
      greeting: string;
      estimateLine: string;
      emailSubject: string;
    };
  };
  about: {
    index: string;
    label: string;
    heading1: string;
    heading2: string;
    body: string[];
    factsLabel: string;
    facts: { label: string; value: string }[];
    badgeFullStack: string;
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

const toRange = (n: number | Range): Range => (typeof n === "number" ? [n, n] : n);
const rangeText = ([lo, hi]: Range) => (lo === hi ? `${lo}` : `${lo}–${hi}`);

const weeksEn = (n: number | Range) => {
  const r = toRange(n);
  return `${rangeText(r)} ${r[1] === 1 ? "week" : "weeks"}`;
};

const weeksAr = (n: number | Range) => {
  const r = toRange(n);
  if (r[0] === r[1] && r[1] === 1) return "أسبوع";
  if (r[0] === r[1] && r[1] === 2) return "أسبوعين";
  return `${rangeText(r)} ${r[1] <= 10 ? "أسابيع" : "أسبوع"}`;
};

const socialsBase = [
  { key: "github", label: "GitHub", href: "https://github.com/yehiaahm" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/yahya-ahmed-035054325" },
];

export const translations: Record<Locale, Dictionary> = {
  en: {
    dir: "ltr",
    langLabel: "العربية",
    name: "Yehia Ahmed",
    email,
    nav: {
      work: "Work",
      about: "About",
      capabilities: "Capabilities",
      process: "Process",
      contact: "Contact",
      quote: "Get a Quote",
    },
    finder: {
      eyebrow: "Yehia Ahmed — taking new projects",
      stepLabel: "Step {n} of {total}",
      back: "Back",
      skip: "Just show me all the work",
      next: "Continue",
      business: {
        heading: "What kind of business",
        accent: "do you run?",
        sub: "Pick one — I'll show you work I've built that's close to it, then a price estimate. Takes under a minute.",
        options: {
          pharmacy: { title: "Pharmacy or clinic", desc: "Orders, stock, expiry dates" },
          fashion: { title: "Clothing brand", desc: "An online store for your products" },
          retail: { title: "Shop or restaurant", desc: "Stock, cashier and invoices" },
          fitness: { title: "Gym or coach", desc: "Members, plans and subscriptions" },
          startup: { title: "New idea or platform", desc: "An app or marketplace to launch" },
          other: { title: "Something else", desc: "Show me your best work" },
        },
      },
      match: {
        heading: "Something close to",
        accent: "what you need.",
        sub: "Real projects I designed and built myself — open them and try them live.",
        cta: "Get my estimate",
      },
      kind: {
        heading: "Website, system,",
        accent: "or both?",
        sub: "Not sure? Go with the recommended one — we can adjust it later.",
        recommended: "Recommended",
        notSure: { title: "Not sure", desc: "Pick what fits my business" },
        options: {
          website: { title: "Website", desc: "Customers find you and buy from you online" },
          system: { title: "System", desc: "Run the business from the inside — stock, cashier, accounts" },
          both: { title: "Both", desc: "An online store connected to your internal system" },
        },
      },
      features: {
        heading: "What should it",
        accent: "do?",
        sub: "Pick everything you need. The usual ones for your business are already ticked.",
        options: {
          store: { title: "Online store", desc: "Products, cart and orders" },
          payments: { title: "Online payments", desc: "Cards and mobile wallets" },
          accounts: { title: "Customer accounts", desc: "Sign-in, order history and tracking" },
          booking: { title: "Bookings", desc: "Appointments and reservations" },
          dashboard: { title: "Admin dashboard", desc: "Manage products, orders and content yourself" },
          inventory: { title: "Inventory & stock", desc: "Batches, expiry dates, low-stock alerts" },
          pos: { title: "Cashier (POS)", desc: "Fast checkout and invoices" },
          branches: { title: "Multiple branches", desc: "Stock and sales per branch" },
          reports: { title: "Reports", desc: "Sales, profit and best sellers" },
          desktop: { title: "Desktop app", desc: "Runs on Windows, even offline" },
          bilingual: { title: "Arabic + English", desc: "Both languages, one switch" },
          ai: { title: "AI features", desc: "Smart suggestions and automation" },
        },
      },
      budget: {
        heading: "What budget do you",
        accent: "have in mind?",
        sub: "Type the amount you have in mind — a rough number is fine. It helps me suggest the right plan.",
        currency: "EGP",
        placeholder: "Type an amount",
        unsure: "Not sure yet",
      },
      deadline: {
        heading: "When do you",
        accent: "need it?",
        sub: "If it's tight, I'll tell you what can be ready first.",
        options: {
          asap: { title: "As soon as possible", desc: "Within 2 weeks" },
          month: { title: "Within a month", desc: "Around 4 weeks" },
          quarter: { title: "In 1–3 months", desc: "Time to get it right" },
          flexible: { title: "No rush", desc: "Whenever it's done well" },
        },
      },
      result: {
        heading: "Here's your",
        accent: "estimate.",
        sub: "",
        cost: "Estimated cost",
        timeline: "Timeline",
        weeks: weeksEn,
        included: "Always included",
        includes: {
          website: ["Mobile-friendly design", "WhatsApp & contact buttons", "Basic SEO", "Launch & domain setup"],
          system: ["Users & permissions", "Main dashboard", "Data backups", "Setup & training"],
          both: ["Mobile-friendly design", "Store and system share one database", "Users & permissions", "Launch & setup"],
        },
        disclaimer: "An initial estimate based on your answers. The final price is set after a short, free call.",
        budgetFit: {
          unsure: "No budget yet? No problem — we'll shape the plan together.",
          fits: "Your budget covers this.",
          close: "Your budget is within range — we'll fine-tune the scope to stay inside it.",
          phased: "We can start within your budget, then add the rest in a second phase.",
          below: "That's below the starting cost for this — but message me anyway, we can find a simpler place to start.",
        },
        phaseNow: "Phase 1",
        phaseLater: "Phase 2",
        deadlineFit: {
          flexible: "No rush — we'll plan it properly.",
          fits: "Fits your timeline.",
          tight: "Doable — if we start soon.",
          phased: "A first working version in {weeks}, then the rest right after.",
        },
        answers: "Your answers",
        edit: "Edit",
        labels: {
          business: "Business",
          kind: "Type",
          features: "Features",
          budget: "Budget",
          deadline: "Needed",
        },
        none: "None",
        whatsapp: "Send it on WhatsApp",
        whatsappHint: "Your answers are already written in — just hit send.",
        email: "Or email me",
        startOver: "Start over",
        greeting: "Hi Yehia, I came from your portfolio.",
        estimateLine: "Estimate I got",
        emailSubject: "New project",
      },
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
        { label: "Available", value: "Taking new projects" },
      ],
      badgeFullStack: "Full-Stack",
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
      badge: "Taking new projects",
      heading1: "Have an idea worth",
      heading2: "building well?",
      body: "Tell me what your business needs — I'll reply with a clear plan, timeline and price.",
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
    name: "يحيى أحمد",
    email,
    nav: {
      work: "الأعمال",
      about: "نبذة عني",
      capabilities: "الإمكانيات",
      process: "طريقة العمل",
      contact: "تواصل",
      quote: "اعرف التكلفة",
    },
    finder: {
      eyebrow: "يحيى أحمد — متاح لمشاريع جديدة",
      stepLabel: "خطوة {n} من {total}",
      back: "رجوع",
      skip: "وريني كل الشغل على طول",
      next: "كمّل",
      business: {
        heading: "إيه نوع",
        accent: "نشاطك؟",
        sub: "اختار واحد — هوريك شغل عملته قريب منه، وبعدها تقدير للسعر. مش هتاخد دقيقة.",
        options: {
          pharmacy: { title: "صيدلية أو عيادة", desc: "طلبات، مخزن، تواريخ صلاحية" },
          fashion: { title: "براند هدوم", desc: "متجر أونلاين لمنتجاتك" },
          retail: { title: "محل أو مطعم", desc: "مخزن، كاشير، وفواتير" },
          fitness: { title: "جيم أو كوتش", desc: "مشتركين، برامج، واشتراكات" },
          startup: { title: "فكرة أو منصة جديدة", desc: "تطبيق أو منصة عايز تطلقها" },
          other: { title: "حاجة تانية", desc: "وريني أحسن شغلك" },
        },
      },
      match: {
        heading: "ده قريب من",
        accent: "اللي محتاجه.",
        sub: "مشاريع حقيقية صممتها وبنيتها بنفسي — افتحها وجرّبها لايف.",
        cta: "اعرف التكلفة",
      },
      kind: {
        heading: "محتاج موقع ولا سيستم",
        accent: "ولا الاتنين؟",
        sub: "مش متأكد؟ اختار المقترح — نقدر نعدّل بعدين.",
        recommended: "مقترح ليك",
        notSure: { title: "مش عارف", desc: "اختارلي المناسب لنشاطي" },
        options: {
          website: { title: "موقع", desc: "الناس تعرفك وتشتري منك أونلاين" },
          system: { title: "سيستم", desc: "تدير شغلك من جوه — مخزن، كاشير، حسابات" },
          both: { title: "الاتنين", desc: "متجر أونلاين مربوط بسيستم الإدارة بتاعك" },
        },
      },
      features: {
        heading: "محتاجه",
        accent: "يعمل إيه؟",
        sub: "اختار كل اللي محتاجه. علّمتلك على المعتاد لنشاطك.",
        options: {
          store: { title: "متجر أونلاين", desc: "منتجات، سلة، وطلبات" },
          payments: { title: "دفع أونلاين", desc: "فيزا ومحافظ إلكترونية" },
          accounts: { title: "حسابات للعملاء", desc: "تسجيل دخول، طلبات سابقة، وتتبع" },
          booking: { title: "حجوزات", desc: "مواعيد وحجز أونلاين" },
          dashboard: { title: "لوحة تحكم", desc: "تدير المنتجات والطلبات والمحتوى بنفسك" },
          inventory: { title: "مخزن", desc: "دفعات، تواريخ صلاحية، وتنبيه لما حاجة تخلص" },
          pos: { title: "كاشير", desc: "بيع سريع وفواتير" },
          branches: { title: "أكتر من فرع", desc: "مخزن ومبيعات لكل فرع" },
          reports: { title: "تقارير", desc: "مبيعات، أرباح، والأكتر مبيعًا" },
          desktop: { title: "برنامج ديسكتوب", desc: "يشتغل على الويندوز حتى من غير نت" },
          bilingual: { title: "عربي + إنجليزي", desc: "اللغتين بزرار واحد" },
          ai: { title: "ذكاء اصطناعي", desc: "اقتراحات ذكية وأتمتة" },
        },
      },
      budget: {
        heading: "الميزانية اللي",
        accent: "في بالك؟",
        sub: "اكتب المبلغ اللي في بالك — رقم تقريبي كفاية. بيساعدني أقترح الخطة المناسبة.",
        currency: "ج.م",
        placeholder: "اكتب المبلغ",
        unsure: "لسه مش متأكد",
      },
      deadline: {
        heading: "محتاجه",
        accent: "إمتى؟",
        sub: "لو الوقت ضيق، هقولك إيه اللي ممكن يجهز الأول.",
        options: {
          asap: { title: "في أسرع وقت", desc: "خلال أسبوعين" },
          month: { title: "خلال شهر", desc: "حوالي 4 أسابيع" },
          quarter: { title: "من شهر لـ 3 شهور", desc: "وقت كفاية يطلع مظبوط" },
          flexible: { title: "مش مستعجل", desc: "المهم يطلع كويس" },
        },
      },
      result: {
        heading: "ده التقدير",
        accent: "بتاعك.",
        sub: "",
        cost: "التكلفة المتوقعة",
        timeline: "المدة",
        weeks: weeksAr,
        included: "موجود في كل الأحوال",
        includes: {
          website: ["تصميم مناسب للموبايل", "زراير واتساب وتواصل", "SEO أساسي", "رفع الموقع وربط الدومين"],
          system: ["مستخدمين وصلاحيات", "داشبورد رئيسية", "نسخ احتياطي للبيانات", "تسطيب وشرح الاستخدام"],
          both: ["تصميم مناسب للموبايل", "المتجر والسيستم على نفس الداتا", "مستخدمين وصلاحيات", "رفع وتسطيب"],
        },
        disclaimer: "ده تقدير مبدئي حسب إجاباتك. السعر النهائي بيتحدد بعد مكالمة قصيرة ومجانية.",
        budgetFit: {
          unsure: "لسه محددتش ميزانية؟ مفيش مشكلة — هنحدد الخطة مع بعض.",
          fits: "ميزانيتك مناسبة للمشروع ده.",
          close: "ميزانيتك في حدود التقدير — هنظبط المميزات عشان نفضل جواها.",
          phased: "نقدر نبدأ في حدود ميزانيتك، ونضيف الباقي في مرحلة تانية.",
          below: "ده أقل من أقل تكلفة للنوع ده — بس كلمني برضه، ممكن نلاقي بداية أبسط.",
        },
        phaseNow: "المرحلة الأولى",
        phaseLater: "المرحلة التانية",
        deadlineFit: {
          flexible: "مش مستعجل — هنخطط له صح.",
          fits: "هيخلص في الميعاد اللي محتاجه.",
          tight: "ينفع — لو بدأنا بسرعة.",
          phased: "نسلّمك نسخة أولى شغالة خلال {weeks}، ونكمّل الباقي بعدها.",
        },
        answers: "إجاباتك",
        edit: "تعديل",
        labels: {
          business: "النشاط",
          kind: "النوع",
          features: "المميزات",
          budget: "الميزانية",
          deadline: "الميعاد",
        },
        none: "مفيش",
        whatsapp: "ابعتها على واتساب",
        whatsappHint: "إجاباتك متكتبة جاهزة — دوس إرسال وبس.",
        email: "أو ابعتلي إيميل",
        startOver: "ابدأ من الأول",
        greeting: "أهلاً يا يحيى، جاي من البورتفوليو بتاعك.",
        estimateLine: "التقدير اللي ظهرلي",
        emailSubject: "مشروع جديد",
      },
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
        { label: "التوفر", value: "متاح لمشاريع جديدة" },
      ],
      badgeFullStack: "مطور متكامل",
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
      badge: "متاح لمشاريع جديدة",
      heading1: "عندك فكرة تستاهل",
      heading2: "تتبني كويس؟",
      body: "قولّي نشاطك محتاج إيه — وهرد عليك بخطة واضحة ومدة وسعر.",
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
