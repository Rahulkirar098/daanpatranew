import React from "react";
import "./whatwedo.css"
import Chart from "../../assect/chart.png";
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade';
import Food from '../../assect/ingredients.png'
import Applinces from '../../assect/download (1).png'
import Cloths from '../../assect/download.png'

const WhatWeDo = () => {
    return (<>
        <Fade top>
            <div className="whatwedo" id="wedo">
                <center><h1 className="wedo-h1">How Daanpatra Work</h1></center>
                <p className="wedo-p">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }} onInit={(wedo) => {
                            wedo.typeString(`At Daanpatra, we provide practical, tangible help that makes an immediate difference to orphaned children. We are working towards a day when every child can grow up in a loving family.`)
                                .pauseFor(2000)
                                .start();
                        }}
                    /></p>

                <img className="chart-digram" src={Chart} alt="chart" />

                <div className="wedo-pwf">

                    <div className="Hunger">
                        <img src={Food} alt="img" />
                        <h2>Raw Food</h2>
                        <p>We aim to redistribute surplus food to those who are in need of it. Please call our helpline, our volunteers will collect the excess food.</p>
                    </div>

                    <div className="Clothing">
                        <img src={Cloths} alt="img" />

                        <h2>Clothing</h2>
                        <p>while you have extra clothes, there is someone out there in the need of clothes care of others and DONATE NOW.</p>
                    </div>

                    <div className="Financial ">
                        <img src={Applinces} alt="img" />
                        <h2>Other</h2>
                        <p>Donate reusable items from the convenience of
your house. Avail doorstep pickup and get your donations delivered to the ones in need.</p>
                    </div>

                </div>

            </div>
        </Fade>
    </>
    )

};
export default WhatWeDo;