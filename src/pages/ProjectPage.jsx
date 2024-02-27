import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";

import "./ProjectPage.css"

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
                    <img src={project.image} />
                    <h3>{project.description}</h3>
                    <h3>Created at: {project.date_created}</h3>
                    <h3>{`Status: ${project.is_open}`}</h3>
                </div>
                <div>
                    <h3>Pledges:</h3>
                    <ul>
                        {project.pledges.slice(0,4).reverse().map((pledgeData, key) => {
                            return (
                                <li key={key}>
                                    <p>${pledgeData.amount} from {pledgeData.anonymous === true ? "anon" : pledgeData.supporter}</p>
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