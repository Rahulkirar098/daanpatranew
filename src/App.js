import React, { useContext, useEffect } from "react";
import "./app.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch} from "react-router-dom";
import Home from "./component/main body/home/home";
import Footer from "./component/footer/Footer";
import Contact from "./component/main body/contact/contact";
import Weare from "./component/main body/weare/Weare";
import WhatWeDo from "./component/We do/Whatwedo";
import Navbar from "./component/navbar/Navbar";
import Error from "./component/Error/Error";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Gallery from "./component/news gallary/Gallery";
import GalleryHome from "./component/news gallary/topart";
import Scroll from "./component/Scroll";
import Social from "./component/social";
import Whatsapp from "./component/Whatsaap";
import Volunteer from "./component/volunteer/Volunteer";
import FAQ from "./component/FAQ/FAQ";
import Sidebar from "./dashbord/Sidebar";
import {
  AuthenticationCtxt,
} from "./context/authenticationCtxt";

function App() {
  // const location = useLocation();
  // const page = location.pathname.split("/");
  // const [isNavOpen, setIsNavOpen] = useState(true);
  const authCtxt = useContext(AuthenticationCtxt);

  useEffect(() => {
    // console.log(authCtxt.authData);
  }, [authCtxt.authData]);

  const phoneNo = localStorage.getItem("phoneNo");
  if (phoneNo) {
    authCtxt.setAuthData(phoneNo);
  }
  return (
    <div>

      {Boolean(authCtxt.authData) ? "" : <Navbar />}

      {Boolean(authCtxt.authData) ? <Sidebar /> : ""}

      <Switch>

          if(true){<>
            
        <Route exact="true" path="/" component={Home} />
        <Route exact="true" path="/Weare" component={Weare} />
        <Route exact="true" path="/whatwedo" component={WhatWeDo} />
        <Route exact="true" path="/galleryhome" component={GalleryHome} />
        <Route exact="true" path="/login" component={Login} />
        <Route exact="true" path="/volunteer" component={Volunteer} />
        <Route exact="true" path="/contact" component={Contact} />
        <Route exact="true" path="/signup" component={Signup} />
        <Route exact="true" path="/faq" component={FAQ} />
        <Route exact="true" path="/gallery" component={Gallery} />
          </>
          }
          else {
              <Route exact="true" component={Error} />
          }
      </Switch>

      {Boolean(authCtxt.authData) ? "" : <Footer />}
      {Boolean(authCtxt.authData) ? "" : <Social />}
      {Boolean(authCtxt.authData) ? "" : <Scroll />}
      {Boolean(authCtxt.authData) ? "" : <Whatsapp />}
    </div>
  );
}

export default App;
