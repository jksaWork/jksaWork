"use client";
import React from "react";
import { ServiceSlider } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/constant/variants";
import WorkSilder from "@/components/WorkSlider";
import { WorkIntro } from "@/constant";
import { pacifico } from "@/lib/fonts";
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
          className={
            " md:w-[30vw]  max-sm:line-clamp-3 flex flex-col mb-5 md:mb-0 text-center md:text-left md:justify-start"
          }
        >
          <h2 className={pacifico.className + " text-4xl capitalize md:mt-3"}>
            my <span className="text-accent">Work .</span>{" "}
          </h2>
          <p className="max-w-md mx-auto mt-3 capitalize">{WorkIntro}</p>
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
