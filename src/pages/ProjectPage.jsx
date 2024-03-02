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
                    <h2>{project.title}</h2>
                    <h4>{project.owner}</h4>
                    <img src={project.image} />
                    <h3>{project.description}</h3>
                    <h3>Created at: {project.date_created}</h3>
                    <h3>{project.is_open === true ? "Accepting donations" : "This project is closed"}</h3>
                </div>
                <div>
                    <p> ${project.total === null ? "0" : project.total} raised</p>
                    <ProgressBar currentValue={project.total} maxValue={project.goal}/>
                    <h3>Pledges:</h3>
                    <ul>
                        {project.pledges.slice(0,4).reverse().map((pledgeData, key) => {
                            return (
                                <li key={key}>
                                    <p>${pledgeData.amount} - {pledgeData.anonymous === true ? "Anonymous" : pledgeData.supporter}</p>
                                    <p>{pledgeData.comment}</p>
                                </li>
                                // I want to limit it to the 4 most recent pledges
                            );
                        })}
                    </ul>
                </div>
                
            </div>
            <PledgeForm/>
        </>
    );
}

export default ProjectPage