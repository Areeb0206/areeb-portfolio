

import { Layout } from '../../layout';
import './Skills.css';
import ProgressBar from 'react-animated-progress-bar';




export default function Skills() {
	return(

     <Layout>
            <div className="skills">


                  <div className="inskills">

                  

                        <div className="progress-bars-left">


                                   <div className="html">
		                                    <div className="html-text html"></div>
				                             <div className="html-progress">


										     <ProgressBar width="200"  trackWidth="6" percentage="90" 
										             

										             defColor={{
										                fair: '#fcaa22',
											            good: '#fcaa22',
											            excellent: '#fcaa22',
											            poor: '#fcaa22',
										              }}/>
				                              </div>
		                              </div>



		                                <div className="html">
		                                    <div className="html-text css"></div>
				                             <div className="html-progress">


										     <ProgressBar width="200"  trackWidth="6" percentage="85" 
										             

										             defColor={{
										                fair: '#fcaa22',
											            good: '#fcaa22',
											            excellent: '#fcaa22',
											            poor: '#fcaa22',
										              }}/>
				                              </div>
		                              </div>


		                                <div className="html">
		                                    <div className="html-text js"></div>
				                             <div className="html-progress">


										    <ProgressBar width="200"  trackWidth="6" percentage="40" 
										             

										             defColor={{
										                fair: '#fcaa22',
											            good: '#fcaa22',
											            excellent: '#fcaa22',
											            poor: '#fcaa22',
										              }}/>
				                              </div>
		                              </div>



		                         






   
                           



                        </div>












                        <div className="progress-bars-right">


                                   <div className="html">
		                                    <div className="html-text react"></div>
				                             <div className="html-progress">


										     <ProgressBar width="200" trackWidth="6" percentage="40" 
										             

										             defColor={{
										                fair: '#fcaa22',
											            good: '#fcaa22',
											            excellent: '#fcaa22',
											            poor: '#fcaa22',
										              }}/>
				                              </div>
		                              </div>



		                                <div className="html">
		                                    <div className="html-text python"></div>
				                             <div className="html-progress">


										      <ProgressBar width="200"  trackWidth="6" percentage="50" 
										             

										             defColor={{
										                fair: '#fcaa22',
											            good: '#fcaa22',
											            excellent: '#fcaa22',
											            poor: '#fcaa22',
										              }}/>
				                              </div>
		                              </div>


		                                <div className="html">
		                                    <div className="html-text uiux"></div>
				                             <div className="html-progress">


										   <ProgressBar width="200"  trackWidth="6" percentage="90" 
										             

										             defColor={{
										                fair: '#fcaa22',
											            good: '#fcaa22',
											            excellent: '#fcaa22',
											            poor: '#fcaa22',
										              }}/>
				                              </div>
		                              </div>



		                        






   
                           



                        </div>




                         <div className="svg">
		                
                              <div className="skill-heading">

                                  <h3><span className="dot">.</span>my skills<span className="bracket">( )</span></h3>
                                  <p>what i know</p>
 





                              </div>
		                       <div className="in-svg">


		                       </div>
 
                         </div>


                  </div>
  

           </div>


     </Layout>

	);
}
