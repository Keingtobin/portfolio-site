import "../styles/home.css"

import portfolioImage from "../assets/portfolio-img.jpg"
import githubLogo from "../assets/github-logo.png"
import linkedinLogo from "../assets/linkedin-logo.png"
import mailLogo from "../assets/mail-logo.png"
import woodyPreview from "../assets/woody.png"
import cda from "../assets/cda.jpg"

export default function Home(){
    function copyEMail(){
        navigator.clipboard.writeText("zahu8482@colorado.edu");
        alert("Email copied to clipboard!");
    }

    return(
        <> 
        <div className="split-container">
            <div className="bio-card">
                <a href="/portfolio-site/">
                    <img src={portfolioImage} className="headshot"></img>
                </a>
                <h1>Zach Huber</h1>
                <div className="img-bar">
                    <a href="https://github.com/keingtobin" target="_blank">
                       <img src={githubLogo} alt="GitHub Logo" /> 
                    </a>
                    <a href="https://www.linkedin.com/in/zach-huber-1333261b5/" target="_blank">
                       <img src={linkedinLogo} alt="LinkedIn Logo" />
                    </a>
                    <span style={{cursor: "pointer"}} onClick={copyEMail}>
                        <img src={mailLogo} alt="Mail Logo" />
                    </span>     
                </div>
                <p>I am a Senior at the University of Colorado Boulder earning a Bachelor's in Geography with a GIS Emphasis. I also have a Bachelor's in Computer Science with a Minor in Philosophy.</p>
                <p>This is a portfolio made for GEOG4463, and it is where I will be sharing all of my work done for that class.</p>
                <p>I will also be hosting any other projects I do for class or fun here. </p>
            </div>
            {window.location.pathname === "/portfolio-site/" ?
            <div className="content-card">
                <h1 align="center">Projects</h1>
                <p align="center">Click on a project to learn more about it.</p>
                <div className="project-links">
                    <a href="/portfolio-site/woody" className="project-link">
                        <h2>Woodland Park Dynamic Map</h2>
                        <img src={woodyPreview} alt="Woodland Park Project Preview" height="200px" width="200px"/>
                    </a>
                    <a href="/portfolio-site/climate-proj" className="project-link">
                        <h2>Coeur D'Alene Climate Project</h2>
                        <img src={cda} alt="Climate Data Analysis Project Preview" height="200px" width="200px"/>
                    </a>
                    
                </div>

                
                {/**<iframe className="woodyFrame" src="./woody.html" width="100%" height="500px" align="left"></iframe>**/}
            </div>
            : null}
            {window.location.pathname === "/portfolio-site/climate-proj" ? 
            <iframe src="./climate_notebook.html" height="100%" width="100%"></iframe> : null}
            {window.location.pathname === "/portfolio-site/woody" ? 
            <p>Need to add the information for woodland park here!</p> : null}
        </div>
        </>
    )
}