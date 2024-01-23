import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="flex items-center justify-between px-6 md:px-36 py-5 border-t border-tertiary ">
      <p className="text-text text-[.5rem] md:text-[.8rem] underline">© All Rights Reserved</p>
      <div className="flex gap-1 md:gap-3">
          <a
            className="flex items-center gap-1 text-[.6rem] md:text-[1rem] bg-tertiary py-1 px-2 rounded-full text-text  hover:bg-primary duration-200 hover:scale-105"
            href="https://www.linkedin.com/in/nicolas-v"
          >
            <FaLinkedinIn className="bg-white text-gray-900 rounded-md box-content p-1 text-[.4rem]" />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-1 text-[.6rem] md:text-[1rem] bg-tertiary py-1 rounded-full text-text px-2 hover:bg-primary duration-200 hover:scale-105"
            href="https://github.com/nicking94"
          >
            <FaGithub className="text-[.9rem]" />
            GitHub
          </a>
        </div>
    </section>
  );
};

export default Footer;
