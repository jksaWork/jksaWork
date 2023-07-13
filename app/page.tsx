"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Transition, Home } from "@/components";
export default function Home1() {
  return (
    <div>
      <AnimatePresence mode="wait">
        {/*  */}
        <motion.div key="Home Page" className="h-full">
          <Transition />
        </motion.div>
        <Home />
      </AnimatePresence>
    </div>
  );
}
