export type Locale = "zh" | "en";

export type Service = {
  slug: string;
  name: string;
  chineseName: string;
  tagline: string;
  summary: string;
  idealFor: string[];
  includes: string[];
  process: string[];
  deliverables: string[];
  pricing: string;
  ctaLabel: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FounderProfile = {
  name: string;
  title: string;
  location: string;
  intro: string;
  philosophy: string;
  highlights: string[];
};

export type CampaignEntry = {
  eyebrow: string;
  title: string;
  description: string;
  quota: string;
  exchange: string;
  availability: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export type InquiryFormCopy = {
  idleMessage: string;
  sendingMessage: string;
  submitError: string;
  labels: {
    name: string;
    email: string;
    service: string;
    timezone: string;
    message: string;
    honeypot: string;
  };
  placeholders: {
    name: string;
    email: string;
    timezone: string;
    message: string;
  };
  buttons: {
    sending: string;
    submit: string;
  };
  serviceOptionLabels: Record<string, string>;
};

export type SiteContent = {
  siteMeta: {
    title: string;
    description: string;
  };
  navigation: Array<{ href: string; label: string }>;
  services: Service[];
  faqItems: FaqItem[];
  testimonials: Array<{ name: string; role: string; quote: string }>;
  processSteps: string[];
  trustPoints: string[];
  audiencePoints: string[];
  founderProfile: FounderProfile;
  freeBaziCampaign: CampaignEntry;
  header: {
    brandTitle: string;
    brandSubtitle: string;
    bookButton: string;
    langZh: string;
    langEn: string;
  };
  footer: {
    brandTitle: string;
    description: string;
    disclaimer: string;
  };
  home: {
    perspective: { eyebrow: string; title: string; description: string; body: string };
    service: { eyebrow: string; title: string; description: string; badge: string; explore: string };
    process: { eyebrow: string; title: string; description: string };
    trust: { eyebrow: string; title: string; description: string };
    audience: { eyebrow: string; title: string; description: string };
    testimonials: { eyebrow: string; title: string; description: string; inquire: string };
    campaignLabels: { quota: string; exchange: string; availability: string };
    cta: { title: string; description: string; primaryLabel: string; secondaryLabel: string };
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    approachTitle: string;
    approachBazi: string;
    approachQimen: string;
    approachFengshui: string;
  };
  about: {
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    standForEyebrow: string;
    standForTitle: string;
    standForDescription: string;
    valuesTitle: string;
    values: string[];
    philosophyTitle: string;
    philosophyBody: string;
    body1: string;
    body2: string;
    founderTitle: string;
    founderBadge: string;
    balanceMotif: string;
    cta: { title: string; description: string; primaryLabel: string; secondaryLabel: string };
  };
  servicesPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    cta: { title: string; description: string; primaryLabel: string; secondaryLabel: string };
  };
  serviceDetail: {
    summary: string;
    whoFor: string;
    covered: string;
    pricing: string;
    deliverables: string;
    process: string;
    ctaTitle: string;
    ctaDescription: string;
    secondaryLabel: string;
  };
  faqPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    cta: { title: string; description: string; primaryLabel: string; secondaryLabel: string };
  };
  contactPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    contactDetails: string;
    socialEmpty: string;
    processTitle: string;
    processSteps: string[];
  };
  bookPage: {
    heroEyebrow: string;
    heroTitleReady: string;
    heroTitlePending: string;
    heroDescReady: string;
    heroDescPending: string;
    openCalendar: string;
    requestService: string;
    viewDetails: string;
    statusReady: string;
    statusPending: string;
    headingReady: string;
    headingPending: string;
    bodyReady: string;
    bodyPending: string;
    continueBooking: string;
    iframeTitle: string;
  };
  notFound: {
    title: string;
    description: string;
    home: string;
    services: string;
  };
  inquiryForm: InquiryFormCopy;
};

