const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    // {
    //   name: "Projects",
    //   link: "#work",
    // },
    // {
    //   name: "Contacts",
    //   link: "#contact",
    // },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "UIs", imgPath: "/images/designs.svg" },
    { text: "APIs", imgPath: "/images/code.svg" },
    { text: "Auth", imgPath: "/images/concepts.svg" },
    { text: "Cloud", imgPath: "/images/concepts.svg" },
  ];
  
  
  const counterItems = [
    { value: 1, suffix: " year", label: "Learning Full-Stack Development" },
    // { value: 10, suffix: "+", label: "Projects Completed" },
    { value: 1400, suffix: "+", label: "Doubts Solved at Coding Ninjas" },
    { value: 639, suffix: "+", label: "Students Assisted at Coding Ninjas" },
    { value: 165, suffix: "+", label: "Projects Evaluated at Coding Ninjas" },
  ];
  
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/1.png",
    },
    {
      imgPath: "/images/logos/3.png",
    },
    {
      imgPath: "/images/logos/bootstrap.jpg",
    },
    {
      imgPath: "/images/logos/tailwind.png",
    },
    {
      imgPath: "/images/logos/js.png",
    },
    {
      imgPath: "/images/logos/node express.png",
    },
    {
      imgPath: "/images/logos/mongodb.png",
    },
    {
      imgPath: "/images/logos/mongoose.jpg",
    },
    {
      imgPath: "/images/logos/react.png",
    },
    {
      imgPath: "/images/logos/socketio.png",
    },
    {
      imgPath: "/images/logos/render.png",
    },
    {
      imgPath: "/images/logos/gemini.png",
    },
    {
      imgPath: "/images/logos/chatgpt.jpg",
    },
    {
      imgPath: "/images/logos/cursorai.jpg",
    },
    
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
   
    {
      name: "FrontEnd Developer",
      modelPath: "/models/javascript_1.glb",
      scale: 0.15,
      rotation: [360, 360, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Github",
    //   modelPath: "/models/github.glb",
    //   scale: 8,
    //   // rotation:  [350, -Math.PI / 2, 0],
    //   rotation: [0, 0, 0],
    // },
    {
      name: "Core Java",
      modelPath: "/models/java.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
   
  ];
  
  const expCards = [
    {
      review: "Shivani’s contributions as a Teaching Assistant at Coding Ninjas have significantly impacted student learning outcomes. Her ability to clarify complex topics and offer personalized support has made her a reliable mentor.",
      imgPath: "/images/codingninjas_logo.jpg",
      logoPath: "/images/codingninjas_logo.jpg", 
      title: "Teaching Assistant (Coding Ninjas)",
      date: "November 2024 - Present",
      responsibilities: [
        "Resolved over 1400+ student doubts across FrontEnd(HTML , CSS , JavaScript) and Backend(Nodejs, Express, Mongodb , Mongoose...) topics.",
        "Mentored 639+ students by providing personalized guidance on assignments and concepts.",
        "Evaluated 165+ projects, offering constructive feedback to help improve code quality.",
      ],
    },
    {
      review: "Shivani excelled during her internship at Bharat Intern by building responsive, scalable, and user-friendly applications. Her attention to detail and ability to work across the full stack stood out.",
      imgPath: "/images/bharat_intern_logo.jpg",
      logoPath: "/images/bharat_intern_logo.jpg", 
      title: "Full Stack Developer (Bharat Intern)",
      date: "October 2023 - November 2023",
      responsibilities: [
        "Built a feature-rich video conferencing app and weather app using React and Firebase.",
        "Created a responsive Netflix clone with seamless routing and API integration.",
        "Worked with Node.js, Express, and MongoDB to implement backend functionalities and APIs.",
      ],
    },
    {
      review: "Shivani effectively managed administrative tasks while ensuring smooth operations at Shrijee College. Her organizational and multitasking skills were key in running day-to-day operations efficiently.",
      imgPath: "/images/latter 001 (2) - Copy.jpg", 
      logoPath: "/images/latter 001 (2) - Copy.jpg", 
      title: "Administrator (Shrijee College)",
      date: "Feb 2020 - Oct 2023",
      responsibilities: [
        "Managed daily administrative tasks, ensuring smooth operations of the college.",
        "Coordinated between students, faculty, and the administration to ensure timely communication.",
        "Assisted in organizing events, managing schedules, and maintaining college records.",
      ],
    },
    // {
    //   title: "Full Stack Developer (Personal Projects)",
    //   date: "March 2023 - Present",
    //   description: "Through various personal projects, I’ve explored the entire web development lifecycle—from ideation to deployment—enhancing my skills in frontend, backend, and full-stack technologies.",
    //   responsibilities:[],
    //   projects: [
    //     {
    //       name: "Netflix Clone",
    //       techStack: "React, Node.js, MongoDB, Express",
    //       outcome: "Developed a fully responsive Netflix-like app with user authentication and video previews.",
    //       challenges: "Handled user sessions securely and optimized dynamic data rendering for large datasets.",
    //     },
    //     {
    //       name: "IMDb Clone",
    //       techStack: "React, Node.js, Firebase",
    //       outcome: "Built an IMDb-style platform that displays movie info, reviews, and real-time ratings.",
    //       challenges: "Integrated real-time APIs and implemented advanced search and filter functionalities.",
    //     },
    //   ],
    // },
  ];
  
  
    
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "linkedin",
      imgPath: "/images/3.png",
      url:"https://www.linkedin.com/in/shivaninagdanagda",
      classname:"fas fa-linkedin"
    },
    {
      name: "github",
      // imgPath: "/images/insta.png",
      url:"https://github.com/ShivaniNagda",
      imgPath: "/images/1.png",
      classname:"fas fa-github"
    },
    {
      name: "youtube",
      url:"https://www.youtube.com/@TheCodePath",
      imgPath: "/images/2.png",
      classmame:"fas fa-youtube"
    },
    {
      name: "portfolio",
      imgPath: "/logo.jpg",
      url:"shivaninagda.github.io/shivani_Portfolio",
      classname:"fas fa-project"
    },
    
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };
  