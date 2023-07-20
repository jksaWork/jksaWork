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
  url: string;
};
export type SlideType = {
  images: WorkImage[];
};
export type workSlidesTypes = {
  slides: SlideType[];
};

export type ClientsSayType = {
  person: string;
  image: string;
  postion: string;
  content: string;
};

export type initialFormType = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export type EmailMessageType = {
  name: string;
  email: string;
  subject: string;
  content: string;
};
