// import "./AboutContentStyles.css";
// import React from 'react'
// // import { Link } from "react-router-dom";
// import { FaPython, FaJsSquare, FaPhp, FaHtml5, FaCss3Alt, FaWordpress,FaRobot, FaBullhorn, FaReact, FaDatabase, } from 'react-icons/fa';
// import digitalMarketingImage from '../assets/Digital marketing.jpg'; 
// import PhpImage from '../assets/Php Image.jpg'; 
// import wordpress from '../assets/Wordpress image.jpg'; 

// const AboutContent = () => {
//   return (
//     <div className="about">
//         <div className="left">
//             <h1>Who Am I?</h1>
//             < div className="bio-text">
//             <p>I am a Multidisciplinary Technologist with expertise in web development (HTML, CSS, JavaScript, React), backend development (Python, Flask), database management (PHP and SQL) and advanced technologies (Machine Learning, Artificial Intelligence). </p>
//         </div>
//         <div className="btn-container">
//         <a href="#contact">
//                     <button className="btn">Contact</button>
//         </a>
//         {/* <Link to="/contact">
//         <button className="btn">Contact</button>
//         </Link> */}
//         <a href="/cv.pdf" download>
//           <button className="btn">Download CV</button>
//         </a>
//         </div>
//         </div>
//         <div className="right">
//         <h1>Skills</h1>
//             <div className="skills">
//             <div className="skill">
//             <FaPython color="#3776AB" />
//             <p>Python</p>
//           </div>
//           <div className="skill">
//             <FaJsSquare color="#F7DF1E" />
//             <p>JavaScript</p>
//           </div>
//           <div className="skill">
//             <FaPhp color="#777BB4" />
//             <p>PHP</p>
//           </div>
//           <div className="skill">
//             <FaHtml5 color="#E34F26" />
//             <p>HTML</p>
//           </div>
//           <div className="skill">
//             <FaCss3Alt color="#1572B6" />
//             <p>CSS</p>
//           </div>
//           <div className="skill">
//             <FaDatabase size={50} color="#4479A1" />
//             <p>MySQL</p>
//           </div>
//           <div className="skill">
//             <FaReact color="#61DBFB" />
//             <p>React</p>
//           </div>
//           <div className="skill">
//             <FaWordpress color="#21759B" />
//             <p>WordPress</p>
//             </div>
//           <div className="skill">
//             <FaRobot color="#FFD700" />
//             <p>Machine Learning</p>
//           </div>
//           <div className="skill">
//             <FaBullhorn color="#FF4500" />
//             <p>Digital Marketing</p>
//           </div>  
//          </div>    
//        </div>
//        <div className="bottom">
//        <div className="heading"><h1>Certificates</h1></div>
//         <div className="certificate">
//           <img className="jpeg" src={digitalMarketingImage} alt="Digital Marketing Certificate" />
          
//         </div>
      
      
//         <div className="certificate">
//           <img className="jpeg" src={PhpImage} alt="php" />
          
//         </div>
      
      
//         <div className="certificate">
//           <img className="jpeg" src={wordpress} alt="wordpress" />
          
//           </div>
//       </div>
//     </div>
//   )
// }

// export default AboutContent;

import "./AboutContentStyles.css";
import React from 'react';
import { FaPython, FaJsSquare, FaPhp, FaHtml5, FaCss3Alt, FaWordpress, FaRobot, FaBullhorn, FaReact, FaDatabase } from 'react-icons/fa';
import digitalMarketingImage from '../assets/Digital marketing.jpg'; 
import PhpImage from '../assets/Php Image.jpg'; 
import wordpress from '../assets/Wordpress image.jpg'; 
import Msc from '../assets/MSC1.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AboutContent = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.2 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.2 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="about">
      <div ref={ref1} className={`left ${isVisible1 ? 'visible' : 'hidden'}`}>
        <h1>Who Am I?</h1>
        <div className="bio-text">
          <p>I am a Multidisciplinary Technologist with expertise in web development (HTML, CSS, JavaScript, React), backend development (Python, Flask), database management (PHP and SQL), and advanced technologies (Machine Learning, Artificial Intelligence).</p>
        </div>
        <div className="btn-container">
          <a href="#contact">
            <button className="btn">Contact</button>
          </a>
          <a href="/cv.pdf" download>
            <button className="btn">Download CV</button>
          </a>
        </div>
      </div>

      <div ref={ref2} className={`right ${isVisible2 ? 'visible' : 'hidden'}`}>
        <h1>Skills</h1>
        <div className="skills">
          <div className="skill">
            <FaPython color="#3776AB" />
            <p>Python</p>
          </div>
          <div className="skill">
            <FaJsSquare color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FaPhp color="#777BB4" />
            <p>PHP</p>
          </div>
          <div className="skill">
            <FaHtml5 color="#E34F26" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FaCss3Alt color="#1572B6" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FaDatabase size={50} color="#4479A1" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <FaReact color="#61DBFB" />
            <p>React</p>
          </div>
          <div className="skill">
            <FaWordpress color="#21759B" />
            <p>WordPress</p>
          </div>
          <div className="skill">
            <FaRobot color="#FFD700" />
            <p>Machine Learning</p>
          </div>
          <div className="skill">
            <FaBullhorn color="#FF4500" />
            <p>Digital Marketing</p>
          </div>
        </div>
      </div>

      <div ref={ref3} className={`bottom ${isVisible3 ? 'visible' : 'hidden'}`}>
        <div className="heading"><h1>Certificates</h1></div>
        <div className="certificate">
          <img className="jpeg" src={digitalMarketingImage} alt="Digital Marketing Certificate" />
        </div>
        <div className="certificate">
          <img className="jpeg" src={PhpImage} alt="PHP" />
        </div>
        <div className="certificate">
          <img className="jpeg" src={wordpress} alt="WordPress" />
        </div>
        <div className="certificate">
          <img className="jpeg" src={Msc} alt="MSC1" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
