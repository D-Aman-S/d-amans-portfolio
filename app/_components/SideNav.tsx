import React from "react";
import Image from "next/image";
import usePageStore from "../_utils/usePageStore";
import { PagesEnum } from "../_utils/pageEnums";
import SidebarTab from "./SideNavbarTabs";
import { SubPagesEnum } from "../_utils/subPageEnums";
import SidebarTabForEducation from "./SideBarTabEducation";
const SideNav = () => {
  const selectedPage = usePageStore((state) => state.selectedPage);

  return (
    <div className="hidden pc:flex pc:w-[calc(14rem)]  pc:h-full border-r  border-r-borderColor pc:flex-col">
      <div className="w-full h-[calc(2rem)] border-b  border-b-borderColor flex flex-row items-center">
        <div className="relative w-2 h-1.5 ml-2.5  cursor-pointer">
          <Image
            src="/icons/downarrow.svg"
            alt="close icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-white text-sm ml-2">
          {" "}
          {selectedPage === PagesEnum.PROFESSIONAL_INFO && "professional-info"}
          {selectedPage === PagesEnum.PERSONAL_INFO && "personal-info"}
          {selectedPage === PagesEnum.HOBBIES && "hobbies-info "}
        </div>
      </div>
      {/* contents */}
      {selectedPage === PagesEnum.PROFESSIONAL_INFO && (
        <>
          <SidebarTab
            folderIcon="/icons/redfolder.svg"
            initialName="experience"
            subPage={SubPagesEnum.experience}
          />
          <SidebarTab
            folderIcon="/icons/greenfolder.svg"
            initialName="hard-skills"
            subPage={SubPagesEnum.hardSkills}
          />
          <SidebarTab
            folderIcon="/icons/bluefolder.svg"
            initialName="soft-skills"
            subPage={SubPagesEnum.softSkills}
          />
        </>
      )}{" "}
      {selectedPage === PagesEnum.PERSONAL_INFO && (
        <>
          <SidebarTab
            folderIcon="/icons/redfolder.svg"
            initialName="bio"
            subPage={SubPagesEnum.bio}
          />
          <SidebarTab
            folderIcon="/icons/greenfolder.svg"
            initialName="interests"
            subPage={SubPagesEnum.interests}
          />
          <SidebarTab
            folderIcon="/icons/bluefolder.svg"
            initialName="education"
            subPage={SubPagesEnum.education}
          />
          <SidebarTabForEducation
            folderIcon="/icons/educationIcon.svg"
            initialName="high-school"
            subPage={SubPagesEnum.highSchool}
          />
          <SidebarTabForEducation
            folderIcon="/icons/educationIcon.svg"
            initialName="university"
            subPage={SubPagesEnum.university}
          />
        </>
      )}{" "}
      {selectedPage === PagesEnum.HOBBIES && (
        <>
          <SidebarTab
            folderIcon="/icons/redfolder.svg"
            initialName="sports"
            subPage={SubPagesEnum.sports}
          />
          <SidebarTab
            folderIcon="/icons/greenfolder.svg"
            initialName="favorite-games"
            subPage={SubPagesEnum.favoriteGames}
          />
        </>
      )}
      {/* <div className="w-full mt-auto"></div> */}
      {/* COntact us */}
      <div className="mt-4 w-full h-[calc(2rem+2px)] border-t border-b  border-t-borderColor border-b-borderColor flex flex-row items-center">
        <div className="relative w-2 h-1.5 ml-2.5  cursor-pointer">
          <Image
            src="/icons/downarrow.svg"
            alt="close icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-white text-sm ml-2">{"contacts"}</div>
      </div>
      <div className="flex flex-row w-full mt-3 items-center justify-start">
        <div className="relative w-4 h-3.5 ml-3  cursor-pointer">
          <Image
            src="/icons/mail-icon.svg"
            alt="close icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-labelText text-sm ml-2">amans6963@gmail.com</div>
      </div>
      <div className="flex flex-row w-full mt-2 items-center justify-start">
        <div className="relative w-4 h-3.5 ml-3  cursor-pointer">
          <Image
            src="/icons/phone-icon.svg"
            alt="close icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-labelText text-sm ml-2">+9183035XX633</div>
      </div>
    </div>
  );
};

export default SideNav;
