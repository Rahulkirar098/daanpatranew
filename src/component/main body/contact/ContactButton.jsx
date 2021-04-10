import React from "react";
import "./contactbutton.css";
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ContactButton = () => {
    return (
   
       

        <div className="contact-button">

                    <div className="contact-div1">
				<div className="contact-div2" >
            <div className="button-responsive">
            <Fade left>  <h1>Start Your Donation Journey With Us
</h1> </Fade>
<Fade right>
<button className="button"><span>


    <Link  exact to="/contact"  style={{color:"black"}}>Contact us </Link>
</span></button></Fade>
            </div>
</div></div>
        </div>

     


    )
};
export default ContactButton;