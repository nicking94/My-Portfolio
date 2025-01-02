import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const ProjectsSelector = ({ onSelect }) => {
  const [isActive, setIsActive] = useState("proyecto");
  const navigate = useNavigate();

  const handleActive = (button) => {
    setIsActive(button);
  };

  const handleRedirect = (page) => {
    navigate(page);
  };

  return (
    <div className="flex w-full justify-center gap-x-[1rem] rounded p-4 text-white shadow-lg shadow-primary md:gap-x-20">
      <button
        onClick={() => {
          handleActive("all");
          handleRedirect("/");
          onSelect("all");
        }}
        className="flex w-[5rem] items-center justify-center gap-x-2 rounded-md border-b-[.1rem] border-green-900 px-4 py-1 text-[.8rem] transition-all duration-300 hover:bg-green-600 md:w-2/3 md:text-[1rem]"
      >
        <FaArrowLeft className="md:text-md text-[.8rem]" />
        Inicio
      </button>

      <button
        onClick={() => {
          handleActive("proyecto");
          onSelect("proyecto");
        }}
        className={`flex items-center justify-center gap-x-2 rounded-full border-2 border-green-600 px-4 py-2 text-[.8rem] transition-all duration-500 md:w-2/3 md:text-[1rem] ${
          isActive === "proyecto"
            ? "bg-green-600 text-gray-200"
            : "bg-secondary text-gray-200"
        }`}
      >
        Proyectos
      </button>

      <button
        onClick={() => {
          handleActive("ejercicio");
          onSelect("ejercicio");
        }}
        className={`flex items-center justify-center gap-x-2 rounded-full border-2 border-green-600 px-4 py-2 text-[.8rem] transition-all duration-500 md:w-2/3 md:text-[1rem] ${
          isActive === "ejercicio"
            ? "bg-green-600 text-gray-200"
            : "bg-secondary text-gray-200"
        }`}
      >
        Ejercicios
      </button>
    </div>
  );
};

export default ProjectsSelector;
