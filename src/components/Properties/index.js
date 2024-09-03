import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../listing';
import './index.css';

const Properties = () => {
  const { location } = useParams();

  // Fetch properties for the selected city or state
  const locationProperties = properties[location] || [];

  return (
    <div>
      <h1>Properties in {location}</h1>
      {locationProperties.length > 0 ? (
        <div className="property-list">
          {locationProperties.map((property) => (
            <div key={property.id} className="property-item">
              <img src={property.propertyPhoto} alt={property.propertyName} />
              <h2>{property.propertyName}</h2>
              <p>{property.description}</p>
              <p><strong>Price:</strong> {property.price}</p>
              <p><strong>Locality:</strong> {property.Locality}</p>
              {/* Add other details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>No properties found for {location}</p>
      )}
    </div>
  );
};

export default Properties;
