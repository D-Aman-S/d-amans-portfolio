"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center w-full h-[45px] border border-transparent border-b-borderColor ">
      <nav className=" w-full flex flex-row min-h-[45px]">
        <Link
          className="flex items-center justify-center px-4 basis-1/6 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          href={"/"}
        >
          aman-kumar-singh
        </Link>
        <Link
          className={
            "flex items-center justify-center px-4 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/" ? "  border-b-[#FEA55F] border-b-[3px]" : "")
          }
          href={"/"}
        >
          _hello
        </Link>
        <Link
          className={
            "flex items-center justify-center px-4 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/aboutMe"
              ? "  border-b-[#FEA55F] border-b-[3px]"
              : "")
          }
          href={"/aboutMe"}
        >
          _about-me
        </Link>
        <Link
          className={
            "flex items-center justify-center px-4  border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/projects"
              ? "  border-b-[#FEA55F] border-b-[3px]"
              : "")
          }
          href={"/projects"}
        >
          _projects
        </Link>
        <div className="mx-auto"></div>
        <Link
          className={
            "flex items-center justify-center px-4  border border-transparent border-l-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/contactMe"
              ? "  border-b-[#FEA55F] border-b-[3px]"
              : "")
          }
          href={"/contactMe"}
        >
          _contact-me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
