import { GoProjectRoadmap } from "react-icons/go";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
import { FaGitSquare } from "react-icons/fa";





const Abilities = () => {
  return (
    <div className="flex flex-col mt-16 mx-auto w-[86%] md:w-full md:p-7">
      <div className="flex items-center gap-4 font-semibold md:mt-20 mb-4">
      <GoProjectRoadmap className="text-white text-2xl "/>
        <h1 className="text-gray-200 text-[1.5rem] md:text-3xl">Mis habilidades</h1>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-center justify-start bg-secondary rounded-lg gap-8 md:gap-10 p-6 text-text mt-2 text-[.8rem]">
        <div className="flex flex-col items-center gap-1 "> 
          <h5 className="text-gray-200 md:text-[1rem]">React</h5>
          <FaReact className="text-[2rem] md:text-[4rem] text-blue-500 " />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Javascript</h5>
          <IoLogoJavascript className="text-[2rem] md:text-[4rem] text-yellow-300" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Postman</h5>
          <SiPostman className="text-[2rem] md:text-[4rem] text-orange-600" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Tailwind</h5>
          <SiTailwindcss className="text-[2rem] md:text-[4rem] text-green-300" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Bootstrap</h5>
          <BsBootstrapFill className="text-[2rem] md:text-[4rem] text-violet-500" />
        </div>
        <div className="flex flex-col items-center gap-1"> 
          <h5 className="text-gray-200 md:text-[1rem]">GIT</h5>
          <FaGitSquare className="text-[2rem] md:text-[4rem] text-orange-500" />
        </div>
        <div className="flex flex-col items-center gap-1"> 
          <h5 className="text-gray-200 md:text-[1rem]">Jquery</h5>
          <DiJqueryLogo className="text-[2rem] md:text-[4rem] text-blue-600" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Css</h5>
          <IoLogoCss3 className="text-[2rem] md:text-[4rem] text-blue-400" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Html</h5>
          <FaHtml5 className="text-[2rem] md:text-[4rem] text-red-600" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-gray-200 md:text-[1rem]">Pronto...</h5>
          <GiOpenBook className="text-[2rem] md:text-[4rem] text-slate-300" />
        </div>
      </div>
    </div>
  );
};

export default Abilities;
