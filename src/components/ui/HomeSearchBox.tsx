'use client';
import React, { useState } from 'react'
import LocationInput from '../input/LocationInput'
import { CiSliderHorizontal } from 'react-icons/ci'

function HomeSearchBox() {
  const [typeIndex,setTypeIndex] = useState(0)
  const propertyTypes = [
    {
      title:'For Sale',
      value:'Sale'
    },
    {
      title:'For Rent',
      value:'Rent'
    }
  ]
  return (
    <div className=' '>
        <div className='flex justify-center items-center -mb-2 rounded-t-full  pt-8 pb-5 px-8  dark:bg-dark_light_color  backdrop-blur-lg      w-fit mx-auto '>
            {
              propertyTypes.map((type,index)=>(
                <button onClick={()=>setTypeIndex(index)} className={`px-4 py-3 hover:bg-primary_color text-white rounded-full text-xl   ${index === typeIndex ? 'bg-primary_color':''}`} key={type.title}>{type.title}</button>
              ))
            }
        </div>
      <div className='  rounded-lg   bg-white dark:bg-dark_light_color  backdrop-blur-lg  shadow-primary  p-5 space-y-4'>
    <div  className='flex items-center gap-5  md:flex-row flex-col '>
 <LocationInput/>
 <button className=' bg-secondary_color px-6 py-4 text-white hover:bg-primary_color rounded-lg flex items-center  md:w-fit w-full gap-2 '>
   <span className='text-2xl'><CiSliderHorizontal /></span>
   <span>Filters</span>
 </button>
 <button className=' bg-secondary_color px-6 py-4 text-white hover:bg-primary_color rounded-lg md:w-fit w-full '>
   Search
 </button>
    </div>

  </div>
    </div>
  )
}

export default HomeSearchBox