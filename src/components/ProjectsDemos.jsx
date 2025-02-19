import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectsSelector from "./ProjectsSelector";
import { FaArrowRight } from "react-icons/fa";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
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
import componentsLibrary from "../assets/components_library.png";
import drgula from "../assets/drgula.png";
import colorPicker from "../assets/color_picker.png";
import backgroundColorPicker from "../assets/background_color_picker.png";
import citasMotivacionales from "../assets/citas_motivacionales.png";
import drawingApp from "../assets/drawing_app.png";
import universalWeb from "../assets/universal_web.png";
import ecommerce from "../assets/ecommerce.png";
import grhousing from "../assets/grhousing_web.png";
import novexis from "../assets/novexis_web.png";
import { SiNextdotjs } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: drawingApp,
    alt: "drawingapp",
    title: "App de dibujo",
    demoLink: "https://appdibujo-nk.netlify.app/",
  },
  {
    id: 2,
    type: "ejercicio",
    technologies: ["react", "tailwind"],
    image: listadoPeliculas,
    alt: "listadoPeliculas",
    title: "Listado de películas",
    demoLink: "https://movie-app-nk.netlify.app",
  },
  {
    id: 3,
    type: "ejercicio",
    technologies: ["react", "tailwind"],
    image: pokeapi,
    alt: "pokeapi",
    title: "Consumo de API PokéApi",
    demoLink: "https://pokedex-nk.netlify.app",
  },
  {
    id: 4,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: calculadora,
    alt: "calculadora",
    title: "Calculadora",
    demoLink: "https://calculadora-js-nk.netlify.app",
  },
  {
    id: 5,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: listatareas,
    alt: "listatareas",
    title: "Lista de tareas",
    demoLink: "https://lista-tareas-js-nk.netlify.app",
  },
  {
    id: 6,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: cronometro,
    alt: "cronometro",
    title: "Cronómetro",
    demoLink: "https://cronometro-nk.netlify.app",
  },
  {
    id: 7,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: citasMotivacionales,
    alt: "citasMotivacionales",
    title: "Citas Motivacionales",
    demoLink: "https://citas-motivacionales-nk.netlify.app/",
  },
  {
    id: 8,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: colorPicker,
    alt: "colorPicker",
    title: "Color Picker",
    demoLink: "https://color-picker-nk.netlify.app",
  },
  {
    id: 9,
    type: "ejercicio",
    technologies: ["html", "css", "javascript"],
    image: backgroundColorPicker,
    alt: "backgroundColorPicker",
    title: "Background Color Picker",
    demoLink: "https://background-color-nk.netlify.app/",
  },
  {
    id: 10,
    type: "proyecto",
    technologies: ["react", "tailwind"],
    image: template1,
    alt: "template1",
    title: "Landing Page 1",
    demoLink: "https://template-nk.netlify.app/",
  },
  {
    id: 11,
    type: "proyecto",
    technologies: ["react", "tailwind"],
    image: template2,
    alt: "template2",
    title: "Landing Page 2",
    demoLink: "https://templateinmobiliarias-nk.netlify.app/",
  },
  {
    id: 12,
    type: "proyecto",
    technologies: ["html", "css", "javascript"],
    image: matt,
    alt: "matt",
    title: "Landing Page Matt Armoa Gaming",
    demoLink: "https://mattarmoagaming.netlify.app",
  },
  {
    id: 13,
    type: "proyecto",
    technologies: ["html", "bootstrap"],
    image: nicking,
    alt: "nicking",
    title: "Landing Page Nicking",
    demoLink: "https://nicking.netlify.app",
  },
  {
    id: 14,
    type: "proyecto",
    technologies: ["html", "css", "javascript"],
    image: shirley,
    alt: "shirley",
    title: "Landing Page Shirley Nailss",
    demoLink: "https://shirley-nailss.netlify.app/",
  },
  {
    id: 15,
    type: "proyecto",
    technologies: ["react", "tailwind"],
    image: componentsLibrary,
    alt: "components library",
    title: "Librería de componentes",
    demoLink: "https://componentslibrary-nk.netlify.app/",
  },
  {
    id: 16,
    type: "proyecto",
    technologies: ["html", "css", "javascript"],
    image: drgula,
    alt: "Dr Gula",
    title: "Landing page hamburguesería",
    demoLink: "https://drgula.netlify.app/",
  },
  {
    id: 17,
    type: "proyecto",
    technologies: ["html", "css", "javascript"],
    image: universalWeb,
    alt: "Universal web",
    title: "Landing page Universal Web",
    demoLink: "https://drgula.netlify.app/",
  },
  {
    id: 18,
    type: "proyecto",
    technologies: ["html", "tailwind", "javascript", "jquery"],
    image: ecommerce,
    alt: "ecommerce diamante natural",
    title: "Ecommerce Diamante Natural",
    demoLink: "https://dieteticadiamante.netlify.app/",
  },
  {
    id: 19,
    type: "proyecto",
    technologies: ["html", "tailwind", "javascript"],
    image: grhousing,
    alt: "grhousing",
    title: "Landing page inmobiliaria",
    demoLink: "https://grhousing-demo-nk.netlify.app/",
  },
  {
    id: 20,
    type: "proyecto",
    technologies: ["next", "tailwind", "css"],
    image: novexis,
    alt: "Novexis",
    title: "Landing page Novexis",
    demoLink: "https://novexis-landing.vercel.app/home",
  },
];

