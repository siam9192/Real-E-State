'use client';
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function Select() {
    const [selectedOption,setSelectedOption] = useState(0)
    const options = [
        {
         display:'Any',
         value:null
        },
        {
            display:'Any',
            value:''
           },
           {
            display:'Any',
            value:''
           },
              
    ]
  return (
    <div className='relative dark:text-white p-2 border rounded-md bg-dark_color'>
    <div className='flex items-center justify-between'>
      <span>
      {
            options[selectedOption].display
        }
      </span>
      <span className='text-3xl'>
        <MdOutlineKeyboardArrowDown/>
      </span>
    </div>
    </div>
  )
}

export default Select