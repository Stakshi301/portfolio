import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { RiCodeSSlashFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import stakshi from "../assets/stakshi.jpg";
import AboutDrawer from "./AboutDrawer";

const Intro = () => {
  
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // console.log("isDrawerOpen:", isDrawerOpen);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <>
     <div
  className={`introContainer container mx-auto flex flex-col lg:flex-row px-4 sm:px-8 lg:px-10 mt-5 gap-8 ${
    isDrawerOpen ? "hidden md:hidden  sm:hidden lg:flex" : "flex"
  }`}
>
     
      <div className="Name flex flex-col items-center text-center mt-6 lg:mt-32">
  <h1 className="text-3xl sm:text-4xl lg:text-6xl text-blue-200">
    Stakshi Semwal
  </h1>
  <button
    className="aboutMe w-28 bg-blue-400 mt-4 p-2 text-sm sm:text-base rounded-md bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-600 hover:to-blue-300 mx-auto"
    onClick={handleOpenDrawer}
  >
    About Me
  </button>
</div>

<div className="image relative flex justify-center items-center">
  <img
    src={stakshi}
    className="h-36 w-30 sm:h-40 sm:w-20 md:h-60 md:w-40 lg:h-[430px] lg:w-64 rounded-full"
  />
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-full"></div>
</div>


<div
  className={`icons  
    sm: !flex sm:gap-6 
    md:flex md:justify-center 
    ${isDrawerOpen ? "hidden lg:!hidden" : "lg:flex lg:flex-col lg:gap-12 lg:text-right lg:pl-80"}`}
>

          <a href="https://github.com/Stakshi301">
            <AiFillGithub className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
          <a href="https://www.linkedin.com/in/stakshi-semwal-832226270/">
            <AiFillLinkedin className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
          <a href="mailto:semwaleishta6@gmail.com">
            <AiFillMail className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
          <a href="https://leetcode.com/u/eishi/">
            <SiLeetcode className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
          <a href="https://www.naukri.com/code360/profile/Eishta">
            <RiCodeSSlashFill className="h-8 w-8 sm:h-9 sm:w-9 text-blue-200" />
          </a>
        </div>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-5">
        <button className={`knowMore lg:ml-2 w-28 bg-blue-400 p-2 text-sm sm:text-base bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-600 hover:to-blue-300 rounded-lg
          ${isDrawerOpen ? "md:hidden sm:hidden lg:flex" : "flex"}`}>
          Know More
        </button>
      </div>

     
      <AboutDrawer  isOpen={isDrawerOpen} onClose={handleCloseDrawer}   className={`${isDrawerOpen ? "md:mt-20" : ""}`}
      >
        <h3 className="text-center text-teal-500 text-2xl sm:text-3xl lg:text-4xl">
          About Me
        </h3>
        <p className="mt-4 text-gray-500 text-sm sm:text-base text-justify">
          Hello! My name is Stakshi Semwal. I am a passionate web developer. I
          enjoy building interactive, user-friendly, and responsive web
          applications. Technologies and tools that I use to create such
          awesome websites.
        </p>
        <ul className="languages flex flex-wrap justify-center lg:justify-start pt-1 mt-2">
          {[
            "#html",
            "#css",
            "#tailwind",
            "#bootstrap",
            "#javascript",
            "#react.js",
            "#redux",
            "#node.js",
            "#mongoDB",
            "#express.js",
            "#figma",
            "#github",
            "#git",
          ].map((item, index) => (
            <li
              key={index}
              className="m-1 p-1 text-sm border rounded-full border-gray-600"
            >
              {item}
            </li>
          ))}
        </ul>
        <h3 className="text-teal-500 pt-5 text-2xl sm:text-3xl text-center">
          MERN STACK
        </h3>

        <div className="mernIcons pt-5 flex justify-around sm:justify-between w-full">
          <div className="icon1 flex flex-col items-center">
            <DiMongodb className="text-3xl sm:text-4xl text-green-600" />
            <p className="text-green-600">M</p>
          </div>
          <div className="icon2 flex flex-col items-center">
            <SiExpress className="text-3xl sm:text-4xl text-gray-400" />
            <p className="text-gray-400">E</p>
          </div>
          <div className="icon3 flex flex-col items-center">
            <GrReactjs className="text-3xl sm:text-4xl text-blue-300" />
            <p className="text-blue-300">R</p>
          </div>
          <div className="icon4 flex flex-col items-center">
            <FaNodeJs className="text-3xl sm:text-4xl text-green-300" />
            <p className="text-green-300">N</p>
          </div>
        </div>
      </AboutDrawer>
    

    </>
  );
};

export default Intro;
