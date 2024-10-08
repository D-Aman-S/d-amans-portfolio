import React from "react";
import ScrollBar from "./ScrollBar";
import GistSnippet from "./GistSnippet";

const CodeSnippetShowCase = () => {
  return (
    <div className="flex flex-col w-1/2  h-full justify-between ">
      <div className="w-full h-[calc(2rem+2px)] border-b  border-b-borderColor z-[100px]"></div>
      <div className="flex flex-row min-h-0 w-full h-full">
        <div className="w-full flex flex-col overflow-hidden pb-4">
          <h3 className="text-white lg:text-labelText mb-4 text-sm px-6 pt-4 h-8 ">{`// Code snippet showcase:`}</h3>
          <div className="flex flex-col overflow-scroll no-scrollbar h-full ">
            <GistSnippet id={"22793a41c7d208ccc3c219af98807a63"} />
            <GistSnippet id={"5f4afc709943fd0e1c56de75820eb731"} />
            <GistSnippet id={"0c7f5abbf887de131d4a1444482b888c"} />
          </div>
        </div>

        <ScrollBar />
      </div>
    </div>
  );
};

export default CodeSnippetShowCase;
