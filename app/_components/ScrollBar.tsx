import React from "react";

const ScrollBar = () => {
  return (
    <div className="h-full w-5 border border-transparent border-l-borderColor ml-auto flex flex-col items-center justify-start">
      <div className="h-[4.5px] w-[calc(1rem-2px)] bg-labelText mt-0.5 ml-[1.5px]"></div>
    </div>
  );
};

export default ScrollBar;
