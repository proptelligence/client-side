import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyList from '../PropertyList';

const CityPropertyList = () => {
  const { city } = useParams();
  return <PropertyList cities={[city]} />;
};

export default CityPropertyList;
