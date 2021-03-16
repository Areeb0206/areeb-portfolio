import React from 'react';


import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';  


function Navbr() {
  return(
     <div >

       <Navbar collapseOnSelect expand="lg" className="navbar">
            <div className="innavbar">
               <div className="portfolio">

                 
                   <Link to="/"><h1 className="porto">Portfo<span className="span">lio.</span></h1></Link>
                </div>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle"/>
                  <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
               
                <div className="headings"> 
                       <Link to="/Home" className="link">Home</Link>
                       <Link to="/About" className="link">About</Link>
                           <Link to="/Skills" className="link">Skills</Link>
                                           
                        <Link to="/Services" className="link">services</Link>
                             <Link to="/Projects" className="link">Projects</Link>
                       <Link to="/Contact" className="link">Contact</Link>

                   

                  </div>    
             </Navbar.Collapse>
             </div>
</Navbar>

</div>
    
    );

}

export default Navbr;
