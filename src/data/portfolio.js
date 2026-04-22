export const personalInfo = {
  name: "Sumit Mathpal",
  title: "ML Engineer & Full-Stack Developer",
  tagline: "Engineering Intelligent Systems",
  subtitle: "Machine Learning · Full-Stack Development",
  bio: [
    "I am an aspiring Machine Learning Engineer and Full-Stack Developer currently pursuing a Bachelor of Technology in Computer Science Engineering at Aravali College. My academic path began with a Diploma from Accurate College (2022–2025), where I built a solid foundation in software engineering.",
    "My work sits at the intersection of data science and product engineering — I design ML pipelines for real-world prediction tasks and build full-stack web applications using the MERN stack.",
    "I am driven by the challenge of translating raw data into reliable, meaningful products — from a heart risk prediction model deployed via Streamlit to a full-stack URL shortener built on MongoDB and Node.js.",
  ],
  contact: {
    email: "sumitmathpalcse@gmail.com",
    phone: "+91 88262 47092",
    location: "Faridabad, Haryana, India",
    github: "https://github.com/SumitMathpal",
    linkedin: "https://www.linkedin.com/in/",
    resume: "/Sumit_Mathpal_CV.pdf",
  },
  stats: {
    status: "Available for opportunities",
    location: "Faridabad, Haryana, IN",
    education: "B.Tech CSE · 2028",
    experience: "Internship · IBEM Solutions",
    focus: "ML Engineering",
    stack: "MERN · Python · Scikit-learn",
  },
};

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Aravali College",
    period: "Expected 2028",
    accent: "blue",
  },
  {
    degree: "Diploma in Computer Science",
    field: "Computer Science Engineering",
    institution: "Accurate College",
    period: "2022 – 2025",
    accent: "green",
  },
];

export const experience = [
  {
    role: "Assistant Web Developer",
    company: "IBEM Solutions LLP",
    type: "On-site Internship",
    period: "September 2024 – December 2024",
    points: [
      "Developed responsive WordPress websites and high-converting landing pages for client projects",
      "Built and refined UI components using CSS, JavaScript, and React.js to meet design specifications",
      "Collaborated across frontend and backend teams to ensure seamless system integration",
      "Identified and resolved performance bottlenecks; participated in production deployment workflows",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    color: "blue",
    items: ["Python", "C++"],
  },
  {
    category: "Machine Learning",
    color: "green",
    items: [
      "Linear Regression", "Logistic Regression", "Decision Trees",
      "Random Forest", "KNN", "Naive Bayes", "Scikit-learn", "Web Scraping",
    ],
  },
  {
    category: "Data Analysis",
    color: "orange",
    items: ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebook", "Kaggle"],
  },
  {
    category: "Web Development",
    color: "blue",
    items: [
      "React.js", "Node.js", "Express.js", "MongoDB", "MySQL",
      "REST APIs", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "EJS",
    ],
  },
  {
    category: "Tools & Platforms",
    color: "green",
    items: [
      "Git", "GitHub", "Docker", "Postman", "VS Code",
      "n8n", "Netlify", "Vercel", "Render", "MongoDB Atlas",
    ],
  },
];

export const projects = [
 
  {
    index: "01",
    stack: "Streamlit · Scikit-learn · Pandas · NumPy",
    name: "AI-Powered Heart Risk Prediction",
    color: "green",
    points: [
      "Trained a Logistic Regression model on the UCI heart disease dataset using Scikit-learn",
      "Applied data preprocessing and feature scaling with Pandas and NumPy for improved accuracy",
      "Shipped a real-time Streamlit interface with Pickle-based model serialisation and cloud deployment",
    ],
    link: "https://heartstrockprediction.streamlit.app/",
    linkLabel: "Live Demo ↗",
  },
  {
    index: "02",
    stack: "FastAPI · Random Forest · Pandas",
    name: "Loan Approval Prediction Model",
    color: "orange",
    points: [
      "Built a Random Forest classifier pipeline for automated loan approval prediction",
      "Handled missing values, feature encoding, and full preprocessing with Pandas",
      "Evaluated model performance using accuracy metrics and confusion matrix analysis",
    ],
    link: "https://github.com/SumitMathpal/loan_prediction_ml_model",
    linkLabel: "GitHub ↗",
  },
  {
    index: "03",
    stack: "MongoDB · Express.js · React.js · Node.js",
    name: "URL Shortener — MERN Stack",
    color: "purple",
    points: [
      "Architected a full-stack URL shortener with RESTful APIs and MongoDB persistence",
      "Implemented secure redirection logic and collision-resistant short URL generation",
      "Built a responsive React.js interface with clean UX and optimised load times",
    ],
    link: "https://github.com/SumitMathpal/url-shortener",
    linkLabel: "GitHub ↗",
  },
  {
   index: "04",
    stack: "Machine Learing · Streamlit · Data Processing",
    name: "Invoice Intelligent System",
    color: "Blue",
    points: [
      "Architected an AI-powered invoice intelligence system for automated freight cost prediction and anomaly detection",
      "Developed machine learning models using Scikit-learn to classify invoices as safe or suspicious based on transactional patterns",
      "Implemented data preprocessing and feature scaling pipelines to improve model accuracy and consistency",
    ],
    link: "https://github.com/SumitMathpal/Invoice-Intelligent-System",
    linkLabel: "GitHub ↗",
    link:"https://invoice-intelligent-system-u5hhf7miswhaoamz3biyze.streamlit.app/",
    linkLabel:"Live Demo ↗"

  }
];

export const navLinks = [
  { label: "Profile",    href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "mailto:sumitmathpalcse@gmail.com" },
];

export const sideNavItems = [
  { label: "Top",        href: "#hero" },
  { label: "Profile",    href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
];
