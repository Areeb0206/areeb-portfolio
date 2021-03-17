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
                        
                        <p>works On</p>



                     </div>

                     <div className="top-project">

                          <div className="project1">
                              <div className="project1-left"></div>

                              <div className="project1-right"></div>



                          </div>

                          <div className="project2">

                             <div className="project2-left"></div>

                              <div className="project2-right"></div>


                          </div>

                          <div className="project3">

                              <div className="project3-left"></div>

                              <div className="project3-right"></div>




                          </div>



                     </div>


                



                </div>







         </div>


     </Layout> 

	);
}
