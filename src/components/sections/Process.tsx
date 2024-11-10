import React from 'react'
import Container from '../container/Container';

function Process() {
    const data = [
        {
            title: 'View Property',
            description: 'Explore detailed images and information about the property, including location, size, amenities, and more. See what makes this home unique.'
        },
        {
            title: 'Contact Us',
            description: 'Have questions or need more details? Reach out to us through phone, email, or live chat. We’re here to help with all your property inquiries.'
        },
        {
            title: 'Request a Visit',
            description: 'Schedule a personal tour to experience the property firsthand. Choose a date and time that suits you, and we’ll arrange a guided visit.'
        },
        {
            title: 'Buy The House',
            description: 'Ready to make it yours? Take the next steps to secure this property. Our team will assist with the purchasing process from start to finish.'
        }
    ];
    

  return (
   
    <section  className='py-20'>
       <Container>
       <div className='flex justify-between lg:items-center flex-col md:flex-row gap-2'>
            <h1 className='dark:text-white text-3xl md:text-4xl font-medium flex-1'>Easy Step to Buy Property Resido Real estate</h1>
            <p className='flex-1 text-light_text_medium_color dark:text-dark_text_medium_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam aliquam commodi laborum illum culpa mollitia vel, ratione repellat nostrum.</p>
        </div>
       <div className='grid grid-cols-2 lg:grid-cols-4  gap-0 md:gap-5 py-10'>
       {
            data.map((item,index)=>(
                <div className='p-5 space-y-3 hover:bg-secondary_color hover:rounded-md hover:cursor-pointer duration-200' key={index}>
                    <div className='  size-10 p-3 rounded-full  flex  text-2xl justify-center items-center bg-primary_color  dark:text-white'>
                        {index+1}.
                    </div>
                    <h1 className='text-2xl font-medium dark:text-white'>{item.title}</h1>
                    <p className= 'text-light_text_medium_color dark:text-dark_text_medium_color'>
                        {
                            item.description
                        }
                    </p>
                </div>
            ))
        }
       </div>

       <div className='md:flex justify-between items-center hidden md:block'>
        <p className='text-light_text_medium_color dark:text-dark_text_medium_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatum error aspernatur cum iusto eius dolore. A corrupti consectetur cupiditate!</p>
        <button className='border-2 hover:bg-primary_color hover:border-none dark:text-white border-dark_text_low_color px-6 py-2 rounded-full'>See Our FAQ</button>
       </div>

       </Container>
    </section>
  
  )
}

export default Process