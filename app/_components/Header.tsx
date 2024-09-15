"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center w-full h-[45px] border-b  border-b-borderColor ">
      <nav className=" w-full flex flex-row min-h-[45px]">
        <Link
          className="flex items-center justify-start px-6 pc:w-72 pc:border-r  border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          href={"/"}
        >
          aman-kumar-singh
        </Link>
        <Link
          className={
            "hidden pc:flex items-center justify-center px-4 border-r  border-r-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/"
              ? "  border-b-[#FEA55F] border-b-[2px] text-white"
              : "")
          }
          href={"/"}
        >
          _hello
        </Link>
        <Link
          className={
            "hidden pc:flex items-center justify-center px-4 border-r  border-r-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/aboutMe"
              ? "  border-b-[#FEA55F] border-b-[2px] text-white"
              : "")
          }
          href={"/aboutMe"}
        >
          _about-me
        </Link>
        <Link
          className={
            "hidden pc:flex items-center justify-center px-4  border-r  border-r-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/projects"
              ? "  border-b-[#FEA55F] border-b-[2px] text-white"
              : "")
          }
          href={"/projects"}
        >
          _projects
        </Link>
        <div className="mx-auto"></div>
        <Link
          className={
            "hidden pc:flex items-center justify-center px-4  border-l  border-l-borderColor hover:text-white hover:bg-[#0f2031]" +
            (pathname === "/contactMe"
              ? "  border-b-[#FEA55F] border-b-[2px] text-white"
              : "")
          }
          href={"/contactMe"}
        >
          _contact-me
        </Link>
        <div className="pc:hidden  flex items-center justify-center px-4 hover:text-white hover:bg-[#0f2031]">
          <Image src={"ham.svg"} alt={""} width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
