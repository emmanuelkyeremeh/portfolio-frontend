import React from 'react'
import Image8 from "./Images/customer.jpg"
import {Link} from "react-router-dom"

const Connect = () => {
    return (
        <div id = "connect" className="container-fluid" style ={{marginTop:"4rem"}}>
            <div className="row">
               <div className="col-lg-5">
                   <h1 id = "name" style = {{fontSize: "4rem",paddingTop:"4rem"}}>Do you have a project in mind?</h1>
                   <Link id="links" style ={{color: "white"}} to= '/contact'><button className = "btn btn-primary">Get in Touch</button> </Link>
               </div>
               <div id = "showcase-img" className="col-lg-7">
                  <img src={Image8} style = {{width:"110%"}} alt=""/>
               </div>
            </div>
        </div>
    )
}

export default Connect
