import React from 'react'
import aboutImg from "./Images/aboutme.png"
import {Link} from "react-router-dom"
import Footer from "./Footer"

const About = () => {
    
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5" style = {{paddingTop:"1rem"}}>
                    <h1 style = {{fontSize:"3rem"}}>About Me <hr/> </h1>
                    <p style = {{fontSize:"1.5rem",lineHeight:"3rem"}}>My name is Emmanuel Kwadwo Aning Kyeremeh. I am currently a student and a freelance web developer currently based in Accra, Ghana. I have over a year's worth of experience and I specialize in front end web development which basically involves the user friendliness of a website and its design.</p>
                    </div>
                    <div className="col-lg-7">
                        <img id= "aboutimg" src={aboutImg} style = {{width:"110%",paddingTop: "1rem"}} alt=""/>
                    </div>
                </div>
                <div className="container mr-auto" style = {{paddingTop:"4rem"}}>
                    <h1 style = {{fontSize:"3rem",textAlign:"center"}}>Why work with me?</h1>
                    <p style = {{fontSize:"1.5rem", lineHeight:"3rem" ,textAlign:"center",paddingLeft:"10%",paddingRight:"10%"}}>I work with a team of great developers and together we are passionate and dedicated towards satisfying the needs of our clients as we design an deploy a dymanic and profitable website for our clients. Please don't hesisate to give me a try!</p>
                   
                        <Link style ={{color: "white"}} id = "links" to = '/contact'> <button id="about-btn" className = "btn btn-primary" style = {{marginLeft:"45%"}}>Contact Me</button></Link>
                    
                </div>
                
            </div>
            <Footer/>
        </div>  
    )
}

export default About
