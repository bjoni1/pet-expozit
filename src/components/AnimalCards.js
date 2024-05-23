import React, { useState } from 'react';
import Popup from './Popup';

const AnimalCard = ({ animal }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="card" onClick={togglePopup}>
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>{animal.origin}</p>
      {isPopupOpen && <Popup animal={animal} onClose={togglePopup} />}
    </div>
  );
};

export default AnimalCard;
