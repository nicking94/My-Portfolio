import profileImg from "../assets/profileImg.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Hero = () => {
  return (
    <section className=" mt-16 md:mt-48 pl-7 pr-7">
      <img
        className="w-12 rounded-full hidden lg:block"
        src={profileImg}
        alt="profile-image"
      />
      <div className="flex flex-col lg:flex-row items-center font-semibold tracking-widest">
        <h1 className="text-[2.2rem] md:text-[3rem] text-white mr-0 md:mr-4 text-center mb-2">
          Hey, Soy Nicking
        </h1>
        <a href="https://wa.me/2613077147"><button className="text-[.8rem] bg-secondary text-gray-200 rounded-full px-4 py-1 hover:scale-105 border-2 border-green-600 transition-transform ">
          Disponible para trabajar
        </button></a>
      </div>
      <div className="mt-4 md:mt-8">
        <h2 className="text-[1.2rem] md:text-2xl text-gray-200">
          +2 años de experiencia.
          <span className="text-yellow-200"> Desarrollador web</span>
          <span className="text-green-300"> de Mendoza, Argentina</span>.
          <span className="text-blue-200">
            {" "}
            Especializado en crear interfaces únicas.
          </span>
        </h2>
      </div>
      <nav className="flex justify-center lg:justify-start items-center flex-col md:flex-row gap-1 md:gap-2 lg:gap-3 md:flex-wrap mt-4">
        <div className="flex flex-row gap-1 md:gap-1 lg:gap-3">
          <a
            className="flex items-center gap-1 text-[.8rem] md:text-[1rem] bg-tertiary py-1 px-2 rounded-full text-text  hover:bg-primary duration-200 hover:scale-105"
            href="https://www.linkedin.com/in/nicolas-v"
          >
            <FaLinkedinIn className="bg-white text-gray-900 rounded-md box-content p-1 text-[.4rem]" />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-1 text-[.8rem] md:text-[1rem] bg-tertiary py-1 rounded-full text-text px-2 hover:bg-primary duration-200 hover:scale-105"
            href="https://github.com/nicking94"
          >
            <FaGithub className="text-[.9rem]" />
            GitHub
          </a>
        </div>

        <div className="flex flex-row">
          <a
            className="flex items-center justify-center gap-1 text-[.8rem] md:text-[1rem] w-full  bg-tertiary py-1 rounded-full text-text px-2 hover:bg-primary duration-200 hover:scale-105"
            href="mailto:vallejofernandonicolas@gmail.com"
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
