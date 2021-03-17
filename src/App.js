import React from 'react';

import './App.css';

import { Nav } from './layout';

import {Home ,About,Contact,Skills,Projects,Services} from './spa';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 


export default function App() {
  return (<div className="body">
  
    
   



 
    <Router>
   
      <Nav />
      <Switch>
       

        <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>


           <Route path="/projects">
            <Projects />
          </Route>


           <Route path="/services">
            <Services />
          </Route>












            <Route path="/contact">
            <Contact />
          </Route>
          
           <Route path="/">
            <Home />
          </Route>
     </Switch>
     </Router>

      </div>
  );
}


