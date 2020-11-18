import React from 'react'
import image1 from "./Images/4782.jpg"
import {Link} from "react-router-dom"
import "./bootstrap.css"
import "./index.css"

const Showcase = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5" style ={{textAlign:"left",paddingTop: "3rem"}}>
                   <h1 id ="name" style = {{fontSize: "4.8rem",paddingTop:"2rem"}}>Hi, I'm Emmanuel</h1>
                   <br/>
                   <p style = {{fontSize: "1.5rem"}}>I am a web designer and developer from Accra, Ghana</p>
                   
                  
                   <Link id="links" style ={{color: "white"}} to= '/services'> <button className="btn btn-primary">Work with me</button> </Link>  
                   
                </div>
                <div id = "showcase-img" className="col-lg-7">
                   <img  style = {{width: "120%", height: "110%"}} src = {image1} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Showcase
