import React, { useEffect } from 'react';
import axios from 'axios';

const ViewProperties = ({ properties, setProperties, deleteProperty }) => {
  useEffect(() => {
    // Fetch properties from backend
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };
    fetchProperties();
  }, [setProperties]);

  const handleDelete = async (id, index) => {
    try {
      await axios.delete(`http://localhost:5000/api/properties/${id}`);
      deleteProperty(index);
    } catch (error) {
      console.error('Error deleting property', error);
    }
  };

  return (
    <div className="view-properties">
      <h2>View Posted Properties</h2>
      {properties.length === 0 ? (
        <p>No properties posted yet.</p>
      ) : (
        <div className="property-list">
          {properties.map((property, index) => (
            <div key={index} className="property-item">
              <img src={property.imageUrl} alt={property.propertyName} />
              <h3>{property.propertyName}</h3>
              <p>Address: {property.address}</p>
              <p>City/State: {property.cityOrState}</p>
              <p>Price: {property.price}</p>
              <p>Sqft: {property.sqft}</p>
              <p>Price per Month: {property.pricePerMonth}</p>
              <p>Facing: {property.facing}</p>
              <p>Parking: {property.parking}</p>
              <p>Bathrooms: {property.bathroom}</p>
              <p>Bedrooms: {property.bedroom}</p>
              <button onClick={() => handleDelete(property._id, index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewProperties;
