import { IAgent } from '@/types/agent.type';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';

interface IProps {
  agent: IAgent;
}

function AgentCard({ agent }: IProps) {
  const fullName = Object.values(agent.name).join(' ');
  const concatArea = Object.values(agent.area).join(',');

  return (
    <div className="p-5 space-y-3">
      <img
        className="rounded-lg"
        src="https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg"
        alt=""
      />
      <div className="space-y-2">
        <h1 className=" text-xl md:text-2xl font-medium dark:text-dark_text_high_color">
          {fullName}
        </h1>
        <h2 className="flex items-center gap-2">
          <span className="text-xl text-secondary_color">
            <FaLocationArrow />
          </span>
          <span className=" text-[0.9rem] md:text-xl text-dark_text_medium_color break-words">
            {concatArea}
          </span>
        </h2>
      </div>
      <button className="w-full border-secondary_color py-3 border-2 dark:text-dark_text_low_color font-medium rounded-lg hover:bg-primary_color dark:hover:text-white hover:border-none duration-200 ease-in-out">
        View Profile
      </button>
    </div>
  );
}

export default AgentCard;
