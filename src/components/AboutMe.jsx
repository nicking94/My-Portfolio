import { CgProfile } from "react-icons/cg";
import profileImg from "../assets/profileImg.jpg";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="mt-10 px-7">
      <div className="flex">
        <div className="flex w-full flex-col items-center gap-1">
          <div className="mb-6 flex w-full flex-col items-center gap-3">
            <CgProfile className="text-3xl text-white" />
            <h1 className="text-[1.5rem] font-semibold text-gray-200 md:text-3xl">
              Sobre mi
            </h1>
          </div>
          <div className="mb-20 flex flex-col md:grid md:grid-cols-[500px_minmax(0px,_1fr)_10px]">
            <p className="text-pretty text-center text-[1rem] text-gray-100">
              Me llamo <span className="text-yellow-400">Nicolas</span> pero mis
              amigos me llaman Nicking. Empecé en la programación en Marzo de
              2022, aunque mi primer acercamiento al código fue a los 13 años
              editando archivos .AMXX haciendo uso de pawn (Counter Strike
              Zombie Mod). <br />
              <br /> Actualmente me encuentro enfocado en el{" "}
              <span className="text-yellow-400">desarrollo web</span>{" "}
              aprendiendo nuevas tecnologias y especializandome en{" "}
              <span className="font-serif text-yellow-400">frontend</span> para
              luego aprender más sobre{" "}
              <span className="font-serif text-green-600">backend</span>. <br />
              <br />
              Mi objetivo es poder{" "}
              <span className="text-yellow-400">
                brindar mis conocimientos
              </span>{" "}
              para la resolución de problemas y búsqueda de soluciones.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <img
            className="w-50 h-50 hidden rounded-full md:block"
            src={profileImg}
            alt="image-profile"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
