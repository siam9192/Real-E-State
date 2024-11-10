import React from 'react';

interface IProps {
    heading:string,
    title:string
}

const SectionHeading = ({heading,title}:IProps) => {
    return (
        <div className='space-y-2 font-jost'>
            <h1 className='text-center  dark:text-white  font-bold text-4xl '>{heading}</h1>
        <p className=' text-light_text_medium_color dark:text-dark_text_medium_color text-center md:w-1/2 mx-auto'>{title}</p>
            
        </div>
    );
}

export default SectionHeading;