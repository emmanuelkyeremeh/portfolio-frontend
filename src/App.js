import React from 'react'
import Nav from "./Nav"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import Home from "./Home"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"



const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path ="/services" component ={Services} />
          <Route path = "/contact" component = {Contact} />
        </Switch>  
      </div>
   </Router>
  )
  }
export default App
