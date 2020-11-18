import React from 'react'
import Image2 from "./Images/bandicam 2020-10-30 12-37-49-024.jpg"
import "./index.css"

const Featured = () => {
    return (
        <div id ="featured" className="container-fluid" style = {{paddingTop: "10rem"}}>
            <h3>Featured Project</h3>
            <hr/>
            <div className="row">
              <div className="col-lg-7">
                  <img style = {{width: "100%"}} src={Image2} alt=""/>
              </div>  
              <div id = "jumia" className="col-lg-4" style = {{marginLeft: "10px"}}>
                 <h1>Jumia Clone</h1>
                 <p style = {{fontSize: "1.3rem"}}>A simple clone of jumia.com using javascript and articulate web design and development</p>
                 <p style = {{fontSize: "1.5rem"}} >Powered by: React JS</p>
              </div>
            </div>
        </div>
    )
}

export default Featured
