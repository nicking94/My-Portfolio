import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProjectsSelector = ({ onSelect }) => {
  const navigate = useNavigate();

  const handleRedirect = (page) => {
    navigate(page);
  };
  return (
    <div className="flex w-full justify-center gap-x-20 rounded p-4 text-white shadow-lg shadow-primary">
      <button
        onClick={() => {
          handleRedirect("/");
          onSelect("all");
        }}
        className="flex items-center gap-x-2 rounded-md border-b-[.1rem] border-green-600 px-4 py-1 transition-all duration-300 hover:bg-green-600"
      >
        <FaArrowLeft className="md:text-md text-[.8rem]" />
        Inicio
      </button>

      <button
        onClick={() => onSelect("proyecto")}
        className="rounded-md border-b-[.1rem] border-green-600 px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:shadow-sm hover:shadow-green-600"
      >
        Proyectos
      </button>
      <button
        onClick={() => onSelect("ejercicio")}
        className="rounded-md border-b-[.1rem] border-green-600 px-4 py-1 transition-all duration-300 hover:bg-green-600"
      >
        Ejercicios
      </button>
    </div>
  );
};

export default ProjectsSelector;
