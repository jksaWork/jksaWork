import { SocilaLinks } from "@/constant";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
      {SocilaLinks.map((el) => {
        const Icon = el.icon;
        return (
          <Link href={el.path} key={el.name + Math.random().toString()}>
            <Icon className="hover:text-accent  text-2xl transition-all duration-200" />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
