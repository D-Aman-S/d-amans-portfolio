import { useState } from "react";
import Image from "next/image";
import { SubPagesEnum } from "../_utils/subPageEnums";
import usePageStore from "../_utils/usePageStore";

const SidebarTabForEducation = ({
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

  return (
    <div
      className="flex flex-row w-full mt-3 items-center justify-start"
      onClick={toggleOpen}
    >
      <div
        className={`relative ${
          selectedSubPage == subPage ? " w-3 h-2 " : " h-3 w-2 "
        } ml-3 cursor-pointer`}
      ></div>
      <div
        className={`relative w-4 h-3.5 ${
          selectedSubPage == subPage ? "ml-2" : "ml-3"
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
        className={`
            
         text-labelText text-sm ml-3 cursor-pointer select-none hover:text-white flex items-center justify-between`}
      >
        {name}
        {/* adding a small indicator kind of things beside text */}
        <div
          className={`${
            (isOpen && selectedSubPage === subPage) ||
            selectedSubPage == subPage
              ? "bg-labelText"
              : "bg-transparent"
          } w-1 h-1 rounded-full ml-1`}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default SidebarTabForEducation;
