'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { LuHeart } from 'react-icons/lu';
import { RiHomeLine } from 'react-icons/ri';

function ProfileNav() {
  const [mouseIn, setMouseIn] = useState(true);
  const routes = [
    {
        title:'My Properties',
        icon:RiHomeLine,
        path:'/properties'
    },
    {
        title:'My Watch List',
        icon:LuHeart,
        path:'/my-watch-list'
    },
    
  ]
  return (
    <div className=" relative">
      <div
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
        className="flex items-center gap-2"
      >
        <img
          className="size-12 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
          alt=""
        />
        <span className="text-2xl text-dark_text_medium_color">
          <IoChevronDownOutline />
        </span>
      </div>
      {mouseIn ? (
        <div className="absolute p-5 right-0 top-14 min-h-52  w-72 bg-dark_light_color z-40 rounded-2xl">
          <div className="p-3 bg-dark_color flex items-center gap-2">
            <img
              className="size-12 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
              alt=""
            />
            <div className="space-y-1">
              <h3 className=" text-[0.9rem] md:text-[1rem] dark:text-dark_text_medium_color">
                Arafat Hasan
              </h3>
              <Link
                href={''}
                className="text-dark_text_low_color font-medium text-[0.rem]"
              >
                Edit Profile
              </Link>
            </div>
      
          </div>
          <div className='space-y-2 mt-5'>
                {
                    routes.map(route=>(
                        <Link key={route.title} href={route.path} className='block flex items-center gap-2'>
                           <span className='p-2 rounded-full dark:bg-dark_highlight_color text-dark_text_high_color'>
                            {
                               <route.icon/>
                            }
                           </span>
                           <span className='dark:text-dark_text_medium_color font-medium'>
                           {
                                route.title
                            }
                           </span>
                        </Link>
                    ))
                }
            </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProfileNav;
