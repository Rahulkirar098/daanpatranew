import React, { useState } from 'react'
import  "./faqdashboed.css";

function FAQdashbord() {
    const [Privacy, setPrivacy] = useState(false);

    const [Conditions, setConditions] = useState(false);
  
  
    return (
        <div className="faq-page" id="faq">
        <h1 className="faq-h1">FAQ</h1>
  
      <div className="faq">
  
        <h1 className="h1-Policy" onClick={() => {
  
          setPrivacy(!Privacy);
  
        }}>What is a Privacy Policy?</h1>
  
        { Privacy ?
          <div className="Privacy-policies" >
  
            <p className="p-Policy"><i className="far fa-hand-point-right"></i> A Privacy Policy is a statement or a legal document that states how a company or website collects,
            handles and processes data of customers and visitors. It explicitly describes whether that information is kept confidential,
        or is shared with or sold to third parties.</p>
            <p className="p-Policy-1"><i className="far fa-hand-point-right"></i> Personal information about an individual may include the following:</p>
  
        
              <h3 className="h3-Active">Name</h3>
              <h3>Address</h3>
              <h3>Email</h3>
              <h3>Age</h3>
              <h3>Sex</h3>
              <h3>Phone number</h3>
              <h3>Marital status</h3>
            
  
          </div>
          : null}
  
        <h1 className="h1-conditions" onClick={() =>{
          setConditions(!Conditions);
        }}>Terms and conditions</h1>
  
  { Conditions ? 
        <div className="conditions">
          <p><i className="far fa-hand-point-right"></i> The donation you give is given by making changes, so there may be a change in the given item.</p>
          <p><i className="far fa-hand-point-right"></i> The daanpatra team invites donors time to time, so that the donor can know how  donation is being given by daanpatra.</p>
          <p><i className="far fa-hand-point-right"></i> The daanpatra  app, website is designed for philanthropy, so any type of blame will be considered in the category of defamation.</p>
          <p><i className="far fa-hand-point-right"></i> The daanpatra accepts only those things which can help the needy and bring changes in their lives, so the goods which are used in drugs or violent acts are rejected by Avwebworld Pvt. Ltd.</p>
          <p><i className="far fa-hand-point-right"></i> Any kind of stolen or disputed item by daanpatra  is unacceptable.  Donor shall be responsible for any disputed or stolen goods donated by them. Daanpatra team and Avwebworld Pvt. Ltd. shall not be part of any legal proceedings.</p>
          <p><i className="far fa-hand-point-right"></i> The Daanpatra  helps the needy in the villages and towns, so the daanpatra  is not accountable for what  are they doing with given things.</p>
          <p><i className="far fa-hand-point-right"></i> Terms and conditions will be changed from time to time by the daanpatra  and Avwebworld Pvt. Ltd.</p>
          <p><i className="far fa-hand-point-right"></i> The donor will be responsible for the quality of the food items donated in daanpatra .</p>
          <p><i className="far fa-hand-point-right"></i> For any kind of information, you can contact on daanpatra helpline number 6263362660, 7828383066. Apart from this, there is no helpline number of daanpatra. Also if someone contacts you from another number, then he is not a member of daanpatra .</p>
          <p><i className="far fa-hand-point-right"></i> When donating in the daanpatra app ,website ,all terms and conditions given in it will be  applied on you automatically , because we expect that you are doing  donation after reading all terms and conditions given in it.</p>
          <p><i className="far fa-hand-point-right"></i> Donations given in the daanpatra  cannot be returned to you as it has been given by the team to needy.</p>
          <p><i className="far fa-hand-point-right"></i> No pressure has been made by the daanpatra  team to donate to you, you are voluntarily donating in it. Daanpatra  or Avwebworld Pvt. Ltd. is not responsible for any dispute.</p>
          <p><i className="far fa-hand-point-right"></i> Donation of funds is not accepted by the daanpatra  & team members, so Avwebworld Pvt. Ltd.is not responsible if money etc. is demanded by someone associated with the daanpatra or any involvement of the person involved in such activity. </p>
          <p><i className="far fa-hand-point-right"></i> Daanpatra  app, website, logo, design, concept, content etc are   avwebworld's Designed and maintained by Avwebworld Pvt. Ltd. so without permission of  Avwebworld Pvt. Ltd.No one can use these  otherwise it will be taken legal proceedings.</p>
          <p><i className="far fa-hand-point-right"></i> There are some extra activities from time to time by the daanpatra  team to help  needy, in which many volunteered to contribute their time and become part of this noble cause for some time and we respect their emotions  from the heart , but no one has been given the right by the daanpatra team and the Avwebworld Pvt. Ltd. to use these initiative and  name of these movement in any way without permission.</p>
        </div>
  :null}
  
      </div>
      </div>
    )
}

export default FAQdashbord
