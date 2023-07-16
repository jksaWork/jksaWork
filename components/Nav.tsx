//  links
"use client";
import { links } from "@/constant/index";
import Link from "next/link";
import { NavLink } from "@/comon.types";
import { usePathname } from "next/navigation";
import { pacifico } from "@/lib/fonts";

const Nav = () => {
  const path = usePathname();
  return (
    <nav
      className="flex w-full  max-w-[100vw] flex-col xl:justify-center fixed 
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
            justify-around
            
            "
      >
        {links.map((link: NavLink, index: number) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.path}
              className={`${path == link.path ? "text-accent" : ""}
              
               relative flex group hover:text-accent transition-all  duration-300
              `}
              key={index}
            >
              <Icon />
              <div className="flex flex-col md:flex-row">
                <div
                  className="bg-white text-[15px]
                 text-primary py-1 px-4 absolute hidden
                  group-hover:inline-flex 
                  md:right-[70px]
                  md:top-[50%]
                  top-[-60px]
                  right-[15px]
                  md:translate-y-[-50%]
                  translate-x-[50%]
                  font-semibold
                  rounded-[10px]
                  "
                >
                  {link.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
