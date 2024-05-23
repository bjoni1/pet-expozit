import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCards';
const AnimalGallery = ({ type }) => {
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/${type.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [type]);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search ${type}`}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="gallery">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalGallery;
