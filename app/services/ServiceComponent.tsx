"use client";
import React from "react";
import { ServiceSlider } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/constant/variants";
import { ServiceIntor } from "@/constant";
// import { pacifico } from "../layout";
import { pacifico } from "@/lib/fonts";

function ServiceComponent() {
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
          <h2 className={pacifico.className + " text-4xl capitalize md:mt-3"}>
            my <span className="text-accent"> services .</span>{" "}
          </h2>
          <p className="max-w-md mx-auto mt-3">{ServiceIntor}</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
        >
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceComponent;
