import React from 'react';
import './Social.css';

const Social = () =>{
    return(
        <>
                <div id="idebar">
  <div className="social facebook">
    <a href=" https://www.facebook.com/DaanpatraApp/ " target="_blank">
      <p>Like on Facebook <i className="fa fa-facebook "></i> </p>
    </a>
  </div>
  <div className="social twitter">
    <a href=" https://twitter.com/DaanpatraApp?s=08 " target="_blank">
      <p>Follow on Twitter<i className="fa fa-twitter"></i> </p>
    </a>
  </div>
  
  <div className="social youtube">
    <a href=" https://youtube.com/channel/UCksP5RUnofyLfadbxrCN0hw " target="_blank">
      <p> Subscribe on Youtube   .<i className="fa fa-youtube-play"></i> </p>
    </a>
  </div>
  <div className="social linkedin">
    <a href=" https://www.instagram.com/_daanpatra_/ " target="_blank">
      <p>Connect on Instagram    . <i className="fa fa-instagram" ></i> </p>
    </a>
  </div>
</div>
        </>
    )
};

export default Social;