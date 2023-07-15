import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="group
        relative
        p-3
        max-w-[150px]
        max-h-[150px]
        flex items-center justify-center
        bg-no-repaet bg-cover
        bg-circleStar
        bg-center"
      >
        <Image
          alt="rounded Image"
          width={141}
          height={148}
          src="/rounded-text.png"
          className="w-full h-full max-w-[141px] max-h-[148px]
            animate-spin-slow"
        />
        <HiArrowRight className="absolute  text-4xl group-hover:translate-x-2 duration-200 transition-all" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
