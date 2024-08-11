
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeView from "./pages/HomeView";
import ProjectsView from "./pages/ProjectsView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/proyectos" element={<ProjectsView />} />
      </Routes>
    </Router>
  );
}

export default App;
