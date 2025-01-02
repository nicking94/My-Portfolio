import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experiencia" className="flex flex-col pr-7 md:mt-3">
      <div className="mb-2 mt-12 flex items-center gap-4 pl-7 md:mb-4 md:mt-32">
        <MdOutlineWork className="text-[1.3rem] text-text" />
        <h1 className="text-[1.5rem] font-semibold text-gray-300 md:text-3xl">
          Experiencia
        </h1>
      </div>
      <div className="space-y-8">
        <div className="ml-[37px] border-l-2 border-gray-600 pl-7 md:ml-[37px]">
          <div className="text-gray-300">
            <h3 className="text-[1rem] text-yellow-200 md:text-[1.3rem]">
              Desarrollo De Proyectos Freelance{" "}
              <span className="text-white">|</span>{" "}
              <span className="text-blue-200"> Agosto 2022 - Enero 2024</span>
            </h3>
            <p className="mt-3 text-[.8rem] md:text-[1rem]">
              Desarrollo de proyectos web de manera proactiva y creativa con un
              enfoque centrado en el usuario (UX/UI).
            </p>
          </div>
        </div>
        <div className="ml-[37px] border-l-2 border-gray-600 pl-7 md:ml-[37px]">
          <div className="text-gray-300">
            <h3 className="text-[1rem] text-yellow-200 md:text-[1.3rem]">
              Frontend developer - KIURA
              <span className="text-white"> |</span>{" "}
              <span className="text-blue-200"> Enero 2024 - Julio 2024</span>
            </h3>
            <p className="mt-3 text-[.8rem] md:text-[1rem]">
              Contrato de prácticas profesionales realizando aplicaciones web
              bajo la metodología ágil SCRUM.
            </p>
          </div>
        </div>
        <div className="ml-[37px] border-l-2 border-gray-600 pl-7 md:ml-[37px]">
          <div className="text-gray-300">
            <h3 className="text-[1rem] text-yellow-200 md:text-[1.3rem]">
              Frontend developer - NOVEXIS CONSULTING
              <span className="text-white"> |</span>{" "}
              <span className="text-blue-200"> Agosto 2024 - Actualidad</span>
            </h3>
            <p className="mt-3 text-[.8rem] md:text-[1rem]">
              Desarrollo de aplicaciones web bajo la metodología ágil SCRUM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
