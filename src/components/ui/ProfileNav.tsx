'use client';
import { handelLogout } from '@/utils/func';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { LuHeart } from 'react-icons/lu';
import { MdElectricBolt } from 'react-icons/md';
import { RiHomeLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

function ProfileNav() {
  const [mouseIn, setMouseIn] = useState(false);
  const routes = [
    {
      title: 'My Properties',
      icon: RiHomeLine,
      path: '/properties',
    },
    {
      title: 'My Watch List',
      icon: LuHeart,
      path: '/my-watch-list',
    },
    {
      title: 'Dashboard',
      icon: RxDashboard,
      path: '/my-watch-list',
    },
  ];

  useEffect(() => {
    const fn = () => {
      if (mouseIn) {
        // setMouseIn(false)
      }
    };
    if (mouseIn) {
      document.body.addEventListener('click', fn);
    }

    return () => {
      document.body.removeEventListener('click', fn);
    };
  }, [mouseIn]);

  return (
    <div className=" relative">
      <div
        onClick={() => setMouseIn(!mouseIn)}
        className="flex items-center gap-2"
      >
        <img
          className="size-10 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
          alt=""
        />
        <span
          className={`text-2xl text-light_text_medium_color dark:text-dark_text_medium_color ${mouseIn ? 'rotate-180' : null} duration-200`}
        >
          <IoChevronDownOutline />
        </span>
      </div>
      {mouseIn ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute p-5 right-0 top-14 min-h-52  w-72 shadow-lg bg-gray-50 dark:bg-dark_light_color z-40 rounded-2xl"
        >
          <div className="p-3 bg-light_highlight_color dark:bg-dark_color flex items-center gap-2">
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
                className=" text-light_text_medium_color dark:text-dark_text_low_color font-medium text-[0.rem]"
              >
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="space-y-2 mt-5">
            {routes.map((route) => (
              <Link
                key={route.title}
                href={route.path}
                className="block flex items-center gap-2 hover:bg-light_text_low_color  dark:hover:bg-dark_color p-2"
              >
                <span className="p-2 rounded-full bg-light_highlight_color dark:bg-dark_highlight_color text-light_text_high_color dark:text-dark_text_high_color">
                  {<route.icon />}
                </span>
                <span className="dark:text-dark_text_medium_color font-medium">
                  {route.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="space-y-2 border-y border-dark_text_low_color  border-opacity-40 py-2">
            <Link
              href={''}
              className="p-2 hover:bg-light_text_low_color dark:hover:bg-dark_color text-light_text_high_color dark:text-dark_text_high_color block"
            >
              Account Setting
            </Link>
            <button
              onClick={handelLogout}
              className="p-2 dark:hover:bg-dark_color hover:text-warning_color text-light_text_high_color  dark:text-dark_text_high_color block w-full text-start"
            >
              Logout
            </button>
          </div>

          <div className="py-2">
            <button className="p-2 hover:bg-light_text_medium_color dark:hover:bg-dark_color hover:text-warning_color text-light_text_high_color  dark:text-dark_text_high_color w-full text-start flex gap-2 items-center">
              <span className="text-2xl text-primary_color">
                <MdElectricBolt />
              </span>
              <span className="dark:text-dark_text_medium_color font-medium">
                Update to Pro
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProfileNav;
