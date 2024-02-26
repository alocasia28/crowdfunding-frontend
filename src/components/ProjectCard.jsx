import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const {projectData } = props;
    const projectLink = `project/${projectData.id}`;

    return (
        <div className="project-card">
            <Link to={projectLink}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>
                <p> ${projectData.total} of ${projectData.goal} Funded</p> 
                {/* {make it a function that's a .js file and then import here. It should take two arguments, goal and total 
                but also account for cannot divide by 0
                */}
                
               
                <p>
                    created: {new Date(projectData.date_created).toLocaleDateString()}
                </p>
            </Link>
        </div>
    );
}
export default ProjectCard;