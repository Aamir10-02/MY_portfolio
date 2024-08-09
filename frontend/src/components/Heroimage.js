import "./HeroimageStyles.css";
import React from 'react';
import { ReactTyped } from "react-typed";

const Heroimage = () => {
    return (
        <div className="hero">
            <div className="mask"></div>
            <div className="content">
                <p className="acer">Hi, I'M AAMIR</p>
                <h1>I'm a{" "}
                    <ReactTyped
                        strings={[
                            '<span class="typed-web-developer">Web-Developer</span>',
                            '<span class="typed-ai-explorer">AI Explorer</span>',
                            '<span class="typed-web-designer">Web-Designer</span>'
                        ]}
                        typeSpeed={90}
                        loop
                        backSpeed={90}
                        showCursor={true}
                    />
                </h1>
                <div>
                    <a href="#project" className="btn">Projects</a>
                    <a href="#contact" className="btn btn-light">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Heroimage;
