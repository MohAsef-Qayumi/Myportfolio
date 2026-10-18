export const profile = {
  name: "Mohammad Asef Qayumi",
  shortName: "Asef Qayumi",
  role: "Software Engineer",
  tagline:
    "I build full-stack web products, cross-platform mobile apps, and the occasional machine learning tool — with a bias toward shipping things people actually use.",
  location: "Kabul, Afghanistan",
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
}

// Ordered by relevance. Add `repo` / `live` links as soon as they are public.
export const projects: Project[] = [
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
  { group: "Backend", items: ["Node.js", "Express", "Spring", "Hibernate", "REST APIs"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "Firebase / Firestore"] },
  { group: "Mobile", items: ["Flutter", "Firebase Auth", "Push notifications"] },
  { group: "ML", items: ["scikit-learn", "pandas", "Streamlit", "TensorFlow (learning)"] },
  { group: "Tooling", items: ["Git", "AWS", "Vercel", "Postman", "Figma"] },
]
