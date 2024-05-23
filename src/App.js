import React, { useState } from 'react';
import Menu from './components/Menu';
import AnimalGallery from './components/AnimalGallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  const [selectedType, setSelectedType] = useState('Dogs');

  return (
    <div>
      <header>
        <h1>Pet Expo</h1>
        <Menu setSelectedType={setSelectedType} />
      </header>
      <main>
        {selectedType === 'About' && <AboutUs />}
        {selectedType === 'Contact' && <ContactUs />}
        {selectedType !== 'About' && selectedType !== 'Contact' && (
          <AnimalGallery type={selectedType} />
        )}
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;
