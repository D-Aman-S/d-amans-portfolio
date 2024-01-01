import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full h-[50px] border border-transparent border-t-borderColor ">
      <nav className=" w-full flex flex-row min-h-[50px]">
        <Link
          className="pointer-events-none px-6 flex items-center justify-center basis-1/8 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          href={"/"}
        >
          Find me in:
        </Link>
        <Link
          className={
            "flex items-center justify-center px-4 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"/"}
        >
          <Image src={"twitter.svg"} alt={""} width={24} height={24} />
        </Link>
        <Link
          className={
            "flex items-center justify-center px-4 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"/aboutMe"}
        >
          <Image src={"facebook.svg"} alt={""} width={24} height={24} />
        </Link>
        <Link
          className={
            "flex items-center justify-center px-4 border border-transparent border-r-borderColor hover:text-white hover:bg-[#0f2031]"
          }
          href={"https://www.linkedin.com/in/d-aman/"}
        >
          <Image src={"linkedin.svg"} alt={""} width={26} height={26} />
        </Link>

        <div className="mx-auto"></div>
        <Link
          className={
            "flex items-center justify-center px-4  border border-transparent border-l-borderColor hover:text-white hover:bg-[#0f2031]"
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
      </nav>
    </footer>
  );
};

export default Footer;