const EN_CONTENT: SiteContent = {
  siteMeta: {
    title: "Qingluan Academy",
    description:
      "Private online consultations in Bazi, Qimen Dunjia, and Feng Shui for clarity, direction, and space alignment.",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    {
      slug: "bazi",
      name: "Bazi Clarity Reading",
      chineseName: "八字",
      tagline: "A reflective reading for personal patterns, direction, and season of life.",
      summary:
        "Bazi is a Chinese birth chart system used to understand character tendencies, strengths, relationship dynamics, and the broader rhythms shaping your life direction.",
      idealFor: [
        "Professionals seeking clearer direction in career or vocation.",
        "People navigating transition, identity shifts, or relationship patterns.",
        "Thoughtful clients who want a structured lens on timing and temperament.",
      ],
      includes: [
        "A review of your elemental profile and core tendencies.",
        "Context around strengths, tensions, and recurring life themes.",
        "Discussion of career, relationships, timing, and direction as relevant.",
      ],
      process: [
        "Submit your birth details through the intake form.",
        "Receive a private online consultation tailored to your questions.",
        "Leave with a grounded understanding of your chart and next areas to observe.",
      ],
      deliverables: [
        "Private online consultation",
        "Structured summary points",
        "Suggested reflection themes and next steps",
      ],
      pricing: "Session fee available on inquiry. Typical engagement starts from $180.",
      ctaLabel: "Book a Bazi Reading",
    },
    {
      slug: "qimen-dunjia",
      name: "Qimen Decision Session",
      chineseName: "奇门遁甲",
      tagline: "A timing and strategy session for choices, transitions, and directional clarity.",
      summary:
        "Qimen Dunjia is a classical Chinese system often used to reflect on timing, positioning, and the strategic texture of an unfolding situation.",
      idealFor: [
        "Entrepreneurs and creatives facing a significant decision.",
        "Clients preparing for negotiations, moves, launches, or transitions.",
        "Anyone seeking a calm strategic lens rather than reactive decision-making.",
      ],
      includes: [
        "Review of your question and current context.",
        "Discussion of timing, strategic posture, and practical options.",
        "A focused session oriented toward clarity, not certainty claims.",
      ],
      process: [
        "Choose the decision or situation you want to examine.",
        "Complete a short intake to define the context and key constraints.",
        "Meet online for a focused consultation with structured guidance.",
      ],
      deliverables: [
        "Private online session",
        "Decision framing notes",
        "Suggested timing or positioning considerations",
      ],
      pricing: "Session fee available on inquiry. Typical engagement starts from $220.",
      ctaLabel: "Book a Qimen Session",
    },
    {
      slug: "feng-shui",
      name: "Remote Feng Shui Audit",
      chineseName: "风水",
      tagline: "Practical environmental guidance for home and workspace alignment.",
      summary:
        "Feng Shui is an environmental discipline focused on flow, balance, placement, and the felt quality of a space as it supports rest, work, and overall coherence.",
      idealFor: [
        "Homeowners and renters who want a more supportive living environment.",
        "Remote workers refining focus, calm, and energy in their workspace.",
        "Clients preparing a move, redesign, or intentional reset of a room.",
      ],
      includes: [
        "Remote review based on layout, photos, and your goals for the space.",
        "Observations on flow, furniture, emphasis, and environmental harmony.",
        "Practical recommendations suited to real living conditions.",
      ],
      process: [
        "Share your floor plan, photos, and priorities.",
        "Receive an online consultation reviewing the space.",
        "Implement recommendations at your own pace with clear guidance.",
      ],
      deliverables: [
        "Remote consultation",
        "Spatial recommendation summary",
        "Action-oriented layout and environment guidance",
      ],
      pricing: "Session fee available on inquiry. Typical engagement starts from $260.",
      ctaLabel: "Book a Feng Shui Audit",
    },
  ],
  faqItems: [
    {
      question: "Do I need prior knowledge of Chinese metaphysics?",
      answer:
        "No. Sessions are designed for thoughtful beginners as well as returning clients. Terms are explained in plain English and applied to your real situation.",
    },
    {
      question: "What do I need to prepare before a session?",
      answer:
        "Preparation depends on the service. Bazi requires accurate birth details. Qimen sessions benefit from a clear question. Feng Shui audits require layout information and photos.",
    },
    {
      question: "Are sessions conducted online?",
      answer:
        "Yes. The current model is private online consultation, designed for international clients across time zones.",
    },
    {
      question: "Are sessions recorded?",
      answer:
        "Recording availability can be confirmed during booking. When recording is not offered, you will still receive structured takeaways or summary points.",
    },
    {
      question: "Can I ask about career, relationships, or relocation?",
      answer:
        "Yes. These are common themes, alongside timing, transitions, personal direction, and spatial support for home or work.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Rescheduling requests are handled case by case with advance notice. Missed sessions are generally non-refundable unless otherwise agreed in writing before booking.",
    },
    {
      question: "Is this medical, legal, or financial advice?",
      answer:
        "No. Services are intended for personal insight, reflection, and guidance and are not a substitute for licensed professional advice.",
    },
  ],
  testimonials: [
    {
      name: "Private Client",
      role: "Founder, Berlin (Name Withheld)",
      quote:
        "The session gave me a calmer framework for timing and decision-making. It felt reflective, structured, and unexpectedly practical.",
    },
    {
      name: "Private Client",
      role: "Creative Director, Singapore (Name Withheld)",
      quote:
        "What stood out was the tone: grounded, clear, and culturally rooted without becoming theatrical or vague.",
    },
  ],
  processSteps: [
    "Submit the inquiry form with your required details and preferred service.",
    "Receive our reply email with service scope, fee details, and payment instructions.",
    "Complete payment to confirm the booking and consultation schedule.",
    "Receive preparation guidance and complete the agreed consultation service.",
  ],
  trustPoints: [
    "Rooted in traditional systems, translated with modern clarity.",
    "Private, personalized, and respectful of nuance and confidentiality.",
    "Designed for reflective decision-making rather than sensational claims.",
  ],
  audiencePoints: [
    "Professionals and entrepreneurs navigating transition or timing.",
    "Creatives and thoughtful seekers exploring direction and patterns.",
    "Homeowners and remote workers seeking a more aligned environment.",
  ],
  founderProfile: {
    name: "Founder of Qingluan Academy",
    title: "Bazi, Qimen Dunjia, and Feng Shui Practitioner",
    location: "Serving clients globally through private online consultations",
    intro:
      "The founder's work began with long-term study of classical Chinese metaphysical systems and evolved into a modern consultation practice focused on clarity, ethics, and practical application.",
    philosophy:
      "The aim is not dramatic prediction, but responsible interpretation. Each session is designed to translate traditional frameworks into language clients can apply to real decisions, relationships, and environments.",
    highlights: [
      "Integrates Bazi, Qimen Dunjia, and Feng Shui as complementary lenses.",
      "Emphasizes cultural integrity, discretion, and grounded communication.",
      "Works with founders, professionals, creatives, and families across time zones.",
    ],
  },
  freeBaziCampaign: {
    eyebrow: "Limited Campaign",
    title: "Free Slots + Clear Exchange: 3 Bazi Cases Per Week",
    description:
      "We open a limited free experience campaign from time to time. Approved applicants receive a complete Bazi consultation process.",
    quota: "Maximum 3 applicants per week, only during active campaign windows.",
    exchange:
      "In exchange, you agree to provide honest, concrete feedback that may be quoted anonymously to help us improve service quality.",
    availability:
      "This campaign opens irregularly. Once weekly slots are full, applications close immediately.",
    primaryHref: "/contact",
    primaryLabel: "Apply for this week's slot",
    secondaryHref: "/services/bazi",
    secondaryLabel: "Learn about Bazi first",
  },
  header: {
    brandTitle: "Qingluan Academy",
    brandSubtitle: "Chinese Metaphysics Consultations",
    bookButton: "Book",
    langZh: "中文",
    langEn: "EN",
  },
  footer: {
    brandTitle: "青鸾书院 · Qingluan Academy",
    description:
      "Chinese metaphysics for reflection, timing, and environmental alignment. Structured online consultations designed for thoughtful modern life.",
    disclaimer:
      "Services are intended for personal insight, reflection, and guidance. They are not a substitute for medical, legal, psychological, or financial advice. Results and interpretations are not guaranteed.",
  },
  home: {
    perspective: {
      eyebrow: "Our perspective",
      title: "Ancient Chinese wisdom translated into practical guidance.",
      description:
        "Qingluan Academy offers a calm and structured space to reflect on timing, direction, and environment. The work is culturally rooted, private, and designed for modern life rather than spectacle.",
      body:
        "The intention is not prediction theater. It is a thoughtful consultation practice that helps clients make clearer decisions, understand patterns with more nuance, and shape the environments in which they live and work.",
    },
    service: {
      eyebrow: "Services",
      title: "Three pathways into clarity, timing, and spatial harmony.",
      description:
        "Each consultation format is designed around a different kind of question, while sharing the same tone: measured, personal, and grounded.",
      badge: "Service",
      explore: "Explore service",
    },
    process: {
      eyebrow: "How it works",
      title: "A simple process designed to stay personal.",
      description:
        "The structure is intentionally clear, so the session itself can remain spacious and focused.",
    },
    trust: {
      eyebrow: "Why work with us",
      title: "Trust built through tone, depth, and cultural integrity.",
      description:
        "The brand is positioned for thoughtful clients who value quality, privacy, and practical guidance over dramatic claims.",
    },
    audience: {
      eyebrow: "Who this is for",
      title: "For people seeking reflection before reaction.",
      description:
        "The site is designed for internationally minded clients who are open to metaphysical traditions but selective about quality, language, and trust.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Client reflections from private consultations.",
      description:
        "All names are withheld for privacy. These quotes represent the tone and outcomes clients most often report after sessions.",
      inquire: "Inquire privately",
    },
    campaignLabels: {
      quota: "Weekly quota",
      exchange: "Exchange required",
      availability: "Availability",
    },
    cta: {
      title: "Choose a consultation shaped around your question.",
      description:
        "Whether you are looking for perspective on life direction, support around a decision, or a more harmonious environment, the next step is a clear and private booking flow.",
      primaryLabel: "Go to booking",
      secondaryLabel: "Contact first",
    },
  },
  hero: {
    eyebrow: "青鸾书院 · Qingluan Academy",
    title: "Chinese Metaphysics for Life, Career, and Space",
    description:
      "Private online consultations in Bazi, Qimen Dunjia, and Feng Shui for those seeking clarity, alignment, and a more thoughtful way to navigate life.",
    primaryLabel: "Book a consultation",
    secondaryLabel: "Explore services",
    approachTitle: "Approach",
    approachBazi: "A Chinese birth chart system used for self-understanding and life direction.",
    approachQimen: "A classical framework for timing, strategic reflection, and situational insight.",
    approachFengshui: "Environmental guidance for flow, balance, and spatial harmony in modern life.",
  },
  about: {
    heroEyebrow: "About Qingluan Academy",
    heroTitle: "A culturally rooted practice for clarity, reflection, and responsible interpretation.",
    heroDescription:
      "Qingluan Academy presents traditional Chinese metaphysical systems with calm language, practical framing, and respect for the depth of the source traditions.",
    standForEyebrow: "What we stand for",
    standForTitle: "Depth without theatrics.",
    standForDescription:
      "The work is grounded in systems with long cultural histories, but communicated in a way that serves contemporary life. The goal is not to overwhelm with jargon. It is to create a thoughtful space where ancient frameworks become usable and clear.",
    valuesTitle: "Values",
    values: ["Depth", "Clarity", "Respect", "Confidentiality", "Cultural integrity"],
    philosophyTitle: "Philosophy",
    philosophyBody:
      "Ancient systems become meaningful when they are translated with precision, humility, and relevance.",
    body1:
      "Traditional metaphysical disciplines can offer language for pattern, timing, and environment. Qingluan Academy frames that language carefully, so clients can use it as a tool for reflection, perspective, and more grounded decisions.",
    body2:
      "Qingluan Academy is built as a private consultation practice guided by cultural rigor, discretion, and practical communication. A full founder profile and lineage notes can be published as brand materials are finalized.",
    founderTitle: "Founder",
    founderBadge: "Calm, balanced, practical",
    balanceMotif: "Balance motif",
    cta: {
      title: "If the approach feels aligned, explore the services next.",
      description:
        "Each service brings a different lens, but the guiding principles remain the same: clarity, structure, and respect for nuance.",
      primaryLabel: "View services",
      secondaryLabel: "Book now",
    },
  },
  servicesPage: {
    heroEyebrow: "Services",
    heroTitle: "Three consultation formats, each designed for a different kind of question.",
    heroDescription:
      "Choose between personal chart reflection, strategic timing support, or environmental alignment for home and workspace.",
    cta: {
      title: "Not sure which service fits best?",
      description:
        "Start with the booking page or send an inquiry. The structure is ready for a guided recommendation flow later.",
      primaryLabel: "Compare service options",
      secondaryLabel: "Send an inquiry",
    },
  },
  serviceDetail: {
    summary: "Service summary",
    whoFor: "Who it is for",
    covered: "What is covered",
    pricing: "Pricing",
    deliverables: "Deliverables",
    process: "Process",
    ctaTitle: "A private consultation designed around your real situation.",
    ctaDescription:
      "If this service matches your current question, the next step is to request a suitable session format and receive booking guidance based on your needs and time zone.",
    secondaryLabel: "Ask a question first",
  },
  faqPage: {
    heroEyebrow: "FAQ",
    heroTitle: "Questions clients often ask before booking.",
    heroDescription:
      "The current answers are designed to reduce friction, set clear expectations, and make future booking integration easier.",
    cta: {
      title: "Still deciding?",
      description:
        "If your question is more specific than a standard FAQ, the contact page is ready for a private inquiry flow.",
      primaryLabel: "Contact Qingluan Academy",
      secondaryLabel: "Go to booking",
    },
  },
  contactPage: {
    heroEyebrow: "Contact",
    heroTitle: "A private inquiry space for thoughtful questions.",
    heroDescription:
      "If you would like help choosing a service or want to ask about your situation first, use the inquiry form below.",
    contactDetails: "Contact details",
    socialEmpty:
      "Add social links through environment variables to show Instagram, Xiaohongshu, WeChat, or other channels here.",
    processTitle: "Service process",
    processSteps: [
      "1) Fill in the inquiry form with required details.",
      "2) Receive our reply email with service scope, fee details, and payment instructions.",
      "3) Complete payment to confirm your booking.",
      "4) Receive your schedule and preparation guidance.",
      "5) We complete the agreed service and send follow-up notes when applicable.",
    ],
  },
  bookPage: {
    heroEyebrow: "Book",
    heroTitleReady: "Choose a service and book directly.",
    heroTitlePending: "Choose your service and request scheduling.",
    heroDescReady:
      "Select your service, then continue to the scheduling calendar to choose your preferred time.",
    heroDescPending:
      "Choose the consultation format that matches your current needs. You can request scheduling now, and an external calendar can be connected at any time.",
    openCalendar: "Open booking calendar",
    requestService: "Request this service",
    viewDetails: "View details",
    statusReady: "Scheduling ready",
    statusPending: "Private scheduling flow",
    headingReady: "Booking link is now connected.",
    headingPending: "Start with a direct inquiry and receive scheduling guidance.",
    bodyReady:
      "This site is currently using a live scheduling URL from environment variables. You can replace it anytime without changing page code.",
    bodyPending:
      "This page supports immediate service requests and can later embed live availability, intake steps, and confirmation details once a calendar provider is enabled.",
    continueBooking: "Continue to booking",
    iframeTitle: "Booking Calendar",
  },
  notFound: {
    title: "This page is not available.",
    description:
      "The requested path may not exist yet. Return to the homepage or continue browsing the consultation offerings.",
    home: "Go home",
    services: "View services",
  },
  inquiryForm: {
    idleMessage:
      "After submission, we will email you with service scope, fee details, and payment instructions.",
    sendingMessage: "Sending your inquiry...",
    submitError: "Unable to submit right now. Please try again in a moment.",
    labels: {
      name: "Name",
      email: "Email",
      service: "Service of interest",
      timezone: "Timezone",
      message: "What would you like support with?",
      honeypot: "Website",
    },
    placeholders: {
      name: "Your name",
      email: "name@example.com",
      timezone: "e.g. GMT+8",
      message: "Share your context, question, or what you hope to explore.",
    },
    buttons: {
      sending: "Sending...",
      submit: "Send inquiry",
    },
    serviceOptionLabels: {
      "Bazi Clarity Reading": "Bazi Clarity Reading",
      "Qimen Decision Session": "Qimen Decision Session",
      "Remote Feng Shui Audit": "Remote Feng Shui Audit",
      "Not sure yet": "Not sure yet",
    },
  },
};

