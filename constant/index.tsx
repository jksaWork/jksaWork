import { NavLink, aboutDataType } from "@/comon.types";
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
  TiSocialLinkedin,
  TiSocialFacebookCircular,
  TiMail,
  TiMessages,
} from "react-icons/ti";

import {
  FaCss3,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFigma,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaMailBulk,
  FaReact,
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
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
