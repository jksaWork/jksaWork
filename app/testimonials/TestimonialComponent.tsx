"use client";
import React from "react";
import { TestimonialSlider } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/constant/variants";
import { pacifico } from "@/lib/fonts";

function TestimonialComponent() {
  return (
    <div className="container mx-auto pt-10 h-full w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-col gap-y-4 gap-x-8 w-full">
        <motion.div
          variants={fadeIn("down", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="flex font-[500] flex-col mb-5 md:mb-0 text-center md:text-left md:justify-start"
        >
          <h2
            className={
              pacifico.className + " text-4xl capitalize md:mt-3 text-center"
            }
          >
            what <span className="text-accent">pepole say ?</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialComponent;
