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
    "Artificial Intelligence & Data Science graduate skilled in Python, SQL, Power BI, Machine Learning, and Business Intelligence. Passionate about designing data-driven solutions, developing interactive dashboards, and building intelligent applications that transform complex data into actionable insights and real-world impact.",
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
      { name: "Python", detail: "6+ Projects" },
      { name: "SQL", detail: "Advanced" },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "Pandas", detail: "Data Analysis" },
      { name: "NumPy", detail: "Data Processing" },
      { name: "PostgreSQL", detail: "Database" },
      { name: "DuckDB", detail: "Analytics" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", detail: "Predictive Models" },
      { name: "LightGBM", detail: "Fraud Detection" },
      { name: "EDA", detail: "Statistical Analysis" },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { name: "Power BI", detail: "Dashboard Expert" },
      { name: "Matplotlib", detail: "Data Visualization" },
      { name: "Seaborn", detail: "Analytics Charts" },
      { name: "Recharts", detail: "Interactive Charts" },
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
  { value: 13.3, suffix: "M+", label: "Financial Transactions", decimals: 1 },
  { value: 172, suffix: "K+", label: "Supply Chain Records" },
  { value: 35.05, suffix: "M", label: "Revenue Analyzed", prefix: "₹", decimals: 2 },
  { value: 95.3, suffix: "%", label: "Fraud Recall", decimals: 1 },
  { value: 3900, suffix: "", label: "Customers Analyzed" },
  { value: 6, suffix: "+", label: "Featured Projects" },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  github: string;
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
