export const personal = {
  name: "Arfa Sadaf",
  firstName: "Arfa",
  lastName: "Sadaf",
  roles: [
    "Data Analyst",
    "AI & Data Science Engineer",
    "Business Intelligence Developer",
  ],
  tagline:
    "Entry-level Data Analyst specializing in Python, SQL, Machine Learning, and interactive business intelligence dashboards. Passionate about transforming complex data into actionable insights through analytics and beautiful visualizations.",
  location: "Karnataka, India",
  email: "sadafarfa147@gmail.com",
  phone: "+91 9353367368",
  github: "https://github.com/arfa3904",
  linkedin: "https://www.linkedin.com/in/arfa-sadaf-b870a5340",
  resume: "/resume.pdf",
  avatar: "/profile.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    icon: "GraduationCap",
    title: "Education",
    description: "BE in Artificial Intelligence & Data Science, Navkis College of Engineering",
  },
  {
    icon: "Briefcase",
    title: "Internships",
    description: "Hands-on experience at KodNest Technologies & TechnoFly",
  },
  {
    icon: "BarChart3",
    title: "Analytics",
    description: "Turning millions of raw records into clear, actionable insight",
  },
  {
    icon: "Bot",
    title: "Machine Learning",
    description: "Building predictive models that solve real business problems",
  },
];

export const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "DuckDB", level: 80 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "LightGBM", level: 78 },
      { name: "Predictive Analytics", level: 82 },
      { name: "EDA", level: 90 },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 75 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 85 },
      { name: "Recharts", level: 76 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Streamlit", level: 80 },
      { name: "React", level: 75 },
    ],
  },
];

export const experience = [
  {
    company: "KodNest Technologies",
    role: "Data Science Intern",
    period: "2026",
    highlights: [
      "Performed deep-dive customer analytics across 3,900+ customer records",
      "Wrote advanced SQL queries to uncover revenue and behavioral trends",
      "Delivered revenue analysis reports informing business strategy",
      "Built an interactive Power BI loyalty dashboard for stakeholders",
    ],
  },
  {
    company: "TechnoFly",
    role: "Software Development Intern",
    period: "2025",
    highlights: [
      "Developed full-stack web applications end to end",
      "Implemented secure authentication and authorization flows",
      "Designed and integrated REST APIs across services",
      "Handled database design and integration for production features",
    ],
  },
];

