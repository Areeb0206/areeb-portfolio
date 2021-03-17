import React from 'react';
import './Services.css';

import { Layout } from '../../layout';



export default function Services() {
	return(

     <Layout>
         <div className="services">

                <div className="in-services">
                     <div className="service-heading">

                        <h1><span className="dot">.</span>services<span className="bracket">( )</span></h1>
                        <p>what i offer</p>



                     </div>

                     <div className="top-services">

                          <div className="fead">

                              <div className="fead-image"></div>
                              <div className="fead-heading">Front-end Architechture and Design</div>
                              <div className="fead-content">It's been couple of years, i am making responsive wesbites. I have been a part of some very good web design projects.</div>



                          </div>

                          <div className="spaad">

                              <div className="spaad-image"></div>
                              <div className="spaad-heading">SPA Application & Development</div>
                              <div className="spaad-content">Having a short experience of SPA but in addition to that , couple of my SPA websites are live . Can go through my <span className="lol">project</span> Section    </div>





                          </div>

                          <div className="uiuxd">

                              <div className="uiuxd-image"></div>
                              <div className="uiuxd-heading">UI/UX App Development</div>
                              <div className="uiuxd-content">UI/ UX development services of data-driven, highly scalable web applications with a rich user interface.</div>




                          </div>







                     </div>


                     <div className="bottom-services">


                          <div className="ampad">

                              <div className="ampad-image"></div>
                              <div className="ampad-heading">AMP App Development</div>
                              <div className="ampad-content">Helps us to load Faster web pages and optimized it for mobile web browsing</div>





                          </div>

                          <div className="hcd">


                              <div className="hcd-image"></div>
                              <div className="hcd-heading">HTML5 / CSS Development</div>
                              <div className="hcd-content">Having quite a long experience in it . Three to Four Projects (responsive)  are live , can go through my <span className="lol"> Project </span>Section.</div>





                          </div>

                          <div className="rds">

                              <div className="rds-image"></div>
                              <div className="rds-heading">React Development</div>
                              <div className="rds-content">It's been six months , i have been working on REACT, made couple of projects (live) using React, woked on API's and SPA as i had mentioned it in my CV</div>



                          </div>


                     </div>



                </div>







         </div>


     </Layout>

	);
}
