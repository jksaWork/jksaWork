"use client";
import React from "react";
import { ServiceSlider } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/constant/variants";
import WorkSilder from "@/components/WorkSlider";
// WorkSilder
function WorkComponent() {
  return (
    <div className="container mx-auto pt-10 h-full w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-x-8 w-full">
        <motion.div
          variants={fadeIn("down", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="md:w-[30vw] flex flex-col mb-5 md:mb-0 text-center md:text-left md:justify-start"
        >
          <h2 className="text-4xl capitalize md:mt-3">
            my <span className="text-accent">Work .</span>{" "}
          </h2>
          <p className="max-w-md mx-auto mt-3 capitalize">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            asperiores beatae ut numquam dolore temporibus eius. Autem ex sequi
            vitae dolorem nesciunt, sit, laudantium cumque harum necessitatibus
            consequuntur voluptas illum.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
        >
          <WorkSilder />
        </motion.div>
      </div>
    </div>
  );
}

export default WorkComponent;
