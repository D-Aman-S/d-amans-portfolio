import Image from "next/image";
import SnakeGame from "../_components/SnakeGame";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between">
      <div className="basis-1/6 h-full"></div>
      <div className="flex flex-col justify-center basis-1/3 h-full">
        <p className="text-[#e5e9f0] text-lg ">Hi All, I am</p>
        <p className="text-[#e5e9f0] text-[62px]/[80px] ">Aman Singh</p>
        <div className="text-[#4D5BCE] text-[32px]/[42px] ">
          &gt; Software developer
        </div>{" "}
        <div className="h-[60px]"></div>
        <div className="text-[#607B96] text-[14x]">
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
      <div className="basis-1/3 h-full  flex flex-grow flex-col items-center justify-center">
        <SnakeGame />
      </div>
      <div className="w-[45px] h-full "></div>
    </div>
  );
}
