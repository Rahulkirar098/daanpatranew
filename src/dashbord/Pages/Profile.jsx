import React from 'react'
import ProfileImg from "../../assect/avatar.svg";
import './profile.css'


function Profile() {
    return (
        <div className="profile-Dashbord">
            <img src={ProfileImg} alt="profile_Img" />
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>Phone</h1>
        </div>
    )
}

export default Profile
