import axios from "axios";
import { useEffect, useState } from "react";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsListPage(){
    const [projects, setProjects] = useState([])
    const API_URL = process.env.REACT_APP_API_URL
    console.log(API_URL);

 // --------- put away in a folder -------

    function getAllProjects() {
        axios.get(`${API_URL}/api/projects`)
        .then(response => {
            console.log(response);
            setProjects (response.data)})
        .catch(error => console.log(error))
        console.log(projects)
    }
    // --------- put away in a folder -------

    useEffect(() => {
        getAllProjects()
    }, [])

    return (
        <div className="ProjectListPage">
          
          <AddProject refreshProjects={getAllProjects} />
          
          { projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}     
           
        </div>
      );
}