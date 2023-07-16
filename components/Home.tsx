"use client";
import { fadeIn } from "@/constant/variants";
import { motion } from "framer-motion";
import { Avatar, ProjectsBtn, ParticlesContainer } from "@/components";
import { intorDec } from "@/constant";
function Home() {
  return (
    <div className="bg-primary/60 h-full">
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div
          className="container mx-auto flex flex-col
           justify-center
           text-center md:text-left
           md:pt-[40px]
           h-screen
           "
        >
          <motion.h1
            variants={fadeIn("down", 0)}
            animate="show"
            exit="hidden"
            initial="hidden"
            className="md:text-5xl __className_28ff18 font-pacifico  text-3xl capitalize"
          >
            transforming ideas <br />
            into <span className="text-accent">Digital realtie</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.1)}
            animate="show"
            exit="hidden"
            initial="hidden"
            className="max-w-sm mt-3 capitalize xl:max-w-sm mx-auto xl:mx-0 mb-6 xl:mb-10"
          >
            {intorDec}
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.2)}
            animate="show"
            exit="hidden"
            initial="hidden"
            className="flex justify-center  max-w-sm xl:max-w-sm "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Avatar */}
      <div className="w-[1000px]  hidden md:block   h-screen absolute top-0 right-0">
        <ParticlesContainer />
      </div>
      <div className="w-[1200px] hidden md:block h-full absolute right-0 bottom-0 ">
        <div
          className="bg-name bg-explosion xl:bg-cover xl-bg-right 
        w-full h-full z-0
        xl:bg-no-repeat
        mix-blend-color-dodge
        translate-z-0
        "
        ></div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          animate="show"
          exit="hidden"
          initial="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full 
          absolute -bottom-32  lg-bottom-0 lg:right-[3%]
          h-full max-h-[678px] max-w-[737px]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
