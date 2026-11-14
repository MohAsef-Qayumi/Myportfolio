export const profile = {
  name: "Mohammad Asef Qayumi",
  shortName: "Asef Qayumi",
  role: "Full-Stack Web & Mobile Developer · AI Engineer",
  availability: "Available for remote roles & select projects",
  tagline:
    "I design and ship products end to end — offline-first web apps, desktop and mobile clients, and practical AI features — from the data model to production.",
  location: "Islamabad, Pakistan",
  hometown: "Herat, Afghanistan",
  email: "asef.qayumi0747@gmail.com",
  phone: "+93 747 684 440",
  resume: "/resume.pdf",
  photo: "/poto4.jpg",
  socials: {
    github: "https://github.com/MohAsef-Qayumi",
    linkedin: "https://www.linkedin.com/in/mohammadasef-qayumi/",
    x: "https://x.com/AsefQayumi7989",
  },
}

export const about = [
  "I'm a software engineer and an Artificial Intelligence undergraduate at NUST, Islamabad. I started out building websites for local businesses in Herat, moved into Flutter for mobile clients, and have since worked on React frontends and Java/Spring backends with remote teams.",
  "Most of my work sits where product and engineering meet: understanding what a user is trying to do, designing a data model that won't fight back later, and keeping the interface fast and obvious. Lately I've been focused on applying ML in practical, small-scope tools rather than demos.",
]

export type Service = {
  title: string
  summary: string
  deliverables: string[]
  stack: string[]
}

