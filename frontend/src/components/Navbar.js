import "./Navbarstyles.css";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            
                <h1>Aamir Saiyad</h1>
            
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} />) : (<FaBars size={20} />)}
            </div>
        </div>
    );
};

export default Navbar;
