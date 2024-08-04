import React from "react";
import { CgProfile } from "react-icons/cg";
import profileImg from "../assets/profileImg.jpg";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="mt-10 px-7">
      <div className="flex">
        <div className="gap-1 w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-3 mb-6 w-full ">
            <CgProfile className="text-white text-3xl" />
            <h1 className="text-gray-200 text-[1.5rem] md:text-3xl font-semibold">
              Sobre mi
            </h1>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-[500px_minmax(0px,_1fr)_10px] mb-20">
            <p className="text-gray-100 text-[1rem] text-center text-pretty">
              Me llamo <span className="text-yellow-400">Nicolas</span> pero mis
              amigos me llaman Nicking. Empecé en la programación en Marzo de
              2022, aunque mi primer acercamiento al código fue a los 13 años
              editando archivos .AMXX haciendo uso de pawn (Counter Strike
              Zombie Mod). <br />
              <br /> Actualmente me encuentro enfocado en el{" "}
              <span className="text-yellow-400">desarrollo web</span>{" "}
              aprendiendo nuevas tecnologias y especializandome en{" "}
              <span className="text-yellow-400 font-serif">frontend</span> para
              luego aprender más sobre{" "}
              <span className="text-green-400 font-serif ">backend</span>.{" "}
              <br />
              <br />
              Mi objetivo es poder{" "}
              <span className="text-yellow-400">
                brindar mis conocimientos
              </span>{" "}
              para la resolución de problemas y búsqueda de soluciones.
            </p>
          </div>
        </div>

        <div className=" flex items-center">
          <img
            className="w-50 h-50 rounded-full hidden md:block"
            src={profileImg}
            alt="image-profile"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
