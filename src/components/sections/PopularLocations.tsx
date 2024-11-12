import React, { useEffect, useState } from 'react';
// import 'aos/dist/aos.css';
import Heading from '@/components/ui/SectionHeading';
import Container from '../container/Container';
import PopularLocationCard from '../cards/PopularLocationCard';

const PopularLocations = () => {
  const locationValues = [
    {
      name: 'Los Angeles',
      image: 'https://i.ibb.co/Rywt1jz/los-angels.jpg',
      properties: 5684,
    },
    {
      name: 'Chicago',
      image: 'https://i.ibb.co/pLfFjbd/chicago.jpg',
      properties: 7,
    },
    {
      name: 'San Francisco',
      image: 'https://i.ibb.co/R7HF4M1/sanfran.jpg',
      properties: 9,
    },
    {
      name: 'Miami',
      image: 'https://i.ibb.co/Xxsw8jX/miami.jpg',
      properties: 7,
    },
    { name: 'Houseton', image: '', properties: 200974 },
    {
      name: 'London',
      image: 'https://i.ibb.co/RSDKd9y/london.webp',
      properties: 4300,
    },
  ];

  return (
    <div className="font-pop py-20">
      <Container>
        <Heading
          heading={'Popular Locations'}
          title={'Properties In Most Popular Places'}
        ></Heading>
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-2">
          {locationValues.map((location, index) => {
            return <PopularLocationCard key={index} location={location} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default PopularLocations;
