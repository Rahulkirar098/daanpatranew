import React,{useState,useEffect} from "react";
import { useWindowScroll } from "react-use";
import  './Whatsaap.css';

const Whatsaap = () =>{
    const { y: pageYOffset } = useWindowScroll();
    
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 200) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, 
    [pageYOffset] );
    if (!visible) {
        return false;
    }
    return(

        <div className="action">
           <a href="https://web.whatsapp.com/"> <i className="fa fa-whatsapp" aria-hidden="true"></i></a>
        </div>

    )
};

export default Whatsaap;