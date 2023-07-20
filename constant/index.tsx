import {
  ClientsSayType,
  NavLink,
  aboutDataType,
  workSlidesTypes,
} from "@/comon.types";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiBadgeCheck,
  HiAdjustments,
  HiChatAlt2,
} from "react-icons/hi";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import {
  DiMysql,
  DiLaravel,
  DiNodejsSmall,
  DiNginx,
  DiMongodb,
  DiRedis,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  FaCss3,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaMailBulk,
  FaReact,
  FaVuejs,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

export const intorDec = `
My name is mohammed Altigani osamn I Am a Proficient Web Developer With more Than 3+ Years of Experience. I Have Expertise in Bulid Modren Web Design , 
I am an expert in creating web-based systems, programming , interfaces for applications and developing Responsive web pages
 (Design)
`;

export const SkillIntorDesc = `
I Have Expertise in Development Like Routing, Authentication,Send Notfication , 
Sessions and Caching, Buliding API interfaces REST Full API  , Graphql , Websockit    ,  Web App Development Through Laravel Framework . Web Developer With Expertise in Html/css, Javascript, Vue Js, Reactjs , Nextjs, and Mysql,Redis,MongoDB I Am Capable of Building Responsive Web and App Designs to Improve Customer Experience`;

export const links: NavLink[] = [
  { name: "home", path: "/", icon: HiHome },
  { name: "about", path: "/about", icon: HiUser },
  { name: "services", path: "/services", icon: HiBriefcase },
  { name: "work", path: "/work", icon: HiAdjustments },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: HiBadgeCheck,
  },
  {
    name: "contact",
    path: "/contact",
    icon: HiChatAlt2,
  },
];
export const SocilaLinks: NavLink[] = [
  {
    path: "https://github.com/jksaWork",
    name: "Git Hub Account",
    icon: FaGithub,
  },
  {
    path: "mailto: jksa.work.1@gmail.com",
    name: "email",
    icon: FaMailBulk,
  },

  {
    path: "https://www.linkedin.com/in/mohammed-altigani-091766221",
    name: "Linked In Account",
    icon: FaLinkedin,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100015610453999",
    name: "Face In Account",
    icon: FaFacebookSquare,
  },
  {
    path: "https://api.whatsapp.com/send/?phone=%2B249915477450&text&type=phone_number&app_absent=0",
    name: "whats app",
    icon: FaWhatsapp,
  },
];

export const aboutData: aboutDataType[] = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaVuejs />,
          <SiNextdotjs />,
          <SiFramer />,
          <BsFillBootstrapFill />,
        ],
      },
      {
        title: "Back-End Development",
        icons: [
          <DiMysql />,
          <DiLaravel />,
          <DiNodejsSmall />,
          <DiNginx />,
          <DiMongodb />,
          <DiRedis />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Laravel Trainer - Msc Company",
        stage: "2021/10/1 - 2022/1/1",
      },
      {
        title: "Laravel Devloper - Msc Company",
        stage: "2022/1/1 - 2023/1/1",
      },
      {
        title: "Freelacer",
        stage: "2023 - now",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Infomation System Bachelor's degree - OUI Omdurman Islamic University",
        stage: "2023",
      },
    ],
  },
];
export const ServiceIntor = `By utilizing my skills in the right way, I can provide you with many smart solutions that in turn help in the process of achieving satisfaction by the developed software.`;
import { FiActivity, FiAirplay, FiAlertTriangle } from "react-icons/fi";
export const serviceData = [
  {
    icon: <FiActivity />,
    title: "Building",
    description:
      "The ability to know the client's requirements and start achieving the goals ",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Testing",
    description:
      "Testing and writing test codes (unit - feture) that help achieve project goals ",
  },
  {
    icon: <FiAirplay />,
    title: "Deploying",
    description:
      "Assisting clients in the process of uploading project files to the server",
  },
];
export const WorkIntro = `I have many projects with different technologies used in developing websites  static and Dynamic Websites Pure  Projects , vuejs , reactjs , nextjs,Laravel/livewire Laravel/vuejs  , MERN and Other Technology  `;

export const workSlides: workSlidesTypes = {
  slides: [
    {
      images: [
        {
          title: "Front End Mentor",
          path: "/huddel.png",
          url: "https://jksa-frontendmintor.netlify.app/",
        },
        {
          title: "Tkween Clone",
          path: "/tkween.png",
          url: "https://tkween-clone.netlify.app",
        },

        {
          title: "9th Company",
          path: "/solution.png",
          url: "http://solution.pharmaly.themsc.net",
        },
        {
          title: "Hock Bank",
          path: "/modren.png",
          url: "https://jksa-moden-ui.onrender.com",
        },
      ],
    },
    {
      images: [
        {
          title: "Ai - Prompts",
          path: "/prompts.png",
          url: "https://next-js-ai-powered-prompts.vercel.app",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          url: "https://next-js-ai-powered-prompts.vercel.app",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "https://next-js-ai-powered-prompts.vercel.app",
        },
        {
          title: "title",
          path: "/thumb3.jpg",

          url: "https://next-js-ai-powered-prompts.vercel.app",
        },
      ],
    },
  ],
};

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];
export const Clients: ClientsSayType[] = [
  {
    person: "Wefage-Press",
    image: "/thumb1.jpg",
    postion: "Client",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odit nesciunt minima accusantium aperiam. Rerum repudiandae aperiam quo, quia at voluptatum incidunt officia dicta maiores, id sunt distinctio, voluptatibus hic?",
  },
  {
    person: "Future Company",
    image: "/thumb1.jpg",
    postion: "LTD Company",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odit nesciunt minima accusantium aperiam. Rerum repudiandae aperiam quo, quia at voluptatum incidunt officia dicta maiores, id sunt distinctio, voluptatibus hic?",
  },
  {
    person: "MSC",
    image: "/thumb1.jpg",
    postion: "Tech -Componay",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt odit nesciunt minima accusantium aperiam. Rerum repudiandae aperiam quo, quia at voluptatum incidunt officia dicta maiores, id sunt distinctio, voluptatibus hic?",
  },
];
