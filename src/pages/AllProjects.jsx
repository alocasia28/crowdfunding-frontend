import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function AboutPage() {
    const { projects, isLoading, error } = useProjects();

    //issue here with navigating to each project card due to the way the project link is set up in ProjectCard.
    
    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }
    return (
        <>
            <h3 id="text">ALL PROJECTS</h3>
            <div id="project-list">
                
                {projects.sort((a,b) => new Date (b.date_created) - new Date(a.date_created)).map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </>
    )
}

export default AboutPage;