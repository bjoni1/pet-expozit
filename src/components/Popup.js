import React from 'react';

const Popup = ({ animal, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={animal.name} />
        <p>Origin: {animal.origin}</p>
        <p>Description: {animal.description}</p>
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
