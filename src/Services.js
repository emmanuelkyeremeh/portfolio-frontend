import React from 'react'
import webdesign from "./Images/webdesign.png"
import ServicesCard from "./ServicesCard"
import webhosting from "./Images/webhosting.png"
import cyber from "./Images/cyber.png"
import logistics from "./Images/logisticss.jpg"
import Footer from './Footer'

const Services = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <h1 style ={{textAlign:"center",paddingTop:"2rem",fontSize:"3rem"}}>My Services</h1>
                <p style = {{textAlign:"center",fontSize: "1.5rem"}}>A detailed breakdown of everything I offer</p>
                <ServicesCard
                Img = {webdesign}
                title = 'Web Design and Development'
                header1 = 'User Friendly'
                content1 = 'My priority is always to design a greate user interface and experience for my clients as this is the mot important part of a website'
                header2 = 'Responsiveness'
                content2= 'It is always very important for websites I design to look presentable on multiple screen sizes and layouts.This forms part of UI/UX design but I consider it a big component of web design on its ow'
                />
                <ServicesCard
                Img = {webhosting}
                title = 'Web Hosting and Management'
                header1 = 'Remote Data Storage'
                content1 = 'I provide remote but secure hosting and storage of client data,form submission and the overall website. I use top notch hosting and database services to ensure fast access and well as effective and secure storage of data'
                header2 = 'Server Side Rendering'
                content2= 'I deploy websites with a strong backend which basically protects the website from crashing if ever there is high traffic'
                />
                <ServicesCard
                Img = {cyber}
                title = 'Cyber Security and Protection'
                header1 = 'Secure firewall'
                content1 = 'I design websites with a secure backend firewall which is constantly monitored by myself and my team to protect the website against external attacts from hackers'
                header2 = 'Spam filtering'
                content2= 'My websites have a secure system in place globally know as ReCaptcha which filters spam out of form submissions which could contain possibly harmful material from internet robots which have been programmed by hackers'
                />
                <ServicesCard
                Img = {logistics}
                title = 'Logisitcs and Maintenance Support'
                header1 = 'Heavy Lifting'
                content1 = 'My clients do not have to worry about financing any hardware like servers which are required in building their websites as that burdern is taken care of by myself and my team'
                header2 = 'Consultancy'
                content2= 'I provide consultancy for my clients so that they can be aware of the kind of website which suits their business model and how it can increase their profit margin'
                />
                
            </div> 
            <Footer/>   
        </div>
    )
}

export default Services
