import { useEffect, useState } from "react";
import hljs from "highlight.js";
// import "highlight.js/styles/github-dark.css";
import Image from "next/image";
import classNames from "classnames";
interface GistSnippetProps {
  id: string;
}

const GistSnippet: React.FC<GistSnippetProps> = ({ id }) => {
  const [gist, setGist] = useState<any>(null);
  const [monthsAgo, setMonthsAgo] = useState<number | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const setValues = async (gist: any) => {
      setGist(gist);
      setMonthsAgo(calculateMonths(gist.created_at));
      if (gist.files)
        setContent(Object.values(gist.files as object)[0].content);
      setDataFetched(true);
      setComment(await fetchComments(gist.comments_url));
    };
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/gists/${id}`);
      const data = await response.json();
      setValues(data);
    };
    fetchData();
  }, [id]);

  const calculateMonths = (date: string) => {
    const now = new Date();
    const gistDate = new Date(date);
    const diff = now.getTime() - gistDate.getTime();
    const days = Math.floor(diff / (1000 * 3600 * 24));
    const months = Math.floor(days / 30);
    return months;
  };

  const fetchComments = async (comments_url: string) => {
    const response = await fetch(comments_url);
    const data = await response.json();
    try {
      return data[0].body;
    } catch {
      console.log(`No comments found on ${comments_url}`);
      return null;
    }
  };

  const showComment = () => {
    const commentElement = document.getElementById(`comment${id}`);
    commentElement?.classList.toggle("hidden");
  };

  return (
    <div
      className={classNames(
        "relative  mb-5 flex flex-col w-full no-scrollbar transition-transform duration-300 h-auto",
        {
          "translate-y-0 opacity-100": dataFetched,
          "translate-y-[-100%] opacity-0": !dataFetched,
        }
      )}
    >
      {/* Loader */}
      {!dataFetched && (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      )}

      {/* Head Info */}
      <div className="flex justify-between my-2 px-3 pb-0.5 m-3 text-sm">
        <div className="flex">
          {/* Avatar */}
          <Image
            width={30}
            height={30}
            src={gist?.owner?.avatar_url}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />

          {/* Username & Gist Date Info */}
          <div className="flex flex-col">
            <a
              id="username"
              href={`https://github.com/${gist?.owner?.login}`}
              target="_blank"
              className="font-bold text-purple-500 text-xs pb-1 cursor-pointer"
            >
              @{gist?.owner?.login}
            </a>
            <p className="text-xs text-gray-500">
              Created {monthsAgo} months ago
            </p>
          </div>
        </div>

        {/* Details and Stars */}
        <div className="flex text-gray-500 text-xs lg:mx-2">
          <div
            className="flex lg:mx-2 cursor-pointer hover:text-white"
            onClick={showComment}
          >
            <Image
              width={30}
              height={30}
              src="/icons/comments-icon.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span>details</span>
          </div>
          <div className="hidden lg:flex cursor-pointer hover:text-white">
            <Image
              width={30}
              height={30}
              src="/icons/star-icon.svg"
              alt=""
              className="w-4 h-4 mx-2"
            />
            <span>stars</span>
          </div>
        </div>
      </div>

      <div className="bg-[#011221] no-scrollbar mx-6 p-2.5 rounded-2xl border border-[#1E2D3D] text-xs overflow-y-scroll overflow-x-scroll max-h-[220px]">
        <pre className="m-0 w-full max-h-[220px] overflow-hidden ">
          <code
            className="whitespace-pre-wrap max-h-[220px] w-max overflow-hidden hljs "
            dangerouslySetInnerHTML={{ __html: content as string }}
          />
        </pre>
      </div>
      <div
        id={`comment${id}`}
        className="flex hidden items-center justify-between text-gray-500 text-xs mt-4 mx-6 pt-2 border-t border-gray-700"
      >
        <p className="w-5/6">{comment || "No comments."}</p>
        <Image
          src="/close-icon.svg"
          alt=""
          className="cursor-pointer"
          onClick={showComment}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default GistSnippet;
