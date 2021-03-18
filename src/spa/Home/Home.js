import React, {Component} from 'react';


import { Layout } from '../../layout';
import TextLoop from "react-text-loop";

import './Home.css';
import { Link } from 'react-router-dom';



export default class Home extends Component {

render()
{

 
	return(
	<div className="index">	
                 

     <Layout>

         <div className="home">
                


 

			     <div className="inhome">


			   
					 <div className="intro">

				         <h2><span className='first'>H</span>ello <span className="comma">,</span><span className="rest" > my name is </span></h2>

				         <h3>Mohd Areeb Safvi </h3>

					 </div>

					 <div className="text-loop">

					    <div className="text"> And I am a </div>

					    <div className="loop">

						           <TextLoop interval={1900}
								    fade={true}
								    springConfig={{ stiffness: 150, damping: 10 }}
								    >

									    <div className="one">UI / UX Designer</div>
									    <div className="one">Developer</div>
								       <div className="one">Blogger</div>

								   </TextLoop>

						</div>

					  </div>	


					
			    
			    
			         <div className="btn"><Link to="/contact"><button>Hire Me</button></Link> </div>  
			     </div>


                  <div className="right-section">

					      <div className="profile-image vert-move"></div>

					   

                  </div>
  



           </div>

     </Layout>

  
</div>

	);
  }
}