import React from 'react'

const ServicesCard = (props) => {
    return (
        
        <div className="container"style = {{paddingTop: "6rem",paddingLeft:"10%"}} >
            <div className="row">
                <div className="col-lg-5">
                <img src={props.Img}  style={{width:"80%"}} alt=""/>
                </div>
                <div className="col-lg-7" >
                   <h1 id="services-title" style={{fontSize:"3rem",paddingTop:"10%"}}>{props.title}</h1>
                </div>
            </div>
            <div className="row" style = {{paddingTop:"2rem"}}>
                <div className="col-lg-5">
                  <h3>{props.header1}</h3>
                  <p>{props.content1}</p>
                </div>
                <div className="col-lg-7">
                  <h3>{props.header2}</h3>
                  <p>{props.content2}</p>
                </div>
            </div>
       </div>    
  
    )
}

export default ServicesCard
