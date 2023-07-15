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
import TestimonialComponent from "./TestimonialComponent";
import { fadeIn } from "@/constant/variants";
const About = () => {
  const [index, setIndex] = useState<number>(1);
  return (
    <div className="bg-primary/60  h-screen">
      <AnimatePresence mode="wait">
        {/*  */}
        <motion.div key="About Page">
          <Transition />
        </motion.div>
        <TestimonialComponent />
        <Circles />
      </AnimatePresence>
    </div>
  );
};

export default About;
