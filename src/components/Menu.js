import React from 'react';

const Menu = ({ setSelectedType }) => {
  return (
    <nav>
      <a href="#" onClick={() => setSelectedType('Dogs')}>Dogs</a>
      <a href="#" onClick={() => setSelectedType('Cats')}>Cats</a>
      <a href="#" onClick={() => setSelectedType('Birds')}>Birds</a>
      <a href="#" onClick={() => setSelectedType('About')}>About Us</a>
      <a href="#" onClick={() => setSelectedType('Contact')}>Contact Us</a>
    </nav>
  );
};

export default Menu;
