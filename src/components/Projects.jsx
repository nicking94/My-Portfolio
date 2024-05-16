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
import ecommerce from "../assets/ecommerce.png";
import StHelen from "../assets/St_Helen.png"
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
        <h1 className="text-gray-200 text-[1.5rem] md:text-3xl mb-4">
          Proyectos Recientes
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 px-7 py-5 bg-secondary rounded-lg">
        <a href="https://dieteticadiamante.netlify.app/">
          <div className="relative mb-2">
          <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/95 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">
                E-commerce con carro de compras. Diseño de Figma a código.
              </p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <SiTailwindcss className="text-green-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                TAILWIND
              </span>
              <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px]">
                JAVASCRIPT
              </span>
              <DiJqueryLogo className="text-blue-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JQUERY
              </span>
            </div>
            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={ecommerce}
              alt="Diamante-Natural"
            />
          </div>{" "}
        </a>
        <a href="https://drgula.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/80 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">
                Landing page para hamburguesería.
              </p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />{" "}
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                CSS
              </span>
              <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px]">
                JAVASCRIPT
              </span>
            </div>

            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={drgula}
              alt="Dr-Gula"
            />
          </div>{" "}
        </a>


        <div className="relative mb-2">
          <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/90 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
            <p className="text-center">Web English Institute.</p>
          </div>
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">
              HTML
            </span>
            <SiTailwindcss className="text-green-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">
              TAILWIND
            </span>
            <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JAVASCRIPT
              </span>
          </div>
          <a href="https://sthelen.netlify.app">
            {" "}
            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={StHelen}
              alt="St-Helen"
            />
          </a>
        </div>

        <div className="relative mb-2">
          <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/90 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
            <p className="text-center">Diseño de figma a código con React.</p>
          </div>
          <div className="flex items-center w-full gap-1 rounded-xl mb-2">
            <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">
              HTML
            </span>
            <FaReact className="text-blue-500 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">
              REACT
            </span>
            <SiTailwindcss className="text-green-300 text-[1rem] md:text-2xl" />
            <span className="text-white text-[.4rem] md:text-[15px] mr-1">
              TAILWIND
            </span>
          </div>
          <a href="https://template-nk.netlify.app/">
            {" "}
            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={template1}
              alt="Template"
            />
          </a>
        </div>
        <a href="https://pokedex-nk.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/90 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">
                Práctica de consumo de API creando una pokedex.
              </p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <FaReact className="text-blue-500 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                REACT
              </span>
              <SiTailwindcss className="text-green-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                TAILWIND
              </span>
            </div>

            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={pokeapi}
              alt="Pokedex"
            />
          </div>{" "}
        </a>
        <a href="https://modocromatico.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/80 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">
                Landing page para negocio de sublimaciones.
              </p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                CSS
              </span>
              <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JAVASCRIPT
              </span>
              <DiJqueryLogo className="text-blue-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JQUERY
              </span>
            </div>{" "}
            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={modocv2}
              alt="Modo-Cromatico"
            />
          </div>
        </a>
        <a href="https://nicking.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/80 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">Landing page artista musical.</p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                CSS
              </span>
              <BsBootstrapFill className="text-violet-500 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                BOOTSTRAP
              </span>
            </div>{" "}
            <img
              className="w-full hover:scale-110 duration-300 border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={nicking}
              alt="Nicking"
            />
          </div>{" "}
        </a>
        <a href="https://shirley-nailss.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/90 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">
                Landing page para local de realización de uñas.
              </p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                CSS
              </span>
              <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JAVASCRIPT
              </span>
            </div>{" "}
            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={shirley}
              alt="Shirley-Nailss"
            />
          </div>
        </a>
        <a href="https://calculadora-js-nk.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/95 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">Calculadora.</p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                CSS
              </span>
              <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JAVASCRIPT
              </span>
            </div>{" "}
            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={calculadora}
              alt="Calculadora-js"
            />
          </div>{" "}
        </a>
        <a href="https://mattarmoagaming.netlify.app/">
          {" "}
          <div className="relative mb-2">
            <div className="absolute z-10 w-full h-12 flex justify-center items-center text-center bg-tertiary/95 text-white rounded-xl px-3 py-[2px] font-medium top-36 text-pretty text-[15px]">
              <p className="text-center">Landing page para Streamer.</p>
            </div>
            <div className="flex items-center w-full gap-1 rounded-xl mb-2">
              <FaHtml5 className="text-red-600 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                HTML
              </span>
              <IoLogoCss3 className="text-blue-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                CSS
              </span>
              <IoLogoJavascript className="text-yellow-300 text-[1rem] md:text-2xl" />
              <span className="text-white text-[.4rem] md:text-[15px] mr-1">
                JAVASCRIPT
              </span>
            </div>

            <img
              className="w-full hover:scale-110 duration-300 rounded-xl border-2 border-tertiary h-40 shadow-md shadow-tertiary"
              src={matt}
              alt="Matt-Armoa"
            />
          </div>{" "}
        </a>
        
      </div>
    </section>
  );
};

export default Projects;
