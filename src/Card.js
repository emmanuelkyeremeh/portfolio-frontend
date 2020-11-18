import React from 'react'


const Card = (props) => {
    return (
        <div id="card" className="container-fluid col-lg-5" style={{marginLeft:"5%"}}>
          <div className="container">
           <img src={props.Img} style = {{width: "50%", marginLeft: "20%"}} alt=""/>
          </div>
          <div className="container" style = {{textAlign: "center"}}>
             <h2>{props.Title}</h2>
              <p>{props.Text}</p>
          </div>
        </div>
    )
}

export default Card
