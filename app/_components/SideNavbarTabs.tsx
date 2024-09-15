import { use, useState } from "react";
import Image from "next/image";
import { SubPagesEnum } from "../_utils/subPageEnums";
import usePageStore from "../_utils/usePageStore";

const SidebarTab = ({
  folderIcon,
  initialName,
  subPage,
}: {
  folderIcon: string;
  initialName: string;
  subPage: SubPagesEnum;
}) => {
  const [name, setName] = useState(initialName);
  const setSelectedSubPage = usePageStore((state) => state.setSelectedSubPage);
  const selectedSubPage = usePageStore((state) => state.selectedSubPage);
  const [isOpen, setIsOpen] = useState(selectedSubPage == subPage);

  const toggleOpen = () => {
    if (selectedSubPage !== subPage) {
      setIsOpen(true);
    }
    setSelectedSubPage(subPage);
  };

  const checkEducation = () => {
    if (subPage === SubPagesEnum.education) {
      if (
        selectedSubPage == SubPagesEnum.highSchool ||
        selectedSubPage == SubPagesEnum.university
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="flex flex-row w-full mt-3 items-center justify-start"
      onClick={toggleOpen}
    >
      <div
        className={`relative ${
          selectedSubPage == subPage || checkEducation()
            ? " w-3 h-2 "
            : " h-3 w-2 "
        } ml-3 cursor-pointer`}
      >
        <Image
          src={
            selectedSubPage == subPage || checkEducation()
              ? "/icons/closefilearrow.svg"
              : "/icons/openfilearrow.svg"
          }
          alt="toggle icon"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={`relative w-4 h-3.5 ${
          selectedSubPage == subPage || checkEducation() ? "ml-2" : "ml-3"
        } cursor-pointer`}
      >
        <Image
          src={folderIcon}
          alt="folder icon"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={`${
          (isOpen && selectedSubPage === subPage) || checkEducation()
            ? "text-white"
            : "text-labelText"
        }  text-sm ml-3 cursor-pointer select-none hover:text-white`}
      >
        {name}
      </div>
    </div>
  );
};

export default SidebarTab;
