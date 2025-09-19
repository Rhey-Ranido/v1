// Portfolio Configuration
// Edit this file to update your portfolio content

const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Christian Rhey Ranido",
    title: "Aspiring Software Engineer",
    tagline: "Building innovative solutions while pursuing excellence in Information Technology",
    bio: "Passionate Software Engineering student at Eastern Samar State University, consistently earning Dean's List recognition while building expertise in full-stack development. I thrive on transforming complex challenges into elegant solutions and collaborating with teams to create impactful digital experiences. Currently seeking opportunities to apply my technical skills in real-world projects and contribute to innovative software solutions.",
    email: "christianrheyranido@gmail.com",
    phone: "+63 965 350 4545",
    location: "Eastern Samar, Philippines",
    avatar: "./assets/avatar.jpg", // Optional: add your photo
    gpa: "1.50",
    university: "Eastern Samar State University - Guiuan",
    degree: "Bachelor of Science in Information Technology",
    expectedGraduation: "May 2026",
    portfolio: "rhey-ranido.github.io/v1"
  },

  // Social Links
  social: {
    github: "https://github.com/rhey-ranido",
    linkedin: "https://linkedin.com/in/christianrheyranido",
    gmail: "mailto:christianrheyranido@gmail.com"
  },

  // Skills
  skills: [
    // Languages & Programming
    "JavaScript (ES6+)", "TypeScript", "Python", "Java", "PHP", "HTML5", "CSS3",
    
    // Frameworks & Libraries
    "React", "Next.js", "Vue.js", "Node.js", "Express.js", "FastAPI", "Laravel", 
    "Material UI", "jQuery", "Jest", "Flask", "Tailwind CSS", "Framer Motion",
    
    // Databases & Cloud Services
    "Supabase", "MongoDB", "MySQL", "MariaDB", "Firebase", "PostgreSQL",
    
    // // Technologies & Protocols
    // "REST APIs", "WebSockets", "Webhooks", "Microservices", "HTTP protocols"
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "ESSU-SSC Admin System",
      description: "Full-stack student council management system that reduced manual administrative tasks by 70%. Features role-based access control, dynamic calendar, and automated fine management with 99% data accuracy.",
      techStack: ["React", "React Query", "Zod", "Node.js", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/rhey-ranido/essu-ssc",
      liveUrl: "https://essu-ssc.vercel.app",
      image: "./assets/project1.jpg"
    },
    {
      id: 2,
      title: "Artist Hub",
      description: "Creative platform for artists to post artworks, access tutorials, and connect through real-time messaging. Features secure authentication, artwork galleries, and interactive learning resources.",
      techStack: ["React", "Next.js", "Supabase", "WebSockets", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/rhey-ranido/artist-hub",
      liveUrl: "https://artist-hub-1.vercel.app",
      image: "./assets/project2.png"
    },
    {
      id: 3,
      title: "Service Hub",
      description: "Marketplace platform for discovering and booking local service providers. Features map-based listings, real-time messaging, booking system, ratings/reviews, and analytics dashboard.",
      techStack: ["Vue.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Google Maps API"],
      githubUrl: "https://github.com/rhey-ranido/service-hub",
      liveUrl: "https://capstonev1.vercel.app",
      image: "./assets/project3.png"
    }
  ],

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" }
  ]
};

// Make portfolioConfig available globally for browser use
window.portfolioConfig = portfolioConfig;

// Export for use in main.js (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioConfig;
}