export const stats = [
  { value: 3900, suffix: "+", label: "Customers Analyzed" },
  { value: 13.3, suffix: "M+", label: "Financial Transactions", decimals: 1 },
  { value: 95.3, suffix: "%", label: "Fraud Recall", decimals: 1 },
  { value: 35, suffix: "M+", label: "Revenue Analyzed", prefix: "₹" },
  { value: 172, suffix: "K+", label: "Supply Chain Records" },
  { value: 6, suffix: "+", label: "Major Projects" },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  github: string;
  demo?: string;
  accent: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "retail-loyalty",
    title: "Retail Customer Loyalty Analytics",
    category: "Business Intelligence",
    description:
      "Interactive retail analytics dashboard analyzing customer behavior, loyalty, revenue segmentation, and subscription insights.",
    tech: ["Python", "SQL", "Power BI", "PostgreSQL"],
    metrics: [
      { label: "Revenue", value: "₹35.05M" },
      { label: "Customers", value: "3,900" },
    ],
    github: "https://github.com/arfa3904/retail-customer-loyalty-analytics",
    accent: "from-violet-500 to-fuchsia-500",
    image: "/projects/retail-analytics.png",
  },
  {
    id: "fraud-detection",
    title: "Financial Transaction Fraud Detection",
    category: "Machine Learning",
    description:
      "Fraud detection platform processing 13.3 million transactions using DuckDB, SQL, LightGBM, and Streamlit dashboards.",
    tech: ["Python", "DuckDB", "LightGBM", "Streamlit"],
    metrics: [
      { label: "Recall", value: "95.3%" },
      { label: "Records", value: "13.3M" },
    ],
    github:
      "https://github.com/arfa3904/financial-transaction-fraud-detection-risk-analytics.",
    accent: "from-cyan-400 to-blue-500",
    image: "/projects/fraud-detection.png",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Performance Analysis",
    category: "Predictive Analytics",
    description:
      "End-to-end logistics analytics identifying delivery bottlenecks and predicting late deliveries using machine learning.",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    metrics: [
      { label: "Orders", value: "172K" },
      { label: "Accuracy", value: "74%" },
    ],
    github:
      "https://github.com/arfa3904/supply-chain-performance-analysis-delivery-prediction",
    accent: "from-emerald-400 to-teal-500",
    image: "/projects/supplychain.png",
  },
  {
    id: "datacortex",
    title: "DataCortex",
    category: "AI Analytics Platform",
    description:
      "Enterprise-grade Text-to-SQL analytics platform converting natural language into SQL with interactive dashboards.",
    tech: ["React", "Node", "DuckDB", "OpenRouter"],
    metrics: [
      { label: "Records", value: "267K" },
      { label: "Engine", value: "AI SQL" },
    ],
    github: "https://github.com/arfa3904/DataCortex",
    accent: "from-purple-500 to-pink-500",
    image: "/projects/datacortex.png",
  },
  {
    id: "kodbank",
    title: "KodBank Portfolio",
    category: "Full Stack",
    description:
      "Modern banking simulation featuring JWT authentication, React frontend, Express backend, and secure database integration.",
    tech: ["React", "Node", "MySQL"],
    metrics: [
      { label: "Stack", value: "MERN+" },
      { label: "Auth", value: "JWT" },
    ],
    github: "https://github.com/arfa3904/kodbank-portfolio",
    accent: "from-amber-400 to-orange-500",
    image: "/projects/kodbank.png",
  },
  {
    id: "mealbuddy",
    title: "MealBuddy",
    category: "Frontend",
    description:
      "Modern responsive food ordering interface built with elegant UI and smooth user experience.",
    tech: ["HTML", "CSS"],
    metrics: [
      { label: "Type", value: "Frontend" },
      { label: "UX", value: "Responsive" },
    ],
    github: "https://github.com/arfa3904/Mealbuddy",
    accent: "from-rose-400 to-red-500",
    image: "/projects/mealbuddy.png",
  },
];

export const timeline = [
  { year: "2022", title: "Started BE in AI & Data Science", description: "Began undergraduate studies at Navkis College of Engineering, Karnataka." },
  { year: "2025", title: "TechnoFly Internship", description: "Software Development Intern building full-stack applications." },
  { year: "2026", title: "Retail Analytics Project", description: "Shipped a customer loyalty & revenue analytics dashboard." },
  { year: "2026", title: "Supply Chain ML Project", description: "Built a delivery-prediction model over 172K+ logistics records." },
  { year: "2026", title: "Fraud Detection Platform", description: "Delivered a fraud detection system across 13.3M transactions." },
  { year: "2026", title: "KodNest Internship", description: "Data Science Intern focused on customer & revenue analytics." },
  { year: "2026", title: "DataCortex", description: "Launched an AI-powered Text-to-SQL analytics platform." },
];

export const testimonials = [
  {
    quote:
      "Arfa has a rare instinct for finding the story hidden inside messy data. Her fraud detection work was rigorous, well-documented, and genuinely production-minded.",
    name: "Senior Data Scientist",
    role: "Project Collaborator",
  },
  {
    quote:
      "What stood out was her ownership — from raw SQL to a polished Power BI dashboard, she drove the entire analytics pipeline with care and precision.",
    name: "Project Mentor",
    role: "Internship Supervisor",
  },
  {
    quote:
      "A fast learner who pairs strong analytical fundamentals with real product sense. Her dashboards are as thoughtful as her models.",
    name: "Analytics Lead",
    role: "Technical Reviewer",
  },
];
