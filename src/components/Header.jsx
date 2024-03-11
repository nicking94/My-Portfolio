import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className="flex justify-center md:w-full">
      <nav
        className={` text-gray-200 z-20 bg-secondary rounded-full mt-2 md:mt-5 py-1 px-2 md:px-8 text-[.9rem] md:text-[1.1rem] font-medium fixed ${
          isScrolled ? "backdrop-blur-md bg-tertiary/60 underline" : ""
        } `}
      >
        <a className="hover:bg-tertiary rounded-xl px-3" href="/#experiencia">
          Experiencia
        </a>
        <a className="hover:bg-tertiary rounded-xl px-3" href="/#proyectos">
          Proyectos
        </a>
        <a className="hover:bg-tertiary rounded-xl px-3" href="/#sobre-mi">
          Sobre mí
        </a>
        <a className="hover:bg-tertiary rounded-xl px-3" href="https://wa.me/2613077147">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
