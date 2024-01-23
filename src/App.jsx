import Abilities from "./components/Abilities";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {

  return (
    <>
      <div className="bg-gradient-to-tr from-secondary via-black-100 to-primary h-full w-full font-roboto">
        <div className="w-[100%] md:w-3/5 mx-auto">
        <Header />
        <Hero />
        <Abilities />
        <Experience />
        <Projects />
        <AboutMe />
        
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
