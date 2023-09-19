import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  contus,
  thoughtworks,
  prov,
  victoriassecret
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Photography",
    title: "Photography"
  },
  {
    id: "Resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "iOS Developer",
    icon: web,
  },
  {
    title: "XR Developer",
    icon: mobile,
  },
  {
    title: "Product Owner",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior iOS Developer",
    company_name: "Victoria's Secret",
    icon: victoriassecret,
    iconBg: "#383E56",
    date: "March 2023 - present",
    points: [
      "Handling core shop features in Victoria’s secret native application",
      "Created a New package using SwiftUI and Combine for Scanners.",
      "Professionally managed a mini-sized team, seamlessly combining team leadership, technical expertise and Agile methodologies to achieve project success, while fostering growth and collaboration.",
      "Participated in Innovation fest pitching new ideas for company forecasting the future of mobile in ecommerce"
    ],
  },
  {
    title: "Mobile developer Consultant",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Mar 2023",
    points: [
      "Orchestrated the implementation of search, product listing, and checkout features within Kroger (An app serving millions of customers).",
      "Successfully delivered a application with cross platform + Native in a given period of time which has core cryptography and Bluetooth launched by Microsoft but a Govt of India Initiative.",
      "XR Community Lead for Bangalore and worked in spatial Audio, Oculus projects and few Mobile AR POC’s.",
      "Worked as a Full-Stack developer in UIDAI (Fraud detection using AI) and implemented Data Science workbench tool.",
      "Mentored and Took session for 30+ college grads in Extreme Programming, TDD and clean coding practices.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "ProV",
    icon: prov,
    iconBg: "#383E56",
    date: "Aug 2018 - Aug 2019",
    points: [
     "Worked in IFS - FSM projects for clients across the globe.",
     "Completed 2 projects for IFS Clients in a short span.",
     "Converted a basic application into Highly scalable iOS App with module based architecture.",
     "Supported watchOS features for the application.",
     "Learnt to develop application individually and able to handle client.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "Contus",
    icon: contus,
    iconBg: "#E6DEDD",
    date: "Nov 2016 - Apr 2017",
    points: [
      "Worked in both service projects and Contus product.", 
      "Developed iOS and OS X Applications which are highly productive and have massive reach in App store.",
      "Maintained a increasing slope on learning and development, updated my self to latest technologies like Augmented Reality and Machine learning",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
