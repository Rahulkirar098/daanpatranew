import React from "react";
import "./home.css";
import Slide from "./slide";
import Weare from "../weare/Weare";
import WhatWeDo from "../../We do/Whatwedo";
import News from "../news/News";
import ContactBtn from '../contact/ContactButton'


const Home = () => {



    return (
        <>
            <div className="background" id="home">
            <Slide />
            </div>
            <Weare />
            <WhatWeDo />
            <ContactBtn />
            <News />

        </>
    )

}
export default Home;
