/*eslint react/jsx-no-comment-textnodes: "off"*/
import Image from "next/image";
import SnakeGame from "../_components/SnakeGame";

export default function Home() {
  return (
    <div className="w-full h-full min-h-0 flex flex-auto flex-row items-center justify-between overflow-hidden">
      {/* <div className="hidden pc:block css-blurry-gradient-blue1"></div>

      <div className="hidden pc:block css-blurry-gradient-green1"></div>
      <div className="hidden pc:block css-blurry-gradient-green-small"></div> */}
      {/* <div className="hidden pc:block css-blurry-gradient-blue2"></div> */}
      {/* for mobile */}
      <div className="pc:hidden css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green pc:hidden"></div>
      <div className="hidden pc:flex basis-1/6 h-full"></div>

      <div className=" px-3 sm:px-5 flex flex-col justify-center pc:basis-1/3 h-full pc:p-0">
        <p className="text-[#e5e9f0] text-lg ">Hi All, I am</p>
        <p className="text-[#e5e9f0] text-[50px] mobile:text-[62px]/[80px] ">
          Aman Singh
        </p>
        <div className="text-emerald-400 sm:text-[#4D5BCE] text-2xl mobile:text-[32px]/[42px] ">
          &gt; Software developer
        </div>{" "}
        <div className="h-[250px] mobile:h-[60px]"></div>
        <div className="hidden pc:flex text-[#607B96] text-[14x]">
          <span>// complete the game to continue</span>
        </div>
        <div className="text-[#607B96] text-[14x]">
          <span> // you can also see it on my Github page</span>
        </div>
        <div className="mt-2">
          <span className="text-indigo-600 text-[14px] font-medium">const</span>
          <span className="text-white text-[14px] font-medium"> </span>
          <span className="text-emerald-400 text-[14px] font-medium">
            githubLink
          </span>
          <span className="text-white text-[14px] font-medium"> = </span>
          <span className="text-rose-400 text-[14px] font-medium">“</span>
          <a
            href="https://github.com/D-Aman-S"
            className="text-rose-400 text-[14px] font-medium underline"
          >
            https://github.com/D-Aman-S
          </a>
          <span className="text-rose-400 text-[14px] font-medium">”</span>
        </div>
      </div>
      <div className=" hidden h-full pc:basis-1/3 pc:flex flex-grow flex-col items-center justify-center z-20">
        <SnakeGame />
      </div>
      <div className="hidden pc:w-[45px] h-full "></div>
    </div>
  );
}
