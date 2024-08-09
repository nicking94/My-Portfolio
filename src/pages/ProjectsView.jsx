import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsDemos from "../components/ProjectsDemos";

const ProjectsView = () => {
  return (
    <>
      <div className="h-full min-h-[100vh] w-full bg-gradient-to-tr from-secondary to-primary font-roboto">
        <Header />
        <ProjectsDemos />
        <Footer />
      </div>
    </>
  );
};

export default ProjectsView;
