import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex items-center justify-between border-t border-tertiary px-6 py-5 md:px-36"
    >
      <p className="text-[.5rem] text-text underline md:text-[.8rem]">
        © All Rights Reserved
      </p>
      <div className="flex gap-1 md:gap-3">
        <a
          className="flex items-center gap-1 rounded-full bg-tertiary px-2 py-1 text-[.6rem] text-text duration-200 hover:scale-105 hover:bg-primary md:text-[1rem]"
          href="https://www.linkedin.com/in/nicolas-v"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="box-content rounded-md bg-white p-1 text-[.4rem] text-gray-900" />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-1 rounded-full bg-tertiary px-2 py-1 text-[.6rem] text-text duration-200 hover:scale-105 hover:bg-primary md:text-[1rem]"
          href="https://github.com/nicking94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-[.9rem]" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Footer;
