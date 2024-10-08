"use client";
import React from "react";
import Image from "next/image";

import SideNav from "@/app/_components/SideNav";
import usePageStore from "@/app/_utils/usePageStore";
import { PagesEnum } from "@/app/_utils/pageEnums";
import ProfessionalInfo from "@/app/_components/ProfessionalInfo";
import PersonalInfo from "@/app/_components/PersonalInfo";
import HobbiesInfo from "@/app/_components/HobbiesInfo";
import AboutPageToggler from "@/app/_components/AboutPageToggler";
import CodeSnippetShowCase from "@/app/_components/CodeSnippetShowCase";

const AboutMe = () => {
  const selectedPage = usePageStore((state) => state.selectedPage);

  return (
    <div className="w-full h-full min-h-0 flex flex-row items-center justify-between">
      <div className="hidden pc:flex pc:w-[calc(18rem+1px)] pc:h-full">
        <AboutPageToggler />
        <SideNav />
      </div>
      <div className="flex flex-row h-full w-full">
        {selectedPage === PagesEnum.PROFESSIONAL_INFO && <ProfessionalInfo />}
        {selectedPage === PagesEnum.PERSONAL_INFO && <PersonalInfo />}
        {selectedPage === PagesEnum.HOBBIES && <HobbiesInfo />}
        <CodeSnippetShowCase />
      </div>
    </div>
  );
};

export default AboutMe;
