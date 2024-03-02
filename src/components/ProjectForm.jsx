import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postProject from "../api/post-project";

function ProjectForm() {
    const [project, setProject] = useState({
        title: "",
        description: "",
        goal: null,
        image: "",
        is_open: false,
        date_created: null,
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const {id, value} = event.target;
        setProject((prevProject) => ({
            ...prevProject, 
            [id]:value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token");
        if (authToken) {
            postProject(
                project.title,
                project.description,
                project.goal,
                project.image,
                project.is_open, 
                authToken
            ).then((response) => {
                console.log(response);
                navigate(`/project/${response.id}`);
            });
        }
    };
    

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder="Enter a title" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" placeholder="What is your project about?" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="goal">Funding Goal:</label>
                <input type="number" id="goal" placeholder="How much do you want to raise?" onChange={handleChange}  />
            </div>
            <div>
                <label htmlFor="image">Image URL</label>
                <input type="url" name="image" id="image" placeholder="https://example.com" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="is_open">Active:</label>
                <input type="checkbox" name="is_open" id="is_open" checked={project.is_open} onChange={handleChange}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>        
        </form>
    )
}

export default ProjectForm;