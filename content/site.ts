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

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const services: Service[] = [
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
];

export const faqItems: FaqItem[] = [
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
];

export const testimonials = [
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
];

export const processSteps = [
  "Submit the inquiry form with your required details and preferred service.",
  "Receive our reply email with service scope, fee details, and payment instructions.",
  "Complete payment to confirm the booking and consultation schedule.",
  "Receive preparation guidance and complete the agreed consultation service.",
];

export const trustPoints = [
  "Rooted in traditional systems, translated with modern clarity.",
  "Private, personalized, and respectful of nuance and confidentiality.",
  "Designed for reflective decision-making rather than sensational claims.",
];

export const audiencePoints = [
  "Professionals and entrepreneurs navigating transition or timing.",
  "Creatives and thoughtful seekers exploring direction and patterns.",
  "Homeowners and remote workers seeking a more aligned environment.",
];

export const founderProfile: FounderProfile = {
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
};

export const siteMeta = {
  title: "青鸾书院 | Qingluan Academy",
  description:
    "Private online consultations in Bazi, Qimen Dunjia, and Feng Shui for clarity, direction, and space alignment.",
};
