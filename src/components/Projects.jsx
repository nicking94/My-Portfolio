import React from "react";
import { PiCode } from "react-icons/pi";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
{
  /* Screenshots webs */
}
import calculadora from "../assets/calculadora.png";
import drgula from "../assets/drgula.png";
import matt from "../assets/matt.png";
import modocv2 from "../assets/modocv2.png";
import nicking from "../assets/nicking.png";
import pokeapi from "../assets/pokeapi.png";
import shirley from "../assets/shirley.png";
import template1 from "../assets/template1.png";

const Projects = () => {
  return (
    <section id="proyectos" className="px-7">
      <div className="flex mt-14 md:mt-28 gap-4 font-semibold">
        <PiCode className="text-text text-3xl" />
        <h1 className="text-gray-200 text-[1.5rem] md:text-3xl mb-4">Proyectos Recientes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 px-7 py-5 bg-secondary rounded-lg">
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />{" "}
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">CSS</span>
            <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px]">JAVASCRIPT</span>
          </div>
          <a href="https://drgula.netlify.app/">
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={drgula} alt="proyecto-1" />
          </a>
        </div>

        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <FaReact className="text-blue-500 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">REACT</span>
            <SiTailwindcss className="text-green-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">TAILWIND</span>
          </div>
          <a href="https://template-nk.netlify.app/">
            {" "}
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={template1} alt="proyecto-2" />
          </a>
        </div>
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">CSS</span>
            <BsBootstrapFill className="text-violet-500 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">BOOTSTRAP</span>
          </div>
          <a href="https://nicking.netlify.app/">
            {" "}
            <img className="hover:scale-110 duration-300 border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={nicking} alt="proyecto-3" />
          </a>
        </div>
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">CSS</span>
            <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">JAVASCRIPT</span>
          </div>
          <a href="https://shirley-nailss.netlify.app/">
            {" "}
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={shirley} alt="proyecto-4" />
          </a>
        </div>
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">CSS</span>
            <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">JAVASCRIPT</span>
          </div>
          <a href="https://calculadora-js-nk.netlify.app/">
            {" "}
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={calculadora} alt="proyecto-5" />
          </a>
        </div>
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">CSS</span>
            <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">JAVASCRIPT</span>
          </div>
          <a href="https://mattarmoagaming.netlify.app/">
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={matt} alt="proyecto-6" />
          </a>
        </div>
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">CSS</span>
            <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">JAVASCRIPT</span>
            <DiJqueryLogo className="text-blue-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">JQUERY</span>
          </div>
          <a href="https://modocromatico.netlify.app/">
            {" "}
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={modocv2} alt="proyecto-7" />
          </a>
        </div>
        <div className="mb-2">
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">HTML</span>
            <FaReact className="text-blue-500 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">REACT</span>
            <SiTailwindcss className="text-green-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">TAILWIND</span>
          </div>
          <a href="https://pokedex-nk.netlify.app/">
            <img className="hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary" src={pokeapi} alt="proyecto-8" />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;
