import React from 'react'

import { Layout } from '../../layout';
import './Contact.css'

export default function Contact() {
	return(

     <Layout>
        
           <div className="contact">

               <div className="in-contact">

                    <div className="contact-heading">

		                    <h1><span className="dot">.</span>contact<span className="bracket">( )</span></h1>
		                    
		                    <p>contact me</p>

                    </div>





                    <div className="three-box">
                         
                         <div className="tb-left">
                            <h2>Email</h2>
                            <p>masafvi58@gmail.com</p>


                         </div>

                         <div className="tb-mid">
                         <h2>Phone Number</h2>
                         <p>+91 9565983511</p>


                         </div>


                         <div className="tb-right">

                            <h2>Address</h2>
                            <p>317,Atia Colony, Lakhimpur Kheri, Uttar Pradesh</p>


                         </div>

                       



                    </div>



               </div>


           </div>





     </Layout>

	);
}
