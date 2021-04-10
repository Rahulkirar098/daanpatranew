import React, { useContext} from "react";
import './sidebar.css'
import Userprofile from '../assect/avatar.svg'
import { Route, useHistory } from 'react-router-dom';
import { sidebardata } from "./sidebardata";
import Certificate from "./Pages/Certificate";
import Donate from "./Pages/Donate";
import Gallery from "../component/news gallary/Gallery";
import Volunteer from "../component/volunteer/Volunteer";
import FAQ from "../component/FAQ/FAQ";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthenticationCtxt } from "../context/authenticationCtxt";

const Sidebar = () => {
    const history = useHistory();
    const authCtxt = useContext(AuthenticationCtxt);

    const getuser = localStorage.getItem("name");

    const logout = () => {
        localStorage.clear();
        authCtxt.setAuthData(undefined);
        history.push('/')
    }
    
   

    return (
        <div className="dashbord-sidebar">
            <div className="sidebar">
                <div className="Profile">
                    <img className="userprofile" src={Userprofile} alt="profile" />
                   <h2>{getuser}</h2>

                </div>
                <ul className="sidebarmenu">
                    {sidebardata.map((val, key) => {
                        return (
                            <li className="sidebarli" id={window.location.pathname === val.link ? "active" : ""} key={key} onClick={() => {
                                window.location.pathname = val.link
                            }}>
                                <div id="sideicon">{val.icon}</div>
                                <div id="sidetitle">{val.title}</div>
                            </li>
                        )
                    })}

                    <li className="sidebarli"><div id="sideicon"><ExitToAppIcon /></div>
                        <div id="sidetitle" onClick={logout}>Logout</div>
                    </li>


                </ul>
            </div>
            <div className="right-dashbord">


                <Route exact="true" path="/donate" component={Donate} />     
                <Route exact="true" path="/certificate" component={Certificate} />
                <Route exact="true" path="/gallerys" component={Gallery} />
                <Route exact="true" path="/volunteers" component={Volunteer} />
                <Route exact="true" path="/faqs" component={FAQ} />


            </div>
        </div>
    )
}

export default Sidebar;