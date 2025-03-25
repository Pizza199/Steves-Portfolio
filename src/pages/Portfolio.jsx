import "../index.css";
import Project from "../components/Project";
import SleepTrackerImage from "../images/SleepTracker.png";
import WeatherBlitzImage from "../images/WeatherBlitz.png";
import BookImage from "../images/Book.jpg";
import SocialImage from "../images/Social.jpg";
import VehicleImage from "../images/Vehicle.avif";
import EmployeeImage from "../images/Employee.jpg";

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
            title: "Book Search Engine",
            image: BookImage,
            deployment: "https://github.com/Pizza199/BookSearchEngine.git",
            github: "https://github.com/Pizza199/BookSearchEngine.git",
        },
        {
            title: "Social Network API",
            image: SocialImage,
            deployment: "https://github.com/Pizza199/Social-Network-API.git",
            github: "https://github.com/Pizza199/Social-Network-API.git",
        },
        {
            title: "Vehicle Builder",
            image: VehicleImage,
            deployment: "https://github.com/Pizza199/VehicleBuilder.git",
            github: "https://github.com/Pizza199/VehicleBuilder.git",
        },
        {
            title: "Employee Tracker",
            image: EmployeeImage,
            deployment: "https://github.com/Pizza199/Employee-Tracker.git",
            github: "https://github.com/Pizza199/Employee-Tracker.git",
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