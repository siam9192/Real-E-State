'use client';
import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { navItems } from './HeaderNav';
import Link from 'next/link';
import { it } from 'node:test';

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 hover:text-primary_color bg-dark_color text-white text-2xl rounded-full lg:hidden"
      >
        <AiOutlineMenuUnfold />
      </button>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed left-0 top-0   bg-dark_color bg-opacity-30  w-full h-[100vh] z-40 flex  items-center ${isOpen ? 'visible' : 'invisible'}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={` absolute ${isOpen ? 'left-5' : '-left-[100%]'}  duration-500  h-[90vh] bg-dark_light_color shadow-primary w-10/12 text-white rounded-2xl  `}
        >
          <nav className="p-5 space-y-5 ">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.title}
                className="text-xl font-medium text-dark_text_medium_color block"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
