export const config = {

  show: {
    cover: false,
    profile: false,
    techStack: false,
  },

  identity: {
    profile: "public/profile/profile.webp",
    cover: "public/profile/cover.webp",
    name: "Jerson Caibog",
    course: "BSIT",
    school: "ESSU Guiuan",
  },

  socials: {
    github: "https://github.com/jersoncaibog",
    linkedin: "https://www.linkedin.com/in/jerson-caibog/",
    instagram: "https://www.instagram.com/jersondereal/"
  },

  contacts: {
    email: "jersoncaibog1@gmail.com",
    phone: "0927 324 0956"
  }, 

  projects: [
    {
      image: "public/projects/p1.webp",
      title: "smart home",
      description: "smart home system that controls devices using hand gestures",
      techStack: [ "Next.js", "C++", "JavaScript", "Python", "TensorFlow", "PostreSQL", "Tailwind CSS" ]
    },
    {
      image: "public/projects/p2.webp",
      title: "essu ssc admin",
      description: "student management app for essu ssc",
      techStack: [ "React", "JavaScript", "Node.js", "PostreSQL", "Tailwind CSS" ]
    },
    {
      image: "public/projects/p3.webp",
      title: "climate cast ph",
      description: "forecasting app to predict temperature trends in the Philippines",
      techStack: [ "Next.js", "Node.js", "PostreSQL", "Tailwind CSS" ]
    },
    {
      image: "public/projects/p4.webp",
      title: "wakanda",
      description: "RFID-based attendance tracking system for a local fitness center",
      techStack: [ "HTMl", "CSS", "JavaScript", "Node.js", "Bootstrap", "MariaDB" ]
    },
    {
      image: "public/projects/p5.webp",
      title: "smart rc car",
      description: "remote-controlled RC car with obstacle detection",
      techStack: [ "C++" ]
    },
  ]

}