// What I can be hired for. Each maps to a kind of role or freelance engagement.
export const services: Service[] = [
  {
    title: "Web applications",
    summary: "Full-stack products from data model to deployment.",
    deliverables: [
      "React and Next.js frontends with accessible, responsive UI",
      "Node.js and Express APIs, authentication and role-based access",
      "Database design, third-party integrations and Stripe payments",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Stripe"],
  },
  {
    title: "Mobile & desktop apps",
    summary: "Cross-platform clients that keep working on poor connections.",
    deliverables: [
      "Flutter apps for Android and iOS with Firebase",
      "Offline-first storage and background sync",
      "Desktop apps and browser extensions",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Electron"],
  },
  {
    title: "AI & automation",
    summary: "Practical AI features and workflows that remove manual work.",
    deliverables: [
      "LLM features with validated output and provider failover",
      "AI agents and workflow automation with n8n",
      "Classical ML models and evaluation tooling",
    ],
    stack: ["LLM APIs", "n8n", "Python", "scikit-learn"],
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    role: "Java Developer",
    company: "CodeAlpha",
    location: "Remote",
    period: "Feb 2025 — Jun 2025",
    points: [
      "Built and maintained backend features in Java with Spring and Hibernate.",
      "Fixed production bugs and shipped scalable improvements to existing services.",
      "Worked in Agile sprints with daily stand-ups and code review on every change.",
    ],
    stack: ["Java", "Spring", "Hibernate", "Git"],
  },
  {
    role: "Frontend Developer",
    company: "Cognifyz Technologies",
    location: "Remote",
    period: "Dec 2024 — Feb 2025",
    points: [
      "Built responsive interfaces with React, Next.js and Tailwind CSS.",
      "Improved rendering performance and UX in the modules I owned.",
      "Turned reviewer feedback into fast iterations on production UI.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Flutter Developer",
    company: "Freelance",
    location: "Remote",
    period: "Sep 2023 — Jun 2024",
    points: [
      "Shipped cross-platform apps for clients in healthcare and productivity.",
      "Implemented Firebase Auth, Firestore and push notifications end to end.",
      "Built clean Material Design interfaces for Android and iOS.",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
  },
  {
    role: "Web Developer",
    company: "Freelance",
    location: "Herat, Afghanistan",
    period: "Feb 2020 — Jun 2022",
    points: [
      "Designed, built and deployed websites for local businesses.",
      "Owned the full lifecycle: scoping, development, hosting and maintenance.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]

export const education = [
  {
    degree: "BS Artificial Intelligence",
    school: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
    period: "2024 — 2028",
    note: "Coursework in data structures & algorithms, machine learning and AI.",
  },
]

export type ProjectStatus = "shipped" | "in-progress"

export type Project = {
  title: string
  summary: string
  problem: string
  highlights: string[]
  stack: string[]
  status: ProjectStatus
  year: string
  repo?: string
  live?: string
  /** Shown as a small label, e.g. for work built for a client. */
  label?: string
  /** Screenshots in /public/projects. */
  images?: { web?: string; mobile?: string }
}

// Ordered by relevance. Add `repo` / `live` links as soon as they are public.
export const projects: Project[] = [
  {
    title: "AsanBazar — Classifieds Marketplace",
    summary: "Afghanistan's free online marketplace for buying, selling, jobs and services, on the web and as mobile apps.",
    problem:
      "People across Afghanistan had no simple, local-language place to post and find listings by province and district.",
    highlights: [
      "Listings across 14 categories with province, district and subcategory filters",
      "Featured listings, favourites, user accounts and a post-listing flow",
      "Multilingual interface with right-to-left support",
      "Installable web app with push notifications, plus Android and iOS apps",
    ],
    stack: ["React", "Vite", "Supabase", "i18next", "Cloudflare"],
    status: "shipped",
    year: "2026",
    label: "Client project",
    live: "https://asanbazar.net",
    images: { web: "/projects/asanbazar-web.jpg", mobile: "/projects/asanbazar-mobile.jpg" },
  },
  {
    title: "Tarjuman — Classical Arabic Translator",
    summary: "Translate passages from Shamela and other Islamic libraries while you read, in the browser or over any desktop app.",
    problem:
      "Readers who aren't fluent in Arabic can't use classical Islamic libraries, and general translators mangle hadith and fiqh terminology.",
    highlights: [
      "Glossary-aware prompts for hadith, fiqh and usul; schema-validated model output",
      "Provider chain with per-provider cooldowns and Retry-After handling, stacking free tiers",
      "Browser extension in a shadow DOM with a paragraph picker and tap-a-word root lookup",
      "Electron app with a non-focusing floating bubble and global shortcut that reads any app's selection",
      "Monorepo with shared core and UI packages; end-to-end tests drive the real extension and desktop app",
    ],
    stack: ["TypeScript", "Next.js", "Electron", "Chrome Extensions", "LLM APIs", "Playwright"],
    status: "shipped",
    year: "2026",
    repo: "https://github.com/MohAsef-Qayumi/Tarjuman",
    live: "https://tarjuman-xi.vercel.app",
  },
  {
    title: "Sehat — Offline-first Clinic Records",
    summary: "Patient records, visits, prescriptions and a daily queue for small clinics — fully usable without internet.",
    problem:
      "Clinics in Afghanistan and Pakistan lose records to paper and to web apps that stop working when the internet or power drops.",
    highlights: [
      "Local-first: every screen reads and writes IndexedDB, then syncs in the background",
      "Field-level conflict resolution with hybrid logical clocks — concurrent offline edits both survive",
      "Ordered sync cursor in Postgres using advisory locks, so no change is ever skipped",
      "Installable PWA that opens and navigates offline; English, Dari and Pashto with RTL",
      "Tested with simulated offline devices syncing through the real server code",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Dexie", "Vitest"],
    status: "shipped",
    year: "2026",
    repo: "https://github.com/MohAsef-Qayumi/sehat",
    live: "https://sehat-git-main-mohammad-asefs-projects.vercel.app",
  },
  {
    title: "Bookstore Commerce",
    summary: "Full-stack e-commerce platform for an online bookstore.",
    problem:
      "Small sellers need a storefront and a back office that don't require two separate tools.",
    highlights: [
      "JWT auth with separate customer and admin roles",
      "Admin dashboard for catalogue, users, orders and inventory",
      "Cart, checkout and order tracking over a REST API",
      "Search and filtering with responsive, mobile-first UI",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "shipped",
    year: "2025",
  },
  {
    title: "Ledger — Personal Finance Tracker",
    summary: "Track income, expenses and savings, and see where money actually goes.",
    problem:
      "Spreadsheets make it easy to log transactions but hard to see trends over time.",
    highlights: [
      "Categorised transactions with full CRUD and validation",
      "Dashboards and charts for monthly trends and savings rate",
      "Responsive layout for quick logging on mobile",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "shipped",
    year: "2025",
  },
  {
    title: "Model Bench",
    summary: "Interactive app for training and comparing classification models.",
    problem:
      "Students learning ML spend more time on boilerplate than on understanding model behaviour.",
    highlights: [
      "Upload a dataset, preprocess and pick features in the browser",
      "Train Logistic Regression, Decision Tree, SVM and Random Forest side by side",
      "Accuracy, precision, recall, F1 and confusion matrices per model",
      "Export trained models with joblib",
    ],
    stack: ["Python", "Streamlit", "scikit-learn", "pandas", "seaborn"],
    status: "shipped",
    year: "2024",
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "Dart", "SQL", "C++"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Spring", "Hibernate", "REST APIs", "Stripe"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "Firebase / Firestore"] },
  { group: "Mobile", items: ["Flutter", "Firebase Auth", "Push notifications"] },
  { group: "AI & ML", items: ["LLM APIs", "n8n", "scikit-learn", "pandas", "Streamlit", "TensorFlow"] },
  { group: "Tooling", items: ["Git", "GitHub Actions", "AWS", "Vercel", "Postman", "Figma"] },
]
