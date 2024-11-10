import React from 'react'
import Container from '../container/Container'
import Link from 'next/link'
import ThemeSwitcher from '../ui/ThemeSwitcher'

const Header = () => {
  const navItems = [
    {
      title:'Home',
      path:'/'
    },
    {
      title:'Sell',
      path:'/sell'
    },
    {
      title:'Rent',
      path:'/rent-properties'
    },
    {
      title:'Find Agents',
      path:'/agents'
    },
    {
      title:'blogs',
      path:'/blogs'
    }
  ]


  return (
 <div className='max-w-[1400px] mx-auto px-2 lg:px-0'>
  
  <section className='py-4 flex items-center justify-between'>
  <img src="https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo-light.svg" alt=""   className='w-40'/>
   <nav className='lg:flex items-center gap-4 text-xl hidden lg:block  text-light_text_high_color dark:text-dark_text_high_color'>
    {
      navItems.map(item=>(
        <Link href={item.path} key={item.path} className='hover:text-secondary_color '>{item.title}</Link>
      ))
    }
   </nav>

   <nav className='flex items-center gap-2'>
    <ThemeSwitcher/>
    <button className='px-8 py-3 text-white bg-primary_color hover:bg-secondary_color rounded-full'>Sign Up</button>
   </nav>
 </section>
 
 </div>
  )
}

export default Header