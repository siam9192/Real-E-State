import DownloadApp from '@/components/sections/DownloadApp';
import Featured from '@/components/sections/Featured';
import FeaturedAgents from '@/components/sections/FeaturedAgents';
import Hero from '@/components/sections/Hero';
import PopularLocations from '@/components/sections/PopularLocations';
import Process from '@/components/sections/Process';
import RecentlyAdded from '@/components/sections/RecentlyAdded';
import Testimonial from '@/components/sections/Testimonial';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import React from 'react';

function page() {
  return (
    <div>
      <Hero />
      <PopularLocations />
      <Process />
      <RecentlyAdded />
      <WhyChooseUs />
      <Featured />
      <Testimonial />
      <FeaturedAgents />
      <DownloadApp />
    </div>
  );
}

export default page;
