import React from "react";
import Image from "next/image";

const ProfessionalInfo = () => {
  return (
    <div className="flex flex-col w-1/2  h-full border border-transparent border-r-borderColor">
      <div className="w-full h-[calc(2rem+2px)] border border-transparent border-b-borderColor ">
        {/*whatever the state of selected page, i will display it here in text*/}
        <div className="w-fit h-full border border-transparent border-r-borderColor text-labelText text-sm flex items-center px-3">
          {"professional-info"}
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
    </div>
  );
};

export default ProfessionalInfo;
