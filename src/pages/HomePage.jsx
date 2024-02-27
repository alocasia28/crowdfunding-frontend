// import { allProjects } from "../data.js";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
    const { projects, isLoading, error } = useProjects();

    
    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <>
        <div id="about-section">
            <p>Welcome to SproutSeeds - where edible garden dreams come true!
                Our crowdfunding platform links aspiring gardeners with a supportive community, 
                helping you kickstart your own fresh haven. Share your vision, set achievable goals, 
                and engage with fellow enthusiasts. Join us in cultivating a greener, 
                healthier world — one garden at a time!
            </p>
        </div>
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </>
    );
}

export default HomePage;
