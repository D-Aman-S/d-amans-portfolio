import React from "react";
import Image from "next/image";
import AboutMeTab from "./AboutMeTab";
import ScrollBar from "./ScrollBar";
import usePageStore from "../_utils/usePageStore";
import { SubPagesEnum } from "../_utils/subPageEnums";

const ProfessionalInfo = () => {
  const selectedSubPage = usePageStore((state) => state.selectedSubPage);

  return (
    <div className="flex flex-col w-1/2  h-full border-r  border-r-borderColor">
      <AboutMeTab selectedPage={"professional-info"} />
      <div className="flex flex-row h-full w-full ">
        {(selectedSubPage === SubPagesEnum.experience && "Experience") ||
          (selectedSubPage === SubPagesEnum.hardSkills && "Hard Skills") ||
          (selectedSubPage === SubPagesEnum.softSkills && "Soft Skills")}
        <ScrollBar />
      </div>
    </div>
  );
};

export default ProfessionalInfo;
