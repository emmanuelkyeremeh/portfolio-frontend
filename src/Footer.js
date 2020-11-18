import React from 'react'

const Footer = () => {
    return (
        <div className= "container-fluid" style = {{marginTop: "4rem",backgroundColor:"black",color:"white",paddingTop:"3rem",paddingBottom:"3rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <h6 style={{textAlign:"center"}}>&copy; 2020 Emmanuel Kyeremeh <br/> All rights reserved</h6>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:"center"}}>FIND ME ON SOCIAL MEDIA</h4>
                        <a href="https://web.facebook.com/emmanuel.aning.56"><i style={{color:"white",paddingLeft:"40%",marginRight:"2%"}} class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/aning49"><i style={{color:"white",marginRight:"2%"}} class="fab   fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/emmanuel-aning-6aa7771b3"><i style={{color:"white",marginRight:"2%"}} class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/aning_49/"><i style={{color:"white"}} class="fab  fa-instagram"></i></a>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Footer
