import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import "./App.css";
import ProjectsListPage from "./pages/ProjectsListPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } /> 
        <Route exact path="/projects/:projectId" element={<ProjectDetailsPage />}/>
        <Route exact path="/projects" element={<ProjectsListPage />}/>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
