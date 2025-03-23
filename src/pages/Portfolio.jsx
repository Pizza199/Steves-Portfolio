import "../index.css";
import Project from "../components/Project";
import SleepTrackerImage from "../images/SleepTracker.png";
import WeatherBlitzImage from "../images/WeatherBlitz.png";
import CandyStoreImage from "../images/CandyStore.jpg";

function Portfolio() {
    const projects = [
        {
            title: "SleepTracker",
            image: SleepTrackerImage,
            deployment: "https://ivandamian1.github.io/Project-1/",
            github: "https://github.com/ivandamian1/Project-1",
        },
        {
            title: "WeatherBlitz",
            image: WeatherBlitzImage,
            deployment: "https://example.com/project2-deployment",
            github: "https://example.com/project2",
        },
        {
            title: "Candy Store",
            image: CandyStoreImage,
            deployment: "https://example.com/project3-deployment",
            github: "https://example.com/project3",
        },
    ]
        return (
            <div>
                <h1 className="portfolio">Portfolio</h1>
                <div className="projects">
                    {projects.map((project, index) => (
                       <Project key={index} title = {project.title} image = {project.image} deployment = {project.deployment} github = {project.github}/>
                    ))}
                </div>
            </div>
        );
    }
    
    export default Portfolio;