import profileImg from "../assets/profileImg.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Hero = () => {
  return (
    <section className="mt-16 pl-7 pr-7 md:mt-48">
      <img
        className="hidden w-12 rounded-full lg:block"
        src={profileImg}
        alt="profile-image"
      />
      <div className="flex flex-col items-center font-semibold tracking-widest lg:flex-row">
        <h1 className="mb-2 mr-0 text-center text-[2.2rem] text-white md:mr-4 md:text-[3rem]">
          Hey, Soy Nicking
        </h1>
        <a
          href="https://wa.me/+5492613077147"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cursor-default rounded-full border-2 border-green-600 bg-secondary px-4 py-1 text-[.8rem] text-gray-200">
            Disponible para trabajar
          </button>
        </a>
      </div>
      <div className="mt-4 md:mt-8">
        <h2 className="text-[1.2rem] text-gray-200 md:text-2xl">
          +2 años de experiencia.
          <span className="text-yellow-200"> Desarrollador web</span>
          <span className="text-green-300"> de Mendoza, Argentina</span>.
          <span className="text-blue-200">
            {" "}
            Especializado en crear interfaces únicas.
          </span>
        </h2>
      </div>
      <nav className="mt-4 flex flex-col items-center justify-center gap-1 md:flex-row md:flex-wrap md:gap-2 lg:justify-start lg:gap-3">
        <div className="flex flex-row gap-1 md:gap-1 lg:gap-3">
          <a
            className="flex items-center gap-1 rounded-full bg-tertiary px-2 py-1 text-[.8rem] text-text duration-200 hover:scale-105 hover:bg-primary md:text-[1rem]"
            href="https://www.linkedin.com/in/nicolas-v"
          >
            <FaLinkedinIn className="box-content rounded-md bg-white p-1 text-[.4rem] text-gray-900" />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-1 rounded-full bg-tertiary px-2 py-1 text-[.8rem] text-text duration-200 hover:scale-105 hover:bg-primary md:text-[1rem]"
            href="https://github.com/nicking94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-[.9rem]" />
            GitHub
          </a>
        </div>

        <div className="flex flex-row">
          <a
            className="flex w-full items-center justify-center gap-1 rounded-full bg-tertiary px-2 py-1 text-[.8rem] text-text duration-200 hover:scale-105 hover:bg-primary md:text-[1rem]"
            href="mailto:vallejofernandonicolas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgMail className="text-[.9rem]" />
            vallejofernandonicolas@gmail.com
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Hero;
