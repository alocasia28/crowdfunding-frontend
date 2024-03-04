import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";

import "./ProjectPage.css"
import { ProgressBar } from "../components/ProgressBar";

function ProjectPage() {
    const { id } = useParams();
    const { project, isLoading, error} = useProject(id);

    

    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <>
            <div className="project-div">
                <div>
                    <h2 id="title" className="project-text">{project.title}</h2>
                    
                    <img src={project.image} />
                    <h3 className="project-text">{project.description}</h3 >
                    <h3 id="sub-title" className="project-text">{project.owner}</h3>
                    <h3 id="sub-title" className="project-text">Created: {new Date(project.date_created).toLocaleDateString()}</h3>
                </div>
                <div>
                    <h3 className="project-text">{project.is_open === true ? "Accepting donations" : "This project is closed"}</h3>
                    <p> ${project.total === null ? "0" : project.total} raised</p>
                    <ProgressBar currentValue={project.total} maxValue={project.goal}/>
                    <h3 className="project-text">Pledges:</h3>
                    <ul>
                        {project.pledges.slice(0,4).reverse().map((pledgeData, key) => {
                            return (
                                <li key={key}>
                                    <div className="pledge-container">
                                        <div>{pledgeData.anonymous === true ? "Anonymous" : pledgeData.supporter}</div>
                                        <div>${pledgeData.amount}</div>
                                        <div>{pledgeData.comment}</div>
                                    </div>
                                </li>
                                // I want to limit it to the 4 most recent pledges
                            );
                        })}
                    </ul>
                </div>
                
            </div>
            
            {project.is_open && <PledgeForm/>}
        </>
    );
}

export default ProjectPage