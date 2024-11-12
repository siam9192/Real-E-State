'use client';
import React, { useState } from 'react';

const TogglePropertyType = () => {
  const [active, setActive] = useState(0);

  const changeTab = (index: number) => {
    setActive(index);
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={() => changeTab(0)}
        className={`px-8 py-3 text-xl duration-100 ${active === 0 ? ' bg-primary_color' : 'bg-dark_light_color'} text-white rounded-l-full hover:bg-secondary_color`}
      >
        Sell
      </button>
      <button
        onClick={() => changeTab(1)}
        className={`px-8 py-3 text-xl duration-100  ${active === 1 ? ' bg-primary_color' : 'bg-dark_light_color'} text-white rounded-r-full `}
      >
        Rent
      </button>
    </div>
  );
};

export default TogglePropertyType;
