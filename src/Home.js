import React from 'react'
import Featured from './Featured'
import Showcase from "./Showcase"
import Card from "./Card"
import Image3 from "./Images/modern-web-design-concept-with-flat-style_23-2147935005.jpg"
import Image4 from "./Images/19947.jpg"
import Image5 from "./Images/Cybersecurity.jpg"
import Image6 from "./Images/logistics.jpg"
import Topic from './Topic'
import Connect from './Connect'
import Footer from './Footer'


const Home = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <Showcase/>
                <Featured/>
                
                <div className="container">
                    <Topic/>
                    <div className="row">
                        <Card
                        Img = {Image3}
                        Title = 'Web Design and Development'
                        Text = 'I design websites from scratch in line with the needs of my clients'
                        />
                        <Card
                        Img = {Image4}
                        Title = 'Web Hosting and Management'
                        Text = 'I deploy websites to secure web servers from reputable providers with the fastest fetching   time possible'
                        />
                    </div>  
                    <div className="row">
                
                            <Card
                                Img = {Image5}
                                Title = 'Cyber Security and Protection'
                                Text = 'I ensure that your website is as safe as possible from interference and hacking by cyber criminlas and terrorists'
                            />
                            <Card
                                Img = {Image6}
                                Title = 'Logistical and Maintenance Support'
                                Text = 'I provide my clients with the required web servers along with other components to ensure the smooth running of their website'
                            />     
                    </div>  
                </div>  
                <Connect/> 
              
            </div>
            <Footer/> 
        </div>    
    )
}

export default Home

