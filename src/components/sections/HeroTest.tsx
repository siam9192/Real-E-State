import React from 'react';
import '@/styles/Hero.style.css';
import Header from '../shared/Header';
import Container from '../container/Container';

function Hero() {
  const propertyTypes = [
    {
      title: 'For Sale',
      value: 'Sale',
    },
    {
      title: 'For Rent',
      value: 'Rent',
    },
  ];
  return (
    <section className="hero">
      <Header />
      <Container>
        <div className="grid grid-cols-2">
          <div className=" space-y-4  mx-auto  py-10">
            <h1 className="font-medium text-6xl text-light_text_high_color dark:text-dark_text_high_color">
              Find Your <span className="text-primary_color">Dream</span>{' '}
              Property
            </h1>
            <p className="text-light_text_medium_color dark:text-dark_text_medium_color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              iure labore id numquam delectus corrupti. Repellat nesciunt
              doloremque incidunt voluptates earum cumque blanditiis,
              exercitationem quas enim debitis animi eligendi qui. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Incidunt, dolorum?
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
