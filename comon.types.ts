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
export type WorkImage = {
  title: string;
  path: string;
  url?: string;
};
export type SlideType = {
  images: WorkImage[];
};
export type workSlidesTypes = {
  slides: SlideType[];
};
