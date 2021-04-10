import React from "react";
import "../news/news.css";
import BBC from "../../../assect/bbc.mp4";
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade';


const News = () => {
    return (
        <>
                <Fade top>
            <div className="news-section">

                <div className="news-text">
                    <h2 > SUCCESS STORIES</h2>
                    <h1> <Typewriter 
                 options={{
                    autoStart: true,
                    loop: true,
                  }}onInit={(bbctype)=>{
                    bbctype.typeString("BBC News")
                    .pauseFor(2000)
                    .start();
                  }}
                  /></h1>
                    <p>BBC News Hindi covered Daanpatra in their episode. The video received great
                    response and garnered appreciation from all over the world. This led to people from all over the world
                    inquiring about daanpatra and wanting to adapt it in their respective places..</p>
                </div>

                <div className="img-div">

                    <video controls>
                        <source src={BBC} />
                    </video>

                </div>

            </div>
            </Fade>
        </>
    )
}
export default News;