const ZH_CONTENT: SiteContent = {
  siteMeta: {
    title: "青鸾书院",
    description: "提供八字、奇门遁甲与风水的线上咨询，帮助您获得更清晰的方向与判断。",
  },
  navigation: [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于我们" },
    { href: "/services", label: "服务" },
    { href: "/faq", label: "常见问题" },
    { href: "/contact", label: "联系" },
  ],
  services: [
    {
      slug: "bazi",
      name: "八字命理解读",
      chineseName: "八字",
      tagline: "帮助你看清个人结构、人生阶段与决策节奏。",
      summary:
        "八字是基于出生时间的传统命理系统，可用于理解性格倾向、优势结构、关系模式与阶段性机遇。",
      idealFor: [
        "职业方向不清晰，想梳理长期路径的人。",
        "正在经历转型、关系变化或身份切换的人。",
        "希望用结构化视角看待时机与个人节奏的人。",
      ],
      includes: [
        "命盘结构与五行重点解读。",
        "优势、压力点与重复主题的分析。",
        "结合你的问题讨论事业、关系与阶段策略。",
      ],
      process: [
        "通过表单提交出生信息与核心问题。",
        "进行一对一线上咨询。",
        "获得结构化结论与后续观察建议。",
      ],
      deliverables: ["一对一线上咨询", "结构化重点摘要", "后续行动建议"],
      pricing: "费用需沟通确认，常规起步价约 $180。",
      ctaLabel: "预约八字解读",
    },
    {
      slug: "qimen-dunjia",
      name: "奇门决策咨询",
      chineseName: "奇门遁甲",
      tagline: "用于关键决策、时机判断与行动策略的咨询服务。",
      summary:
        "奇门遁甲可用于分析局势节奏、行动窗口与策略位置，适合在关键节点做更清晰的决策。",
      idealFor: [
        "面对重大选择的创业者与管理者。",
        "准备谈判、转岗、迁移、启动新项目的人。",
        "希望避免情绪化决策、建立策略视角的人。",
      ],
      includes: [
        "问题背景与关键约束条件梳理。",
        "时机、路径与策略位置分析。",
        "面向行动的可执行建议。",
      ],
      process: [
        "明确你要解决的核心问题。",
        "提交背景信息与时间窗口偏好。",
        "进行聚焦咨询并形成行动建议。",
      ],
      deliverables: ["线上一对一咨询", "决策框架摘要", "时机与路径建议"],
      pricing: "费用需沟通确认，常规起步价约 $220。",
      ctaLabel: "预约奇门咨询",
    },
    {
      slug: "feng-shui",
      name: "远程风水评估",
      chineseName: "风水",
      tagline: "针对居住与办公空间的实用优化建议。",
      summary:
        "风水侧重空间气场、动线、功能布局与长期使用体验，帮助你建立更稳定、顺畅的环境支持系统。",
      idealFor: [
        "希望优化居住体验与身心状态的人。",
        "远程办公、需要提升专注与效率的人。",
        "搬家、改造或重设空间功能的人。",
      ],
      includes: [
        "基于平面图与照片进行远程评估。",
        "空间动线、重点区域与摆位建议。",
        "适配现实条件的优化方案。",
      ],
      process: [
        "提交户型图、照片与目标诉求。",
        "进行线上空间评估咨询。",
        "按建议逐步调整与复盘。",
      ],
      deliverables: ["远程咨询", "空间建议摘要", "可执行优化清单"],
      pricing: "费用需沟通确认，常规起步价约 $260。",
      ctaLabel: "预约风水评估",
    },
  ],
  faqItems: [
    {
      question: "需要先懂命理知识吗？",
      answer: "不需要。咨询会用清晰易懂的语言解释核心概念，并直接结合你的实际问题。",
    },
    {
      question: "咨询前需要准备什么？",
      answer:
        "八字咨询需要准确出生信息；奇门咨询需要明确问题场景；风水评估需要户型图和空间照片。",
    },
    {
      question: "是否可以线上完成？",
      answer: "可以。当前服务以线上一对一为主，支持不同时区预约。",
    },
    {
      question: "咨询可以录音吗？",
      answer: "是否录音可在预约确认时沟通；若不录音，也会提供结构化要点摘要。",
    },
    {
      question: "可以咨询事业、关系或搬迁问题吗？",
      answer: "可以。这些都属于常见议题，也可结合你当前阶段做综合判断。",
    },
    {
      question: "改期和取消规则是什么？",
      answer: "可提前沟通改期；无故缺席通常不退款，特殊情况可按约定处理。",
    },
    {
      question: "服务是否等同于医疗、法律或投资建议？",
      answer: "不是。服务用于个人认知与决策辅助，不能替代持证专业意见。",
    },
  ],
  testimonials: [
    {
      name: "匿名客户",
      role: "创业者（柏林）",
      quote: "咨询后最大的变化是决策更稳了，不再被短期焦虑牵着走。",
    },
    {
      name: "匿名客户",
      role: "创意总监（新加坡）",
      quote: "表达非常克制清晰，既有传统深度，也有现实可执行性。",
    },
  ],
  processSteps: [
    "提交咨询表单并填写必要信息。",
    "我们邮件回复服务内容、费用说明与支付信息。",
    "完成支付后确认预约时间与具体安排。",
    "按约定完成咨询并提供后续建议。",
  ],
  trustPoints: [
    "基于传统体系，采用现代可执行表达。",
    "重视隐私、尊重个体差异与边界。",
    "拒绝神秘化夸张叙事，强调务实决策支持。",
  ],
  audiencePoints: [
    "处于转型或决策期的职业人士与创业者。",
    "希望理解自身节奏与方向的创意人群。",
    "希望优化居住/办公环境体验的人群。",
  ],
  founderProfile: {
    name: "青鸾书院创始人",
    title: "八字 · 奇门遁甲 · 风水咨询师",
    location: "面向全球客户提供线上咨询",
    intro:
      "创始人长期学习传统术数体系，并将其转化为现代咨询方法，强调清晰表达、伦理边界与现实可执行性。",
    philosophy:
      "咨询目标不是制造确定性幻觉，而是帮助你在关键阶段看清结构、评估时机，并做出更稳健的行动选择。",
    highlights: [
      "以八字、奇门、风水形成互补视角。",
      "坚持文化尊重、隐私保护与理性表达。",
      "服务创业者、管理者、创意人群与家庭客户。",
    ],
  },
  freeBaziCampaign: {
    eyebrow: "活动入口",
    title: "限量免费 + 明确交换：每周限量看 3 个八字",
    description: "活动不定时开放。若通过申请，你将获得一次完整八字咨询体验。",
    quota: "每周仅 3 个名额，满额即止。",
    exchange: "作为交换，你需提供诚实、具体、可匿名引用的反馈。",
    availability: "活动可能不定时开放，请以当周页面状态为准。",
    primaryHref: "/contact",
    primaryLabel: "申请活动名额",
    secondaryHref: "/services/bazi",
    secondaryLabel: "先了解八字服务",
  },
  header: {
    brandTitle: "青鸾书院",
    brandSubtitle: "传统术数现代咨询",
    bookButton: "预约",
    langZh: "中文",
    langEn: "EN",
  },
  footer: {
    brandTitle: "青鸾书院 · Qingluan Academy",
    description: "以八字、奇门遁甲与风水为核心，提供结构化线上咨询与决策支持。",
    disclaimer:
      "本服务用于个人认知、反思与决策辅助，不构成医疗、法律、心理或投资建议，结果不作保证。",
  },
  home: {
    perspective: {
      eyebrow: "我们的视角",
      title: "把传统智慧转化为可执行的现实建议。",
      description:
        "青鸾书院强调克制、清晰、尊重个体差异的咨询方式，帮助你在关键节点看清方向与节奏。",
      body:
        "我们不做“神秘化预测表演”。我们提供的是结构化咨询：帮助你看清问题、识别模式、优化行动路径与环境支持。",
    },
    service: {
      eyebrow: "服务板块",
      title: "三种咨询路径，对应不同类型的问题。",
      description: "服务方向不同，但底层方法一致：理性、私密、可落地。",
      badge: "服务",
      explore: "查看详情",
    },
    process: {
      eyebrow: "服务流程",
      title: "流程清晰，咨询更专注。",
      description: "先把规则讲清楚，再进入高质量的一对一咨询。",
    },
    trust: {
      eyebrow: "为什么选择我们",
      title: "通过表达方式、专业边界与长期主义建立信任。",
      description: "适合重视质量、隐私和实际效果，而非情绪化叙事的客户。",
    },
    audience: {
      eyebrow: "适合人群",
      title: "给愿意思考、而非急于求答案的人。",
      description: "我们更适合追求长期稳定决策质量的客户。",
    },
    testimonials: {
      eyebrow: "客户反馈",
      title: "来自真实咨询后的匿名反馈。",
      description: "为保护隐私，统一匿名展示，仅呈现可公开引用内容。",
      inquire: "私信咨询",
    },
    campaignLabels: {
      quota: "限量规则",
      exchange: "交换要求",
      availability: "开放说明",
    },
    cta: {
      title: "从你的真实问题出发，选择合适咨询方式。",
      description: "你可以直接预约，也可以先提交问题，由我们帮你判断最合适的服务路径。",
      primaryLabel: "进入预约",
      secondaryLabel: "先联系咨询",
    },
  },
  hero: {
    eyebrow: "青鸾书院 · Qingluan Academy",
    title: "八字 · 奇门遁甲 · 风水咨询",
    description: "面向人生、事业与空间问题的线上咨询服务，帮助你做出更清晰、更稳健的判断。",
    primaryLabel: "立即预约",
    secondaryLabel: "查看服务",
    approachTitle: "咨询方向",
    approachBazi: "通过命盘结构理解个人节奏、优势与阶段重点。",
    approachQimen: "围绕关键决策与时间窗口建立策略视角。",
    approachFengshui: "优化空间布局与环境支持，提升长期状态稳定性。",
  },
  about: {
    heroEyebrow: "关于青鸾书院",
    heroTitle: "以文化根基与现实问题为核心的咨询实践。",
    heroDescription: "我们尊重传统深度，也强调现代语境下的清晰表达与责任边界。",
    standForEyebrow: "我们坚持",
    standForTitle: "有深度，但不故作玄虚。",
    standForDescription:
      "我们以结构化方式转译传统术数，不堆砌术语，不制造压迫感，只围绕你的真实问题给出可执行建议。",
    valuesTitle: "价值观",
    values: ["深度", "清晰", "尊重", "保密", "文化完整性"],
    philosophyTitle: "方法理念",
    philosophyBody: "传统方法的价值，在于被精确、谦逊且负责任地使用。",
    body1:
      "术数可以提供观察结构、时机与环境的语言。我们会将这些语言转换为你可理解、可执行的决策支持。",
    body2: "我们坚持长期主义咨询：不追求戏剧化结论，而是追求稳定、可复盘、可落实的结果。",
    founderTitle: "创始人",
    founderBadge: "克制 · 平衡 · 务实",
    balanceMotif: "平衡意象",
    cta: {
      title: "如果你认同这种方式，可以继续查看服务细节。",
      description: "不同服务适配不同问题场景，但底层原则一致：清晰、结构、尊重边界。",
      primaryLabel: "查看服务",
      secondaryLabel: "立即预约",
    },
  },
  servicesPage: {
    heroEyebrow: "服务",
    heroTitle: "三种服务形态，覆盖不同类型的问题。",
    heroDescription: "你可以根据当前问题类型选择对应服务，也可先提交咨询由我们协助判断。",
    cta: {
      title: "不确定该选哪一项？",
      description: "可先通过联系页提交问题，我们会给出服务建议与下一步安排。",
      primaryLabel: "比较服务选项",
      secondaryLabel: "提交咨询",
    },
  },
  serviceDetail: {
    summary: "服务概述",
    whoFor: "适合人群",
    covered: "咨询范围",
    pricing: "费用说明",
    deliverables: "交付内容",
    process: "执行流程",
    ctaTitle: "围绕你的真实问题，进行一对一咨询。",
    ctaDescription: "如果该服务符合你的需求，可先提交信息，我们将给出具体安排与时间建议。",
    secondaryLabel: "先问一个问题",
  },
  faqPage: {
    heroEyebrow: "常见问题",
    heroTitle: "预约前大家最关心的问题。",
    heroDescription: "这些回答用于明确预期、降低沟通成本，并帮助你判断是否适合当前服务。",
    cta: {
      title: "还有更具体的问题？",
      description: "如果你的问题超出 FAQ 范围，可以直接提交私密咨询。",
      primaryLabel: "联系青鸾书院",
      secondaryLabel: "进入预约",
    },
  },
  contactPage: {
    heroEyebrow: "联系",
    heroTitle: "一个私密、清晰的咨询入口。",
    heroDescription: "如果你想先描述情况，再决定服务类型，可直接填写下方表单。",
    contactDetails: "联系方式",
    socialEmpty: "可通过环境变量配置社交媒体链接（如小红书、微信、Instagram）。",
    processTitle: "服务流程",
    processSteps: [
      "1) 填写必要表单信息并提交。",
      "2) 我们回复邮件，说明服务内容、收费信息与支付信息。",
      "3) 你完成支付后，正式确认预约。",
      "4) 我们发送时间安排与准备说明。",
      "5) 按约定完成咨询服务并提供后续建议。",
    ],
  },
  bookPage: {
    heroEyebrow: "预约",
    heroTitleReady: "选择服务并直接预约。",
    heroTitlePending: "先选择服务，再提交预约请求。",
    heroDescReady: "请选择服务后进入日程系统，确认具体咨询时间。",
    heroDescPending: "选择最符合你当前问题的服务，提交后我们将通过邮件安排下一步。",
    openCalendar: "打开预约日历",
    requestService: "申请该服务",
    viewDetails: "查看详情",
    statusReady: "预约系统已连接",
    statusPending: "私密预约流程",
    headingReady: "预约链接已接通。",
    headingPending: "先提交需求，我们会尽快安排。",
    bodyReady: "当前页面使用环境变量中的真实预约链接，可随时替换，无需改代码。",
    bodyPending: "该区域支持先提交服务请求，后续也可无缝接入外部日历系统。",
    continueBooking: "继续预约",
    iframeTitle: "预约日历",
  },
  notFound: {
    title: "页面不存在或暂未开放。",
    description: "你访问的路径可能已调整。可返回首页，或继续查看服务内容。",
    home: "返回首页",
    services: "查看服务",
  },
  inquiryForm: {
    idleMessage: "提交后我们会邮件回复：服务范围、收费说明与支付信息。",
    sendingMessage: "正在提交...",
    submitError: "暂时无法提交，请稍后再试。",
    labels: {
      name: "姓名",
      email: "邮箱",
      service: "意向服务",
      timezone: "时区",
      message: "你希望我们提供什么帮助？",
      honeypot: "网站",
    },
    placeholders: {
      name: "请输入你的姓名",
      email: "name@example.com",
      timezone: "例如：GMT+8",
      message: "请简要描述你的背景、问题与希望达成的目标。",
    },
    buttons: {
      sending: "提交中...",
      submit: "发送咨询",
    },
    serviceOptionLabels: {
      "Bazi Clarity Reading": "八字命理解读",
      "Qimen Decision Session": "奇门决策咨询",
      "Remote Feng Shui Audit": "远程风水评估",
      "Not sure yet": "暂不确定",
    },
  },
};

export function getSiteContent(locale: Locale): SiteContent {
  return locale === "zh" ? ZH_CONTENT : EN_CONTENT;
}

