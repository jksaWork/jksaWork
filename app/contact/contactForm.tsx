import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
function contactForm() {
  return (
    <div className="container mx-auto pt-10 h-full w-full flex items-center justify-center">
      <div className="w-[800px]">
        <h2 className="text-5xl capitalize text-center">
          let <span className="text-accent">contact .</span>
        </h2>
        <div className="flex flex-col gap-y-3 w-full mt-10">
          <div className="flex gap-x-3 w-full">
            <input className="input" type="text" placeholder="Type name name" />
            <input
              className="input"
              type="email"
              placeholder="Type name email"
            />
          </div>
          <input className="input" type="text" placeholder="subject" />
          <textarea
            name="message"
            className="textarea"
            placeholder="Type Your Message"
          ></textarea>
          <div
            className="relative btn border border-white/60 max-w-[150px] px-8 
          transition-all group 
          hover:border-accent rounded-full flex items-center overflow-hidden justify-center cursor-pointer
          "
          >
            <div className="absolute translate-y-[0px] group-hover:translate-y-[-100px]  transition-all group-hover:bg-red duration-500">
              Let Contanct
            </div>
            <div className="absolute translate-y-[100px] group-hover:translate-y-[0]  transition-all group-hover:bg-red duration-500">
              <MdKeyboardArrowRight size="40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactForm;
