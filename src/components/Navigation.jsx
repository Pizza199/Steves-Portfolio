import "../index.css";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="nav-links">
            
                <NavLink activeClassName="active-link" className="nav-link" to="/">About me</NavLink>
                <NavLink activeClassName="active-link" className="nav-link" to="/portfolio">Portfolio</NavLink>
                <NavLink activeClassName="active-link" className="nav-link" to="/contact">Contact</NavLink>
                <NavLink activeClassName="active-link" className="nav-link" to="/resume">Resume</NavLink>
            
        </nav>
    );
}

export default Navigation;