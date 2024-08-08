// import "./HeroimageStyles.css";
// import React,{ useEffect }from 'react';
// import IntroImg from "../assets/2.webp";
// import { Link } from "react-router-dom";

// const Heroimage = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const img = document.querySelector('.into-img');
//       const scrolled = window.scrollY;
//       img.style.transform = `translateY(${scrolled * 0.5}px)`; // Moves image slower than the scroll
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (<div className="hero">
//       <div className="mask">
      
//         <img className="into-img" src={IntroImg} alt="IntroImg" />
        
//       </div>
//       <div className="content">
//         <p className="acer">Hi, I'M AAMIR</p>
//         <h1>Aspiring Developer.</h1>
//         <div>
//           <Link to = "/project" className="btn">Projects</Link>
//           <Link to = "/contact" className="btn btn-light">Contact</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Heroimage;


// import "./HeroimageStyles.css";
// import React from 'react';
// import { Link } from "react-router-dom";
// import { ReactTyped } from "react-typed";

// const Heroimage = () => {

//     return (
//       <div className="hero">
//         <div className="mask"></div>
//         <div className="content">
//           <p className="acer">Hi, I'M AAMIR</p>
//           <h1>I'm a{" "}
//         <ReactTyped
//           strings={[
//             '<span class="typed-web-developer">Web-Developer</span>',
//             '<span class="typed-ai-explorer">AI Explorer</span>',
//             '<span class="typed-web-designer">Web-Designer</span>'
//           ]}
//           typeSpeed={90}
//           loop
//           backSpeed={90}
          
//           showCursor={true}
//         /></h1>
//           <div>
//             <Link to="/project" className="btn">Projects</Link>
//             <Link to="/contact" className="btn btn-light">Contact</Link>
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default Heroimage;


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
