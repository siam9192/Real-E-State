'use client';
import React, { useState } from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { IoMdHeartEmpty } from 'react-icons/io';

interface IProps {
  id: string;
  is_added: boolean;
}

function WiseListButton({ id, is_added }: IProps) {
  const [checked, setIsChecked] = useState(is_added);

  const handelAddWiseList = () => {
    setIsChecked(!checked);
  };

  return (
    <button
      onClick={handelAddWiseList}
      className="float-right text-2xl text-primary_color mb-3"
    >
      {checked ? <GoHeartFill /> : <GoHeart />}
    </button>
  );
}

export default WiseListButton;
