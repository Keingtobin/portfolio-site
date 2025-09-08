import "../styles/home.css"

import portfolioImage from "../assets/portfolio-img.jpg"
export default function Home(){
    return(
        <> 
            <img src={portfolioImage}></img>
            <h1>Zach Huber</h1>
            <p>I am a Senior at the University of Colorado Boulder earning a Bachelor's in Geography with a GIS Emphasis. I also have a Bachelor's in Computer Science with a Minor in Philosophy.</p>
            <p>This is a portfolio made for GEOG4463, and it is where I will be sharing all of my work done for that class.</p>
            <p>I will also be hosting any other projects I do for class or fun here. </p>
        </>
    )
}