"use client";
//  data

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "@/components/Transition";
import { Avatar, Circles } from "@/components";
import { aboutData } from "@/constant";
import { aboutDataType } from "@/comon.types";
import { useState } from "react";
import ServiceComponent from "./ServiceComponent";
import { fadeIn } from "@/constant/variants";
import { Bulb } from "@/components";
const About = () => {
  const [index, setIndex] = useState<number>(1);
  return (
    <div className="bg-primary/60  h-screen">
      <Circles />
      <AnimatePresence mode="wait">
        {/*  */}
        <motion.div key="About Page">
          <Transition />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 1)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="bottom-0  left-[-10%] max-w-[450px] absolute hidden md:block "
        >
          <Bulb />
        </motion.div>
        <ServiceComponent />
      </AnimatePresence>
    </div>
  );
};

export default About;
