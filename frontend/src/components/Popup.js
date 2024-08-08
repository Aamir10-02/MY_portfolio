import React from 'react';
import './PopupStyles.css';

const Popup = ({ message, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{message}</p>
        <button className="btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
