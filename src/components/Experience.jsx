import React from "react";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experiencia" className="flex flex-col pr-7 md:mt-3">
      <div className="flex items-center gap-4 mt-12 md:mt-32 pl-7 mb-2 md:mb-4">
        <MdOutlineWork className="text-text text-[1.3rem]" />
        <h1 className="text-gray-300 text-[1.5rem] md:text-3xl font-semibold">
          Experiencia Laboral
        </h1>
      </div>
      <div className="border-l-2 border-gray-600 pl-7 ml-[37px] md:ml-[37px]">
        <div className="text-gray-300">
          <h3 className="text-[1rem] md:text-[1.3rem] text-yellow-200">
            Desarrollo De Proyectos Freelance | [Nov - 2022] -{" "}
            <span className="text-blue-200">Actualmente...</span>
          </h3>
          <p className="text-[.8rem] md:text-[1rem] mt-3">
            Desarrollo de proyectos web de manera proactiva y creativa con un
            enfoque centrado en el usuario.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
