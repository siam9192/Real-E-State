import Link from 'next/link';
import React from 'react';

interface IProps {
  location: {
    image: string;
    name: string;
    properties: number;
  };
}

const PopularLocationCard = ({ location }: IProps) => {
  return (
    <Link
      href={`/properties?location=${location.name}`}
      className="flex  text-white  items-center    font-pop rounded-md shadow hover:bg-gray-50 hover:dark:bg-dark_light_color"
    >
      <div>
        <img
          src={location.image || '/images/1.jpg'}
          alt=""
          className="md:h-52 md:w-60 w-40 h-32  rounded-l-md"
        />
      </div>
      <div className="space-y-1 px-5 ">
        <h3 className="md:text-2xl text-xl">{location.name} </h3>
        <p>{location.properties} Properties</p>
      </div>
    </Link>
  );
};

export default PopularLocationCard;
