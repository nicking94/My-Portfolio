import Header from "../components/Header";
import Abilities from "../components/Abilities";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomeView = () => {
  return (
    <div className="h-full w-full bg-gradient-to-tr from-secondary to-primary font-roboto">
      <Header />
      <div className="mx-auto w-[100%] md:w-3/5">
        <Hero />
        <Abilities />
        <Experience />
        <Projects />
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
