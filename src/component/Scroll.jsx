import React, { useState,useEffect } from "react";
import { useWindowScroll } from "react-use";
import "./App.css";

const Scroll = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 200) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);
    if (!visible) {
        return false;
    }

    const scrollTotop = () =>{
        window.scrollTo({ top:0, behavior: "smooth" })
    }

    

    return (
        <>

            <div className="scroll coursor-pointer text-center" onClick={scrollTotop}>

                <i className="icon fas fa-chevron-up"></i>
                
            </div>

        </>
    )
};

export default Scroll;