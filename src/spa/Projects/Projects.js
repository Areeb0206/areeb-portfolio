import React from 'react'

import { Layout } from '../../layout';
import './Project.css';




export default function Projects() {
	return(

     <Layout>
         
            <div className="project">

                <div className="in-project">


                     <div className="project-heading">

                        <h1><span className="dot">.</span>project<span className="bracket">( )</span></h1>
                        
                        <p>recent  projects</p>



                     </div>

                     <div className="top-project">

                          <div className="project1">
                              <div className="project1-left">
                              

                                  <h3>Project - 1</h3>
           
                                  <h4>Pubg-Mobile</h4>
                                  <p>The first and most extraordinary Battle Royale, better than the original. And thats why i have created this websiteso that anyyone can download this game  </p>

                              </div>

                              <div className="project1-right">

                                       <div className="link1-image"></div>

                                       <div className="link1"><a href="https://areeb0206.github.io/pubg">https://areeb0206.github.io/pubg</a></div>

                              </div>



                          </div>

                          <div className="project2">

                             <div className="project2-left">


                                    <div className="link2-image"></div>
                                    <div className="link2">
                                     <a href="https://areeb0206.github.io/single-page-application/">https://areeb0206.github.io/single-page-application/</a></div>
                                     </div>

                              <div className="project2-right"> 
                                <h3>Project - 2</h3>
           
                                  <h4>Hospital</h4>
                                  <p>Its a SPA (single page application) Hospital website , From where anyone can get appointment and contact us for any queries</p></div>


                          </div>


                          

                          <div className="project3">

                              <div className="project3-left">  
                               <h3>Project - 3</h3>
           
                                  <h4>Hospital Dashboard</h4>
                                  <p>Its not a responsive website (only Desktop View) . It enables healthcare professionals to access important patient statistics in real-time to increase the overall hospital performance and patient satisfaction.</p>


                              </div>

                              <div className="project3-right">
                              <div className="link3-image"></div>
                              <div className="link3">
                              <a href="https://coronacovid.herokuapp.com/">https://coronacovid.herokuapp.com/</a></div>


                              </div>




                          </div>



                     </div>


                



                </div>







         </div>


     </Layout> 

	);
}
