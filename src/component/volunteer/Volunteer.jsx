import React,{useState} from "react";
import './volunteer.css';
import VolunteerGif from "../../assect/volunteer.gif";
import swal from "sweetalert";




const Volunteer = () => {

    const[full_name,setFullName] = useState('');
    const[email,setEmail] = useState('');
    const[contact_no,setContact_no] = useState('');
    const[address,setAddress] = useState('');

    const volunteersumit = (v) =>{
      
        v.preventDefault();

        let volunteerdata = {full_name,email,contact_no,address};

    // console.log({full_name,email,contact_no,address})

        fetch("http://35.154.26.180/volunteer/",{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(volunteerdata)
        }).then((result)=>{
          console.log("result",result);
        })
        
        setFullName("")
        setEmail("")
        setContact_no("")
        setAddress("")
      
        swal("Good job!", "You Are Done!", "success");



      }
        
    return (
        <div className="volunteer">

            <div className="volunteer-form">

                <form onSubmit={(v) => volunteersumit(v)}>

                    <input className="volunteer-input" placeholder="Name" value={full_name} onChange={(e)=>{
            setFullName(e.target.value)}} />
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Phone Number" value={contact_no} onChange={(e)=>{
            setContact_no(e.target.value)}}/>
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Address" value={address} onChange={(e)=>{
            setAddress(e.target.value)}}/>
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Email" value={email} onChange={(e)=>{
            setEmail(e.target.value)}}/>
                    <br />
                    <br />
                    <button type="submit" >Submit</button>
                </form>

            </div>

            <div className="right-volunteer">

                
            <img src={VolunteerGif} alt="img" />
            
            </div>

        </div>
    )
};

export default Volunteer;