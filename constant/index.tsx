import { NavLink } from "@/comon.types";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiBadgeCheck,
  HiAdjustments,
  HiChatAlt2,
} from "react-icons/hi";
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
