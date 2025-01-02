import { useNavigate } from "react-router-dom";

{
  /* Icons */
}
import { FaArrowRight } from "react-icons/fa";
import { PiCode } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

{
  /* Screenshots webs */
}
import ecommerce from "../assets/ecommerce.png";
import drgula from "../assets/drgula.png";
import StHelen from "../assets/St_Helen.png";
import calculadoraDeGastos from "../assets/calculadora_de_gastos.png";
import componentsLibrary from "../assets/components_library.png";
import grhousing from "../assets/grhousing_web.png";

const Projects = () => {
  const navigate = useNavigate();

  const handleRedirect = (page) => {
    navigate(page);
  };
  return (
    <section id="proyectos" className="mt-10 px-7">
      <div className="flex gap-4 font-semibold md:mt-28">
        <PiCode className="mt-10 text-3xl text-text" />
        <h1 className="mb-4 mt-10 text-[1.5rem] text-gray-200 md:text-3xl">
          Proyectos Destacados
        </h1>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-8 rounded-lg bg-secondary px-7 py-5 md:grid-cols-2">
        <a
          href="https://componentslibrary-nk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mb-2">
            <div className="absolute top-36 z-10 flex h-12 w-full items-center justify-center text-pretty rounded-xl bg-tertiary/95 px-3 py-[2px] text-center text-[15px] font-medium text-white">
              <p className="text-center">Librería de componentes</p>
            </div>
            <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
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
                src={componentsLibrary}
                alt="components Library"
              />
            </div>
          </div>
        </a>
        <a
          href="https://dieteticadiamante.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mb-2">
            <div className="absolute top-36 z-10 flex h-12 w-full items-center justify-center text-pretty rounded-xl bg-tertiary/95 px-3 py-[2px] text-center text-[15px] font-medium text-white">
              <p className="text-center">
                E-commerce | Diseño de Figma a código.
              </p>
            </div>
            <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
              <FaHtml5 className="text-[1rem] text-red-600 md:md:text-2xl" />
              <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                HTML
              </span>
              <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
              <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                TAILWIND
              </span>
              <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
              <span className="text-[.4rem] text-white md:text-[15px]">
                JAVASCRIPT
              </span>
              <DiJqueryLogo className="text-[1rem] text-blue-600 md:text-2xl" />
              <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                JQUERY
              </span>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
                src={ecommerce}
                alt="Diamante-Natural"
              />
            </div>
          </div>
        </a>
        <div className="relative mb-2">
          <div className="absolute top-36 z-10 flex h-12 w-full items-center justify-center text-pretty rounded-xl bg-tertiary/90 px-3 py-[2px] text-center text-[15px] font-medium text-white">
            <p className="text-center">Web Institucional + Campus</p>
          </div>
          <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
            <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              HTML
            </span>
            <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              TAILWIND
            </span>
            <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
            <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
              JAVASCRIPT
            </span>
          </div>
          <a
            href="https://sthelen.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
                src={StHelen}
                alt="St-Helen"
              />
            </div>
          </a>
        </div>
        <a
          href="https://drgula.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mb-2">
            <div className="absolute top-36 z-10 flex h-12 w-full items-center justify-center text-pretty rounded-xl bg-tertiary/80 px-3 py-[2px] text-center text-[15px] font-medium text-white">
              <p className="text-center">Landing page</p>
            </div>
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
                src={drgula}
                alt="Dr-Gula"
              />
            </div>
          </div>
        </a>

        <a
          href="https://calculadora-gastos-nk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mb-2">
            <div className="absolute top-36 z-10 flex h-12 w-full items-center justify-center text-pretty rounded-xl bg-tertiary/95 px-3 py-[2px] text-center text-[15px] font-medium text-white">
              <p className="text-center">Calculadora de gastos</p>
            </div>
            <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
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
                src={calculadoraDeGastos}
                alt="Matt-Armoa"
              />
            </div>
          </div>
        </a>

        <a
          href="https://grhousing-demo-nk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mb-2">
            <div className="absolute top-36 z-10 flex h-12 w-full items-center justify-center text-pretty rounded-xl bg-tertiary/80 px-3 py-[2px] text-center text-[15px] font-medium text-white">
              <p className="text-center">Landing page</p>
            </div>
            <div className="mb-2 flex w-full items-center gap-1 rounded-xl">
              <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
              <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                HTML
              </span>

              <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
              <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                TAILWIND
              </span>
              <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
              <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                JAVASCRIPT
              </span>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                className="h-40 w-full shadow-md shadow-tertiary duration-300 hover:scale-110"
                src={grhousing}
                alt="grhousing"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          onClick={() => handleRedirect("/proyectos")}
          className="flex animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary p-4 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600 md:w-2/3"
        >
          VER MÁS PROYECTOS
          <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
