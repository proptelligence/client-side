import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Gurugram from '../../components/Assets/Gurugram.jpg';
import Patna from '../../components/Assets/Patna.jpg';
import Assam from '../../components/Assets/Assam.jpg';
import Bihar from '../../components/Assets/Bihar.jpg';
import Chattisgarh from '../../components/Assets/Chattisgarh.jpg';
import Gujarat from '../../components/Assets/Gujarat.jpg';
import Haryana from '../../components/Assets/Haryana.jpg';
import Kerala from '../../components/Assets/kerala.jpg';

const CityStateSelection = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  // City and state data
  const cityImages = {
    Mumbai: 'https://img.freepik.com/premium-photo/taj-mahal-hotel_78361-4512.jpg',
    Delhi: 'https://img.freepik.com/premium-photo/india-gate-background-cloudy-sky-sightseeing-new-delhi-view-from-road_431724-6913.jpg',
    Bangalore: 'https://as2.ftcdn.net/v2/jpg/03/11/94/23/1000_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg',
    Hyderabad: 'https://img.freepik.com/premium-vector/illustration-famous-indian-monument-charminar_674037-19.jpg',
    Kolkata: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
    Chennai: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
    Pune: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
    Ahmedabad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
    Gurugram: Gurugram,
    Patna: Patna,
  };

  const stateImages = {
    Telangana: 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/telangana-formation-day-significance.jpg',
    Maharastra: 'https://as2.ftcdn.net/v2/jpg/05/00/41/27/1000_F_500412750_1TPS73JprcwKPr2aI9D55M8DJ1hOtiKy.jpg',
    Karnataka: 'https://www.karnatakatourism.org/wp-content/uploads/2022/02/Photos-Banner.jpg',
    Andhrapradesh: 'https://i.pinimg.com/736x/1b/16/5e/1b165e9eeee66996b4d8e637b7e6cc4b.jpg',
    Tamilnadu: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
    Kerala: Kerala,
    Madyapradesh: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
    Goa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
    Assam: Assam,
    Bihar: Bihar,
    Chattisgarh: Chattisgarh,
    Gujarat: Gujarat,
    Haryana: Haryana,
  };
  

  const sortedCityImages = Object.fromEntries(
    Object.entries(cityImages).sort(([a], [b]) => a.localeCompare(b))
  );
  const sortedStateImages = Object.fromEntries(
    Object.entries(stateImages).sort(([a], [b]) => a.localeCompare(b))
  );

  // Filter function
  const filterItems = (items) => {
    return Object.entries(items).filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  };

  // Handler for when a city or state is clicked
  const handleLocationClick = (url) => {
    navigate(url);
  };

  return (
    <div className="city-state-selection">
      <h1>Select Your Location</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search cities or states..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2>Cities</h2>
      <div className="location-grid">
        {filterItems(sortedCityImages).map(([city, imageUrl]) => (
          <div
            key={city}
            className="location-item"
            onClick={() => handleLocationClick(`/prop/${city}`)}
          >
            <img src={imageUrl} alt={city} />
            <p>{city}</p>
          </div>
        ))}
      </div>

      <h2>States</h2>
      <div className="location-grid">
        {filterItems(sortedStateImages).map(([state, imageUrl]) => (
          <div
            key={state}
            className="location-item"
            onClick={() => handleLocationClick(`/prop/${state}`)}
          >
            <img src={imageUrl} alt={state} />
            <p>{state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityStateSelection;
