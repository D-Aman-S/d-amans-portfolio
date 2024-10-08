import { useEffect, useState, useRef } from "react";

interface CodeContainerProps {
  text: string;
}

const CodeContainer: React.FC<CodeContainerProps> = ({ text }) => {
  const [lines, setLines] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const updateLines = () => {
    if (textContainerRef.current) {
      const style = window.getComputedStyle(textContainerRef.current);
      const fontSize = parseInt(style.fontSize, 10);
      const lineHeight = parseInt(style.lineHeight, 10);
      const maxHeight = textContainerRef.current.offsetHeight;
      setLines(Math.ceil(maxHeight / lineHeight) + 6);
    }
  };

  useEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
    window.addEventListener("click", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("click", updateLines);
    };
  }, []);

  return (
    <div className="flex max-h-screen min-h-0 min-w-0 items-start font-fira_retina text-labelText text-sm pl-9 pt-4 pb-4 pr-7  overflow-scroll no-scrollbar">
      <div className="lg:flex flex-col hidden">
        {/* Line numbers and asterisks */}
        {Array.from({ length: lines }, (_, i) => i + 1).map((n) => (
          <div key={n} className="grid grid-cols-2 justify-end">
            <span className="col-span-1 mr-3">{n}</span>
            {n === 1 && (
              <div className="col-span-1 flex justify-center">/{`**`}</div>
            )}
            {n > 1 && n < lines && (
              <div className="col-span-1 flex justify-center">*</div>
            )}
            {n === lines && (
              <div className="col-span-1 flex justify-center pl-2">*/</div>
            )}
          </div>
        ))}
      </div>

      {/* Text */}
      <div className=" w-full pl-2 break-words " ref={textContainerRef}>
        <br />
        <div className="py-4" dangerouslySetInnerHTML={{ __html: text }}></div>
        <br />
      </div>
    </div>
  );
};

export default CodeContainer;
