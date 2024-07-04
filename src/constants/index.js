import project1 from "../assets/projects/project-1.jpeg"
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
//All the details about the website is mentioned below

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "SRM University - AP",
    description: `Designed and implemented a web portal for faculty-student collaboration in UROP and Capstone projects, optimizing project management.
    Enhanced user experience with React.js and Next.js, ensuring seamless navigation and responsiveness. Achieved a 75% grading improvement and a 50% process efficiency boost for streamlined project monitoring and assessment.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","Firebase", "Tailwind CSS"],
  },
  {
    year: "2023 - 2024",
    role: "Technical Intern",
    company: "SRM University - AP",
    description: `Directed technical operations for university events, encompassing website development, payment gateway management, and design of promotional materials such as posters and flyers. Innovated event technology solutions, for 75% increase in user satisfaction and a 60% improvement in process efficiency. Coordinated cross-functional efforts to ensure seamless execution of events, for 95% client satisfaction.`,
    technologies: [ "React+Vite", "mySQL", "ExpressJS", "Django", "PostgreSQL" ],
  },
  {
    year: "2022 - 2022",
    role: "Research Intern",
    company: "SRM University - AP",
    description: `Developed an AI ML model predicting student acceptance into Masters PG College with 78% accuracy, trained on diverse exam scores to suggest colleges based on proximity to students’ IELTS, GRE, and TOEFL scores. Led data acquisition and cleansing, ensuring dataset integrity with a 95% accuracy rate, optimizing for efficiency and reliability.`,
    technologies: ["Python", "Artificial Intelligence", "Machine Learning", "Neural Networks"],
  },
  {
    year: "2023 - 2024",
    role: "Technical Executive",
    company: "Student Council | SRM University - AP",
    description: `As a Technical Executive in the student council, I led the tech team, managing digital tools for events and communication. I ensured smooth technical operations, handled 135 projects, supported 80+ events, troubleshot issues, trained members on software, and implemented innovative tech solutions to enhance the council's efficiency and outreach.`,
    technologies: [ "next.js+chadcn/ui", "Cloudflare","Canva", "Photoshop", "After Effects"],
  },
];

export const PROJECTS = [
  {
    title: "PokeArena | NFT Trading Webiste",
    image: project1,
    description:
      "Enhanced Trading and Security: Traditional card trading is fraught with issues like damage, loss, and counterfeiting. Our app digitizes Pokémon cards as NFTs, ensuring each card's uniqueness and authenticity. Users can trade, buy, and sell these cards in a secure, transparent e-marketplace, eliminating concerns over fraud and damage.",
    technologies: ["Node.js", "Express.js", "Move", "FEWCHA wallet", "WEB3"],
  },
  {
    title: "INFINITUS | Ticket Booking Website",
    image: project2,
    description:
      "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations across 10 events, and emphasizing crowd loading optimization. Integrated payment gateway to caputre the payments for Cultural and Technical events organised during Infinitus’24.",
    technologies: ["Next.js", "Chadcn/UI", "Three.js"],
  },
  {
    title: "NoteIT | Note Sharing APP",
    image: project3,
    description:
      "The app was created to help 1,000 students share notes efficiently. It features Firebase Authentication for secure access and a real-time database for instant note uploads and sharing. With over 200 storage options and seamless synchronization across devices, the app enhances academic collaboration and resource accessibility for all users.",
    technologies: ["Java", "Android Studio", "Firebase", "Material Design", "Figma"],
  },
  {
    title: "Hotz | Food Ordering App",
    image: project4,
    description:
      "The idea behind building this app was to create a responsive, modern food delivery platform. Our goal was to provide users with an intuitive and visually appealing interface, ensuring seamless navigation and efficient order processing. This app aims to enhance the overall customer experience with 24/7 support and over 30 user-friendly features.",
    technologies: ["Java", "Android Studio", "Firebase", "Material Design", "Figma"],
  },
];

export const CONTACT = {
  address: "EA-103, Maya Enclave, Hari Nagar, New Delhi, 110064, India ",
  phoneNo: "+91 846 799 2551 ",
  email: "achyutkatiyar21@gmail.com",
};
