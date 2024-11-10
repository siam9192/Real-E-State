
import { ISellProperty } from '@/types/sell-property.type'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import WiseListButton from '../ui/WiseListButton'
import { IoBedOutline } from 'react-icons/io5'
import { LuBath } from 'react-icons/lu'
import { TbArrowAutofitHeight } from 'react-icons/tb'


interface IProps {
  property:ISellProperty
}

function SellPropertyCard({property}:IProps) {
  
  const full_address = Object.values(property.address).join(',')
  
  return (
    <div className='p-5  space-y-5 '>
     <div className='relative' >
     <img src="https://firebasestorage.googleapis.com/v0/b/resido-real-state-9878.appspot.com/o/images%2F93.webp_8559b160-44a2-4808-b327-40489cd31f0f?alt=media&token=2c4638e6-58c0-4e72-bcf6-be9800ed3e7a" alt=""  className='rounded-lg'/>
     
     </div>
    <div className='space-y-3'>
   <WiseListButton id={property._id} is_added={true}/>
      <h6 className='flex items-center flex-wrap gap-2'>
        <span className='text-primary_color text-2xl'>
        <CiLocationOn />
        </span>
        <p className='dark:text-dark_text_medium_color text-[0.9rem] text-wrap'>
          {
            full_address
          }
        </p>
      </h6>
    <h1 className='text-black dark:text-dark_text_high_color text-xl '>{property.title}</h1>
    <div className='flex   gap-2 items-center py-3  dark:text-dark_text_medium_color'>
 <div className='flex items-center gap-2 '>
        <div className='p-2   bg-light_highlight_color dark:bg-dark_highlight_color  rounded-full'><IoBedOutline></IoBedOutline></div><p>{property.bedroom} Beds</p></div>
        <div className='flex items-center gap-2'>
        <div className='p-2 bg-light_highlight_color dark:bg-dark_highlight_color rounded-full'><LuBath></LuBath></div><p>{property.bathroom} Baths</p></div>
        <div className='flex items-center gap-2'>
        <div className='p-2  bg-light_highlight_color dark:bg-dark_highlight_color rounded-full'><TbArrowAutofitHeight
        ></TbArrowAutofitHeight></div><p>{property.area_size} Sqft</p></div>
       </div>
       <h1 className='text-2xl text-light_text_high_color dark:text-dark_text_high_color text-end'>
        $<span  className='text-primary_color font-medium'>{property.price}</span>
       </h1>
    </div>
    </div>
  )
}

export default SellPropertyCard