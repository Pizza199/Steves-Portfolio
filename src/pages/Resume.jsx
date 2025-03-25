import "../index.css";

function Resume() {
    return (
        <div>
            <h1 className="resume">Resume</h1>
            <h2>Education</h2>
            <ul>
                <li>Bachelor of Arts in International Relations, San Francisco State Unniversity, 2011</li>
                <li>Certification in Web Development, 2025</li>
            </ul>

            <h2>Work Experience</h2>
            <ul>
                <li>
                    <strong>Recruiting Coordinator</strong>, Baxter 2022-Present
                    <ul>
                        <li>Coordinated interviews with candidates and hiring managers</li>
                        <li>Managed the applicant tracking system</li>
                    </ul>
                </li>
             </ul>

            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
                <li>Git</li>
            </ul>
        </div>
    );
}

export default Resume;
