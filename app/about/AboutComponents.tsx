"use client";
import React, { useState } from "react";
import { aboutData } from "@/constant";
import { aboutDataType } from "@/comon.types";
import { IconType } from "react-icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "@/constant/variants";
function AboutComponents() {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="container mx-auto h-full flex flex-col items-center gap-y-8  justify-center md:justify-start md:flex-row ">
      <div className="md:flex-1">
        <motion.h3
          variants={fadeIn("down", 0.2)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="text-3xl text-center md:text-start"
        >
          <span className="text-accent">Great</span> ideas generate great
          applications
        </motion.h3>
        <motion.p
          variants={fadeIn("down", 0.2)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="max-w-[400px] mx-auto md:mx-0 mb-2 mt-5"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          suscipit excepturi ex laborum dolorum eligendi deleniti perspiciatis
          quasi atque, hic architecto consequuntur! Dolorum magnam voluptatem ut
          id vitae, voluptas labore!
        </motion.p>
        <div className="">
          <motion.div
            variants={fadeIn("down", 0.6)}
            animate="show"
            exit="hidden"
            initial="hidden"
            className="hidden md:flex gap-5 w-[300px] mx-auto md:mx-0"
          >
            <div
              className="realtive flex-1 
               after:w-[1px] after:h-full
               after:bg-white/10 after:absolute 
               after:top-0 after:left-0
               "
            >
              <div className="text-2xl md:text-4xl text-accent font-extrabold mb-1">
                <CountUp end={3} delay={2} /> +
              </div>
              <div
                className="text-sm leading-[1.4]
               tracking-[1px]
               max-w-[100px]"
              >
                Years Of Exprence
              </div>
            </div>
            <div
              className="realtive flex-1 
               after:w-[1px] after:h-full
               after:bg-white/10 after:absolute 
               after:top-0 after:left-0
               "
            >
              <div className="text-2xl md:text-4xl text-accent font-extrabold mb-1">
                <CountUp end={3} delay={2} /> +
              </div>
              <div
                className="text-sm leading-[1.4]
               tracking-[1px]
               max-w-[100px]"
              >
                clients
              </div>
            </div>

            <div
              className="realtive flex-1 
               after:w-[1px] after:h-full
               after:bg-white/10 after:absolute 
               after:top-0 after:left-0
               "
            >
              <div className="text-2xl md:text-4xl text-accent font-extrabold mb-1">
                <CountUp end={19} delay={2} /> +
              </div>
              <div
                className="text-sm leading-[1.4]
               tracking-[1px]
               max-w-[100px]"
              >
                Projects
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          variants={fadeIn("up", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="mx-auto md:mx-0 flex mb-4 gap-x-4 md:gap-x-8 "
        >
          {aboutData.map((el: aboutDataType, itemIndex) => (
            <div
              key={itemIndex + Math.random().toString()}
              onClick={() => console.log(setIndex(itemIndex))}
              className={`
                ${
                  index == itemIndex
                    ? "text-accent after:w-[100%]   after:bg-accent"
                    : ""
                }
                after:transition-all after:duration-[2000ms] ease-linear
                relative xl:text-xl 
                after:absolute
                after:-bottom-1
                after:left-0
                capitalize cursor-pointer after:w-8 after:h-[2px] after:bg-white 
                `}
            >
              {el.title}
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0)}
          animate="show"
          exit="hidden"
          initial="hidden"
          className="py-2 xl:py-6 flex flex-col  items-center md:items-start gap-y-2 md:gap-y-4"
        >
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div>
                <div className="font-light mb-2">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((el: IconType) => {
                    return <div className="text-3xl">{el}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutComponents;
