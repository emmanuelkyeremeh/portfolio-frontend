import React from 'react'
import {Link} from "react-router-dom"
import "./bootstrap.css"



const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link  className = "navbar-brand" style ={{paddingLeft:"10%"}} to= '/'> <h1>EK</h1></Link>
               
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item  px-4">
                <Link className = "nav-link" to= '/'>Home</Link>
                </li>
                <li className="nav-item px-4 ">
                <Link className= "nav-link" to= '/about'>About Me</Link>
                </li>
                <li class="nav-item px-4">
                <Link className = "nav-link" to= '/services'>Services</Link>
                </li>
                <li class="nav-item px-4">
                <Link className = "nav-link" to= '/contact'>Contact Me</Link>
                </li>
            </ul>
           
            </div>
      </nav>




       
    )
}

export default Nav
