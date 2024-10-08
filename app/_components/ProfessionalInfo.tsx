import React from "react";
import Image from "next/image";
import AboutMeTab from "./AboutMeTab";
import ScrollBar from "./ScrollBar";
import usePageStore from "../_utils/usePageStore";
import { SubPagesEnum } from "../_utils/subPageEnums";
import CodeContainer from "./CommentedText";
import sectionData from "../_utils/sectionData/data";

const ProfessionalInfo = () => {
  const selectedSubPage = usePageStore((state) => state.selectedSubPage);

  return (
    <div className="flex flex-col w-1/2  h-full border-r  border-r-borderColor">
      <AboutMeTab selectedPage={"professional-info"} />
      <div className="flex flex-row h-full w-full min-h-0 min-w-0  overflow-scroll no-scrollbar">
        {(selectedSubPage === SubPagesEnum.experience && (
          <CodeContainer
            text={
              sectionData.about.sections["professional-info"].info.experience
                .description
            }
          />
        )) ||
          (selectedSubPage === SubPagesEnum.hardSkills &&
            sectionData.about.sections["professional-info"].info["hard-skills"]
              .description) ||
          (selectedSubPage === SubPagesEnum.softSkills &&
            sectionData.about.sections["professional-info"].info["soft-skills"]
              .description)}
        <ScrollBar />
      </div>
    </div>
  );
};

export default ProfessionalInfo;
