{
  /* Icons */
}
import { FaArrowRight } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
{
  /* Screenshots webs */
}
import listadoPeliculas from "../assets/listado_peliculas.png";
import pokeapi from "../assets/pokeapi.png";
import listatareas from "../assets/listatareas.png";
import cronometro from "../assets/cronometro.png";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import calculadora from "../assets/calculadora.png";
import matt from "../assets/matt.png";
import nicking from "../assets/nicking.png";
import shirley from "../assets/shirley.png";

const ProjectsDEMOs = () => {
  return (
    <div className="flex flex-col items-center space-y-10 px-6 py-5 md:px-36">
      <div className="grid grid-cols-1 gap-8 rounded-lg bg-secondary px-7 py-5 text-gray-200 md:mt-14 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaReact className="text-[1rem] text-blue-500 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              REACT
            </span>
            <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              TAILWIND
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={listadoPeliculas}
              alt="listadoPeliculas"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">
            Listado de películas
          </p>
          <a
            href="https://movie-app-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaReact className="text-[1rem] text-blue-500 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              REACT
            </span>
            <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              TAILWIND
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={pokeapi}
              alt="pokeapi"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">
            Consumo de API PokéApi
          </p>
          <a
            href="https://pokedex-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>

        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <IoLogoCss3 className="text-[1rem] text-blue-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              CSS
            </span>
            <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              JAVASCRIPT
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={calculadora}
              alt="calculadora"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Calculadora</p>
          <a
            href="https://calculadora-js-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <IoLogoCss3 className="text-[1rem] text-blue-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              CSS
            </span>
            <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
            <span className="text-[.4rem] text-white md:text-[15px]">
              JAVASCRIPT
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={listatareas}
              alt="listatareas"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">
            Lista de tareas
          </p>
          <a
            href="https://lista-tareas-js-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <IoLogoCss3 className="text-[1rem] text-blue-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              CSS
            </span>
            <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
            <span className="text-[.4rem] text-white md:text-[15px]">
              JAVASCRIPT
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={cronometro}
              alt="cronometro"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Cronómetro</p>
          <a
            href="https://cronometro-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaReact className="text-[1rem] text-blue-500 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              REACT
            </span>
            <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              TAILWIND
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={template2}
              alt="template2"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Landing Page</p>
          <a
            href="https://template-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <IoLogoCss3 className="text-[1rem] text-blue-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              CSS
            </span>
            <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              JAVASCRIPT
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={matt}
              alt="matt"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Landing Page</p>
          <a
            href="https://mattarmoagaming.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <BsBootstrapFill className="text-[1rem] text-violet-500 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              BOOTSTRAP
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={nicking}
              alt="nicking"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Landing Page</p>
          <a
            href="https://nicking.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <IoLogoCss3 className="text-[1rem] text-blue-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              CSS
            </span>
            <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              JAVASCRIPT
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={shirley}
              alt="shirley"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Landing Page</p>
          <a
            href="https://shirley-nailss.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800">
          <div className="flex w-full items-center gap-1 rounded-xl">
            <FaReact className="text-[1rem] text-blue-500 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              REACT
            </span>
            <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              TAILWIND
            </span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
              src={template1}
              alt="template1"
            />
          </div>
          <p className="text-pretty text-[1rem] text-gray-100">Landing Page</p>
          <a
            href="https://template-nk.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
          >
            DEMO
            <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDEMOs;
