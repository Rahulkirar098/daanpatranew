import React from "react";
import "./navbar.css"
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import logo from "../../assect/logo11.png";
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';


const Head = () => {

    return (

            <header>

                <nav className="nav">
                    <input id="nav-toggle" type="checkbox" />
                    <Bounce top>
                   <Link to="/"> <img className="logo" src={logo} alt="logo" /></Link>
                    </Bounce>
                        <Slide right>
                    <ul className="links">
                        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/weare">We Are</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/whatwedo">We Do</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/gallery">Gallery</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/login">Donate</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/Volunteer">Volunteer</NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li> 
                        
                    </ul>
                    </Slide>
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </nav>




            </header>

      
    )

};





export default Head;