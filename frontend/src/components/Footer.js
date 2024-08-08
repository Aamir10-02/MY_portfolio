import "./FooterStyles.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                <div>
                    <p>London.</p>
                    <p>United Kingdom</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}} />+44 7767-550-183</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                    <a href="mailto:aamir2saiyad@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>aamir2saiyad@gmail.com
                        </a>
                    </h4>
                </div>
            </div>



            <div className="right">
                <h4>About Me</h4>
                <p>This is me Aamir Saiyad. A passionate developer skilled in AI, ML, and web development, dedicated to creating innovative solutions. </p>
                <div className="social">
                <a href="https://github.com/Aamir10-02" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '3rem', marginRight: '2rem', color: 'white' }} />
                 </a>
                 <a href="https://www.linkedin.com/in/aamir-saiyad-926375204/" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '3rem', marginRight: '2rem', color: '#2D86F7' }} />
                 </a>
                 <a href="https://www.upwork.com/freelancers/~0130d3223d6864f22d" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faUpwork} style={{ fontSize: '2rem', marginRight: '2rem', color: 'green' }} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;