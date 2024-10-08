import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full h-[40px] border border-transparent border-t-borderColor">
      <nav className=" w-full flex flex-row min-h-[40px]">
        <Link
          className="pointer-events-none px-1 sm:px-3 pc:px-3 flex items-center justify-center basis-1/8 border border-transparent pc:border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          href={"/"}
        >
          Find me in:
        </Link>
        <Link
          className={
            "ml-auto pc:ml-0 flex items-center justify-center px-3.5 border border-transparent border-r-borderColor border-l-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"/"}
        >
          <Image src={"twitter.svg"} alt={""} width={18} height={18} />
        </Link>
        {/* <Link
          className={
            "flex items-center justify-center px-3.5 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"/aboutMe"}
        >
          <Image src={"facebook.svg"} alt={""} width={24} height={24} />
        </Link> */}
        <Link
          className={
            "flex items-center justify-center px-3.5 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"https://www.linkedin.com/in/d-aman/"}
        >
          <Image src={"linkedin.svg"} alt={""} width={20} height={20} />
        </Link>

        <div className=" hidden pc:block pc:mx-auto"></div>
        <Link
          className={
            "hidden pc:flex items-center justify-center px-4  pc:border border-transparent border-l-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"https://github.com/D-Aman-S"}
        >
          D-Aman-S{" "}
          <Image
            className="mx-2"
            src={"github.svg"}
            alt={""}
            width={26}
            height={26}
          />
        </Link>
        {/* Showing only icon on mobile */}
        <Link
          className={
            "pc:hidden flex items-center justify-center px-4  pc:border border-transparent border-l-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"https://github.com/D-Aman-S"}
        >
          <Image
            className="mx-2"
            src={"github.svg"}
            alt={""}
            width={26}
            height={26}
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
