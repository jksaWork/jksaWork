import Socials from "./Socials";
import Link from "next/link";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center  md:flex-row md:justify-between gap-y-6 py-8">
          <Link href="/">
            <h2 className="text-xl md:text-4xl ">
              {" "}
              Mohammed <span className="text-accent">Altigani</span>
            </h2>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
