import { Link } from "react-router-dom";
import "./ProjectCard.css";
import calculatePercentage from "../pages/percentage";
import { ProgressBar } from "./ProgressBar";

function ProjectCard(props) {
    const {projectData } = props;
    const projectLink = `project/${projectData.id}`;
   

    const percentageFunded = calculatePercentage(projectData.total, projectData.goal)

    

    return (
        <>
            <div className="project-card">
                <Link to={projectLink}>
                    
                    <img src={projectData.image} />
                    <h3>{projectData.title}</h3>
                    <p> ${projectData.total === null ? "0" : projectData.total} raised</p>
                    <ProgressBar currentValue={projectData.total} maxValue={projectData.goal}/>
                    <p>{calculatePercentage(projectData.total, projectData.goal)}% Funded</p>
                    {/* <p> ${projectData.total} of ${projectData.goal} Funded</p>  */}
                    {/* {make it a function that's a .js file and then import here. It should take two arguments, goal and total 
                    but also account for cannot divide by 
                    */}
                    
                
                    <p>
                        {/* created: {new Date(projectData.date_created).toLocaleDateString()} */}
                    </p>
                </Link>
            </div>
        </>
    );
}
export default ProjectCard;