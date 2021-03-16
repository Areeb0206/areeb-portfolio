import React from 'react'

import { Layout } from '../../layout';
import './About.css';
import TextLoop from "react-text-loop";




export default function About() {
	return(


     <Layout>
          
             <div className="about">

                  <div className="in-about">



                         <div className="about-heading">

                             <h1>About me</h1>
                        
                            <p> who i am</p>



                         </div>



                         <div className="about-mid">

                                <div className="img">
                                <div className="left-mid">

                                </div></div>


                                <div className="right-mid">



                                        <div className="right-top">
                                             <div className="about-us">
                                                    <div className="left-aboutus"><h4>Expert In</h4></div>
                                                    <div className="right-aboutus">

                                        
					                                  <TextLoop interval={1900}
													    fade={true}
													    springConfig={{ stiffness: 150, damping: 10 }}
													    >

														    <div className="two">UI / UX Designer</div>
														    <div className="two">Developer</div>
													       <div className="two">Blogger</div>

													   </TextLoop>
													   </div>
													</div>   
                                      

                                          <h2>
                                               Innovative Front-end Developer , building and maintaining responsive interfaces
                                               i am Fresher but having an experience in this are of work, with multiple quality projects
												

                                          </h2>


                                        </div>


                                        <div className="right-bottom">
                                           <button>Download CV</button>


                                        </div>



                                </div>










                         </div>










                  </div>





             </div> 
            



     </Layout>

	);
}
