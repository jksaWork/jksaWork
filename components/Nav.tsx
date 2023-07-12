//  links
"use client";
import { links } from "@/constant/index";
import Link from "next/link";
import { NavLink } from "@/comon.types";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();
  return (
    <nav
      className="flex w-full flex-col xl:justify-center fixed 
        h-max  bottom-0 gap-y-4 mt-auto xl:right-[2%] 
        xl:w-16  xl:max-w-md z-50 xl:h-screen"
    >
      <div
        className="w-full flex flex-row xl:flex-col 
            xl:justify-center gap-y-10 px-4
            items-center xl:py-8
            md:px-20 xl:px-0 h-[70px] xl:h-max
            bg-white/10
            backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full
            justify-around"
      >
        {links.map((link: NavLink, index: number) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.path}
              className={path == link.path ? "text-accent" : ""}
              key={index}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
