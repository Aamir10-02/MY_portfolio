import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Adjust the path as needed
import "./WorkCardStyles.css";

const WorkCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={ref}
      className={`project-card ${isFlipped ? 'flipped' : ''} ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleFlip}
    >
      <div className="thefront">
        <img src={props.imgsrc} alt="Project" />
        <h2 className="project-title">{props.title}</h2>
      </div>
      <div className="theback">
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <NavLink to={props.source} className="btn">Source Code</NavLink>
            <NavLink to={props.view} className="btn">View</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
