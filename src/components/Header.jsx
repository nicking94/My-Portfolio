import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex items-center justify-end p-4 md:w-full md:justify-center">
      {/* Menú de navegación en escritorio */}
      <nav
        className={`fixed z-20 mt-2 hidden rounded-full bg-secondary px-2 py-1 text-[.9rem] font-medium text-gray-200 md:mt-5 md:flex md:px-8 md:text-[1.1rem] ${
          isScrolled ? "bg-tertiary/60 underline backdrop-blur-md" : ""
        } `}
      >
        <a className="rounded-xl px-3 hover:bg-tertiary" href="/">
          Inicio
        </a>
        <a className="rounded-xl px-3 hover:bg-tertiary" href="/#experiencia">
          Experiencia
        </a>
        <a className="rounded-xl px-3 hover:bg-tertiary" href="/#proyectos">
          Proyectos
        </a>
        <a className="rounded-xl px-3 hover:bg-tertiary" href="/#sobre-mi">
          Sobre mí
        </a>
        <a
          className="rounded-xl px-3 hover:bg-tertiary"
          href="https://wa.me/+5492613077147"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
      </nav>

      {/* Menú de navegación en móvil */}
      {isOpen != true ? (
        <IoMdMenu
          className="fixed z-30 mr-2 mt-4 text-2xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <IoMdClose
          className="fixed z-30 mr-2 mt-4 text-2xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <nav
          className={`fixed right-0 top-0 z-20 flex w-full flex-col items-center justify-center rounded-md bg-primary px-2 py-8 text-[.9rem] font-medium text-gray-200 md:hidden ${
            isScrolled ? "bg-tertiary/60 underline backdrop-blur-md" : ""
          } `}
        >
          <a
            className="rounded-xl px-3 py-2 hover:bg-tertiary"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a
            className="rounded-xl px-3 py-2 hover:bg-tertiary"
            href="/#experiencia"
            onClick={() => setIsOpen(false)}
          >
            Experiencia
          </a>
          <a
            className="rounded-xl px-3 py-2 hover:bg-tertiary"
            href="/#proyectos"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>
          <a
            className="rounded-xl px-3 py-2 hover:bg-tertiary"
            href="/#sobre-mi"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </a>
          <a
            className="rounded-xl px-3 py-2 hover:bg-tertiary"
            href="https://wa.me/+5492613077147"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
