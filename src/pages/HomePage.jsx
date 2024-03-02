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
        <div id="text">
            <p>Welcome to SproutSeeds - where edible garden dreams come true!
                Our crowdfunding platform links aspiring gardeners with a supportive community, 
                helping you kickstart your own fresh haven. Share your vision, set achievable goals, 
                and engage with fellow enthusiasts. Join us in cultivating a greener, 
                healthier world — one garden at a time!
            </p>
        </div>
        <h3 id="text">OUR MOST SUCCESSFUL PROJECTS </h3>
        {/* returns most funded projects */}
        <div id="project-list">
            {projects.sort((a,b) => b.total - a.total).slice(0,3).map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        {/* returns newest projects */}
        <h3 id="text">FUND SOMETHING NEW</h3>
        <div id="project-list">
            
            {projects.sort((a,b) => new Date (b.date_created) - new Date(a.date_created)).slice(0,3).map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        
        </>
    );
}

export default HomePage;
