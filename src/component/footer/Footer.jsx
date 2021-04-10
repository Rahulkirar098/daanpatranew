import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Footer = () => {
	return (
		<Fade top>

		<footer className="footer">
			<div className="div-opacity" >
				<div className="div-color">
					<div className="row">
						<div className="footer-col">
							<h4>About us</h4>
							<ul className="ul">
								<li><Link to="/weare">We Are</Link></li>
								<li><Link to="/whatwedo">We Do</Link></li>
								<li><Link to="/galleryhome">Gallery</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/faq">FAQ</Link></li>
							</ul>
						</div>
						

						<div className="footer-col">
							<h4>Address</h4>
							<ul className="ul">
								<li><a href="rahul"><i className="far fa-phone"></i>.  .6263362660, 7828383066 </a></li>
								<li><a href="rahul"><i className="fad fa-envelope-square"></i>DAANPATRA18@GMAIL.COM </a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>App </h4>
							<ul className="ul">
								<li><a href="rahul"><i className="fab fa-app-store-ios"></i> Apple store</a></li>
								<li><a href="rahul"><i className="fab fa-google-play"></i> play store</a></li>

							</ul>
						</div>
						<div className="footer-col">
							<h4>follow us</h4>
							<div className="social-links">
								<a href="https://www.facebook.com/DaanpatraApp/"><i className="fab fa-facebook-f"></i></a>
								<a href="https://twitter.com/DaanpatraApp?s=08 "><i className="fab fa-twitter"></i></a>
								<a href="https://youtube.com/channel/UCksP5RUnofyLfadbxrCN0hw"><i className="fab fa-instagram"></i></a>
								<a href="https://www.instagram.com/_daanpatra_/"><i className="fab fa-youtube"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer >
		</Fade>


	)
}
export default Footer;