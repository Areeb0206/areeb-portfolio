import React from 'react';

import { Layout } from '../../layout';
import './About.css';
import TextLoop from "react-text-loop";



export default function About() {
	return(


     <Layout>
          
             <div className="about">

                  <div className="in-about">



                         <div className="about-heading">

                             <h1><span className="dot">.</span>about<span className="bracket">( )</span></h1>
                        
                            <p> who i am</p>



                         </div>



                         <div className="about-mid">





                                <div className="img vert-move">
                                   <div className="left-mid">

                                   </div>


                                   <div className="sm-icons">

                                      <a href="https://www.facebook.com/areeb.safvi/"><div className="fb"></div></a>

                                                                           <a href="https://www.instagram.com/rkf786/"> <div className="insta"></div></a>

                                                                         <a href="https://www.linkedin.com/in/mohd-areeb-safvi-92602b1a2/">   <div className="linkedin"></div></a>



                                   </div>
                 

                                </div>

                 

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
                                <div className="two">React Developer</div>
                                
														    <div className="two">Web Developer</div>
													       <div className="two">Blogger</div>

													   </TextLoop>
													   </div>
													</div>   
                                      

                                          <h2>
                                               Innovative Front-end Developer , building and maintaining responsive interfaces.
                                               I'm Fresher and i am very passionate and dedicated to my work. I've acquire the skills and knowledge necessay to make your projects a success.
												

                                          </h2>


                                        </div>


                                        <div className="right-bottom">
                                           <a href="https://drive.google.com/file/d/1iE4yfZV7UfUYRh5nDvHx7K9kWhICt4xq/view"><button>Download CV</button></a>


                                        </div>



                                </div>










                         </div>










                  </div>





             </div> 
            



     </Layout>

	);
}
