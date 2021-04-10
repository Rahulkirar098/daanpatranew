import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from "../../assect/gallery.png";
import Press from '../../assect/Press.jpg'
import './gallery.css'

const GalleryHome = () => {

    return (

        <div className="GalleryHome">

            <div className="GH-left">

                <Link to="/gallery"> <img src={Gallery} alt="img"></img></Link>

            </div>

            <div className="GH-right">

                <Link to="/gallery"><img src={Press} alt="img"></img></Link>

            </div>
            
        </div>
    )

}
export default GalleryHome;