const ProjectsDemos = () => {
  const [filter, setFilter] = useState("proyecto");
  const pathName = useLocation();

  const handleSelect = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const filteredProjects = projectsData
    .filter((project) => {
      if (filter === "all") {
        return true;
      }
      return project.type === filter;
    })
    .reverse();

  return (
    <div className="flex flex-col items-center space-y-10 px-6 py-5">
      <ProjectsSelector onSelect={handleSelect} />
      <div
        id="projects-container"
        className="grid grid-cols-1 gap-8 rounded-lg bg-secondary px-7 py-5 text-gray-200 md:mt-14 md:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center space-y-3 rounded p-4 shadow-md shadow-gray-800"
          >
            <div className="flex w-full items-center gap-1 rounded-xl">
              {project.technologies.includes("next") && (
                <>
                  <SiNextdotjs className="text-[1rem] text-white md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    NEXT
                  </span>
                </>
              )}

              {project.technologies.includes("html") && (
                <>
                  <FaHtml5 className="text-[1rem] text-red-600 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    HTML
                  </span>
                </>
              )}
              {project.technologies.includes("css") && (
                <>
                  <IoLogoCss3 className="text-[1rem] text-blue-300 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    CSS
                  </span>
                </>
              )}
              {project.technologies.includes("javascript") && (
                <>
                  <IoLogoJavascript className="text-[1rem] text-yellow-300 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    JAVASCRIPT
                  </span>
                </>
              )}
              {project.technologies.includes("react") && (
                <>
                  <FaReact className="text-[1rem] text-blue-500 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    REACT
                  </span>
                </>
              )}
              {project.technologies.includes("tailwind") && (
                <>
                  <SiTailwindcss className="text-[1rem] text-green-300 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    TAILWIND
                  </span>
                </>
              )}
              {project.technologies.includes("bootstrap") && (
                <>
                  <BsBootstrapFill className="text-[1rem] text-violet-500 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    BOOTSTRAP
                  </span>
                </>
              )}
              {project.technologies.includes("jquery") && (
                <>
                  <DiJqueryLogo className="text-[1rem] text-blue-600 md:text-2xl" />
                  <span className="mr-1 text-[.4rem] text-white md:text-[15px]">
                    JQUERY
                  </span>
                </>
              )}
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                className="h-40 w-full rounded-xl shadow-md shadow-tertiary duration-300 hover:scale-110"
                src={project.image}
                alt={project.alt}
              />
            </div>
            <p className="text-pretty text-[1rem] text-gray-100">
              {project.title}
            </p>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[40%] animate-pulse items-center justify-center gap-x-2 rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200 transition-all duration-500 hover:scale-105 hover:bg-green-600"
            >
              DEMO
              <FaArrowRight className="md:text-md text-[.8rem] text-green-300" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDemos;
