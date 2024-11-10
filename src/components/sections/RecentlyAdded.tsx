import React from 'react'
import Container from '../container/Container'
import SectionHeading from '../ui/SectionHeading'
import SellPropertyCard from '../cards/SellPropertyCard'
import { sellProperties } from '@/data/sell-properties'
import TogglePropertyType from '../ui/TogglePropertyType'

function RecentlyAdded() {
  const title = '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatem officiis vero mollitia dolorem voluptatum blanditiis repudiandae aut architecto ad!'
  return (
    <section className='py-20'>
      <Container>
     
     <SectionHeading heading='Recently Added' title={title}/>
      <TogglePropertyType/>
     <div className='pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
       {
         sellProperties.slice(0,4).map((item,index)=>(
         <SellPropertyCard property={item as any} key={index}/>
         ))
       }
     </div>
     <div className='flex justify-center pt-3'>
     <button className='px-6 py-3 border-2  border-secondary_color dark:text-white hover:bg-primary_color rounded-md text-color_primary font-semibold'>Browse More Properties...</button>
 </div>



</Container>
    </section>
  )
}

export default RecentlyAdded