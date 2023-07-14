import { IconType } from "react-icons/lib";

export type NavLink = {
  name: string;
  path: string;
  icon: IconType;
};

export type aboutDataType = {
  title: string;
  info: any[];
  icons?: any[] | { title?: string; stage?: string }[];
};
