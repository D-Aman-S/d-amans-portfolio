"use client";
import ContactForm from "@/app/_components/ContactForm";
import React from "react";

const ContactMe = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between">
      <div className="hidden pc:flex basis-1/6 h-full "></div>
      <div className="flex  justify-center w-full pc:basis-2/5 h-full  ">
        <ContactForm name={""} email={""} message={""} />
      </div>
      <div className="hidden pc:flex flex-1 h-full "></div>
    </div>
  );
};

export default ContactMe;
