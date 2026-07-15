
export const PROFILE = {
  name: "Vasana Ram",
  role: "Full-Stack (MERN + NEXTJS) developer",
  tagline:
    "Aspiring Software Engineer and Full Stack Developer with hands-on experience designing and developing scalable web applications, responsive user interfaces, backend services, and RESTful APIs.",
  location: "Kota, Rajasthan",
  experience: "1+ yrs",
  focus: "Web Platforms",
  availability: "Open to Full stack developer role",
  email: "Vasanaram162@gmail.com",
  socials: {
    github: "https://github.com/vishnuchoudhary764",
    linkedin:  "http://www.linkedin.com/in/vishnuchoudhary764",
  },
};

const ABOUT_FACTS = [
  {
    label: "LinkedIn",
    value: "http://www.linkedin.com/in/vishnuchoudhary764",
   
  },
  {
    label: "LeetCode",
    value:  "https://leetcode.com/u/vishnu_choudhary764/",
   
  },
  {
    label: "GitHub",
    value:  "https://github.com/vishnuchoudhary764",
    
  },
  {
  label: "HackerRank",
  value: "https://www.hackerrank.com/profile/vasanaram162",
 
},
];


export const SKILLS = [
  {
    group: "Frontend",
    items: [
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux", level: 50 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 80 },




    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", level: 65 },
      { name: "Express", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "MySql", level: 80 },
      { name: "MongoDb", level: 74 },
    ],
  },
   {
    group: "Tools",
    items: [
      { name: "CI / CD (GitHub Actions)", level: 83 },
      { name: "Deployment", level: 77 },


    ],
  },
];

export const PROJECTS = [
  {
    fig: "01",
    title: "JobHouse",
    img:"jobhouse.jpeg",
    hue: "amber",
    description:
      " AI powered job and internship platform with recruitment features by integrating the Groq API to perform resume analysis with ATS scoring",
    tags: ["React", "Node.js", "MongoDb", "Express.js","Tailwind","Redux","Cloudinary","Groq API"],
    demo: "https://jobhouse-frontend.vercel.app/",
    github: "https://github.com/vishnuchoudhary764/jobhouse-frontend",
  },
  {
    fig: "02",
    title: "UniTalk-Backend",
    img:"uniTalk.png",

    hue: "teal",
    description:
      "An anonymous chat application feature with a privacy-first architecture where user identities remain hidden by default, with a controlled reveal mechanism that exposes identities only upon verified mutual connection.",
    tags: ["React Native", "MongoDb", "Node.js","Express.js","Nodemailer","Cloudinary"],
    demo: "",
    github: "https://github.com/vishnuchoudhary764/unitalk-backend",
  },
  {
    fig: "03",
    title: "SAC-RTU",
    img:"sac.jpeg",

    hue: "rose",
    description:
      "A full-stack Club & Events website developed to streamline campus event management, allowing users to explore events while coordinators can create, update, and manage activities through role-based access.",
    tags: ["Next.js", "MongoDb", "Tailwind"],
    demo: "https://rtuclub.vercel.app/",
    github: "https://github.com/vishnuchoudhary764/rtuclub",
  },
  {
    fig: "04",
    title: "Tic Tac Toe Game",
    img:"tttgame.png",

    hue: "ink",
    description:
      "An interactive Tic Tac Toe web game built with HTML, CSS, and JavaScript, featuring responsive UI, real-time game logic, winner detection, draw handling, and one-click restart.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://vishnuchoudhary764.github.io/Tic-Tac-Toe-game/",
    github: "https://github.com/vishnuchoudhary764/Tic-Tac-Toe-game",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Analyst intern",
    company: "Techak",
    period: "2026",
    points: [
      "Lead a team of four building the core billing platform serving 40k+ customers.",
      "Cut checkout latency by 38% through query optimization and edge caching.",
      "Introduced a component library adopted across three product teams.",
    ],
  },
  {
    role: "Frontend Developer intern",
    company: "Proscon Automation Kota",
    period: "2025",
    points: [
      "Built and shipped the customer-facing analytics dashboard from scratch.",
      "Migrated a legacy monolith to a modular service architecture.",
      "Mentored two junior engineers through onboarding and first launches.",
    ],
  },
  {
    role: "Machine Learning intern",
    company: "Thinkwave Technologies Pvt Ltd",
    period: "2025",
    points: [
      "Delivered marketing and product sites for a portfolio of six clients.",
      "Established the agency's first shared design-token system.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    school: "Rajasthan Technical University, Kota",
    period: "2023 — 2027",
    note: "",
  },
];

export const CERTIFICATIONS = [
  { name: "AWS for begginer", org: "SimpliLearn", year: "2026" },
  { name: "SQL", org: "HackerRank", year: "2026" },
  { name: "Java (Basic )", org: "HackerRank", year: "2025" },

];

export const NAV_ITEMS = [
  { id: "profile", label: "Profile", fig: "01" },
  { id: "skills", label: "Skills", fig: "02" },
  { id: "projects", label: "Projects", fig: "03" },
  { id: "experience", label: "Experience", fig: "04" },
  { id: "education", label: "Education", fig: "05" },
  { id: "contact", label: "Contact", fig: "06" },
];

export const HUES = {
  amber: { a: "#D98B3F", b: "#F0C892" },
  teal: { a: "#4F7C82", b: "#A9C7C9" },
  rose: { a: "#B85450", b: "#E3ADA9" },
  ink: { a: "#3A4258", b: "#98A0B5" },
};