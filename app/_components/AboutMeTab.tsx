import React from "react";
import Image from "next/image";
const AboutMeTab = ({ selectedPage }: { selectedPage: string }) => {
  return (
    <div className="w-full h-[calc(2rem+2px)] border-b  border-b-borderColor ">
      {/*whatever the state of selected page, i will display it here in text*/}
      <div className="w-fit h-full border-r  border-r-borderColor text-labelText text-sm flex items-center px-3">
        {selectedPage}
        {/* add a close icon here */}
        <div className="relative w-5 h-5 ml-4  cursor-pointer">
          <Image
            src="/close-icon.svg"
            alt="close icon"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeTab;
