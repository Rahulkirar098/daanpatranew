import React, {useState} from "react";
import "./contact.css";
import ContactImage from "../../../assect/Contact.gif";
import swal from "sweetalert";

const Contact = () => {

  const[first_name,setFristName] = useState('');
  const[last_name,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[contact_no,setContact_no] = useState('');
  const[message,setMessage] = useState('');


  const contactsubmit = (e) =>{
    e.preventDefault();
        
        let data = {first_name,last_name,email,contact_no,message};

        fetch("http://35.154.26.180/contact/",{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }).then((result)=>{
          console.log("result",result);
        })
        setFristName("")
        setLastName("")
        setEmail("")
        setContact_no("")
        setMessage("")
        
        swal("Good job!", "You Are Done!", "success");

      }


    return (

      <div className="contact">

        <div className="contact-left">
            <img src={ContactImage} alt="logo" />
        </div>

        <div className="contact-right">
        
        <form onSubmit={(e) => contactsubmit(e)} >

          <input className="input-name" placeholder="Frist Name" value={first_name} onChange={(e)=>{
            setFristName(e.target.value)}} />

          <input className="input-name" placeholder="Last Name" value={last_name} onChange={(e)=>{
            setLastName(e.target.value)}}/>
          <br />
          <br />
          <input className="input-all" placeholder="Email Address" value={email} onChange={(e)=>{
            setEmail(e.target.value)}}/>
          <br />
          <br />
          <input className="input-all" placeholder="Phone Number" value={contact_no} onChange={(e)=>{
            setContact_no(e.target.value)}}/>
          <br />
          <br />
          <input className="input-discripation" placeholder="Discription" value={message} onChange={(e)=>{
            setMessage(e.target.value)}}/>
          <br />
          <br />
          <button type="submit" >Submit</button>
        
          </form>

          </div>


      </div>
          

    )


}
export default Contact;