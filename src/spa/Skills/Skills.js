

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
		                                    <div className="html-text">HTML</div>
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
		                                    <div className="html-text">CSS</div>
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
		                                    <div className="html-text">Javascript</div>
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
		                                    <div className="html-text">React</div>
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
		                                    <div className="html-text">Python</div>
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
		                                    <div className="html-text">UI Design</div>
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
		                

		                       <div className="in-svg">


		                       </div>
 
                         </div>


                  </div>
  

           </div>


     </Layout>

	);
}
