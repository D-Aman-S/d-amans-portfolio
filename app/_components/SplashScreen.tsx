import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowSplash(false);
  //     }, 10000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50 ${
        showSplash ? "block" : "hidden"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div
      // className={`text-center ${
      //   showSplash ? "opacity-0" : "opacity-100"
      // } transition-opacity duration-1000`}
      >
        <video
          src="/codeAnimation.mp4"
          autoPlay
          loop
          muted
          className="mx-auto mb-4 w-48 rounded-lg shadow-lg"
        />
        <p className="text-white text-xl">Resume is Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
