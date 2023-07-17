"use client";
import { initialFormType } from "@/comon.types";
import React, { FormEvent, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import { pacifico } from "@/lib/fonts";
export default function ContactFormComponent() {
  const initialForm: initialFormType = {
    name: "",
    email: "",
    subject: "",
    content: "",
  };
  const [Form, setForm] = useState(initialForm);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.promise(
      new Promise(
        (reslove, reject) =>
          fetch("/api/mail", {
            method: "POST",
            body: JSON.stringify(Form),
          })
            .then((res) => {
              //    console.log();
              if (res.status == 200) {
                reslove("as");
              }
            })
            .catch((err) => {
              reject();
              toast.error("Some Thing Went Worng");
            })
        // .finally(() => setSubmitting(false))
      ),

      {
        pending: "Mail Sending ...",
        success: "Mail was Sent Prompt Done 👌",
        error: "Mail Sent Faild Try Again 🤯",
      }
    );
  };

  const changeInput = (name: keyof initialFormType, value: string) => {
    const newForm = { ...Form };
    newForm[name] = value;
    setForm(newForm);
  };
  return (
    <div className="container mx-auto pt-10 h-full w-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[800px]">
        <h2 className={"text-5xl capitalize text-center " + pacifico.className}>
          lets <span className="text-accent">contact .</span>
        </h2>
        <div className="flex flex-col gap-y-3 w-full mt-10">
          <div className="flex gap-x-3 w-full">
            <input
              className="input"
              onChange={(e) => changeInput("name", e.target.value)}
              type="text"
              placeholder="Type name name"
            />
            <input
              className="input"
              onChange={(e) => changeInput("email", e.target.value)}
              type="email"
              placeholder="Type name email"
            />
          </div>
          <input
            className="input"
            type="text"
            onChange={(e) => changeInput("subject", e.target.value)}
            placeholder="subject"
          />
          <textarea
            name="message"
            className="textarea"
            onChange={(e) => changeInput("content", e.target.value)}
            placeholder="Type Your Message"
          ></textarea>
          <button
            type="submit"
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
          </button>
        </div>
      </form>
    </div>
  );
}
