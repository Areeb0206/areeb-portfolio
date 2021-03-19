import React from 'react';


import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "aos/dist/aos.css"

import './Navbar.css';  


function Navbr() {
  return(
     <div >

       <Navbar collapseOnSelect expand="lg" className="navbar">
            <div className="innavbar">
               <div className="portfolio">

                 
                   <Link to="/"><h1 className="porto">.portfo(<span className="span">lio</span>)</h1></Link>
                </div>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle"/>

                  
                  <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
               
                <div className="headings"> 
                       <Link to="/Home" className="link"><span className="dot">.</span>home<span className="brackets">()</span></Link>
                       <Link to="/About" className="link"><span className="dot">.</span>about<span className="brackets">()</span></Link>
                           <Link to="/Skills" className="link"><span className="dot">.</span>skills<span className="brackets">()</span></Link>
                                           
                        <Link to="/Services" className="link"><span className="dot">.</span>services<span className="brackets">()</span></Link>
                             <Link to="/Projects" className="link"><span className="dot">.</span>projects<span className="brackets">()</span></Link>
                       <Link to="/Contact" className="link"><span className="dot">.</span>contact<span className="brackets">()</span></Link>

                   

                  </div>    
             </Navbar.Collapse>
             </div>
</Navbar>

</div>
    
    );

}

export default Navbr;
