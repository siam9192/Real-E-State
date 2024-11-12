import Link from 'next/link';
import React from 'react';

export const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Sell',
    path: '/sell',
  },
  {
    title: 'Rent',
    path: '/rent-properties',
  },
  {
    title: 'Find Agents',
    path: '/agents',
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
];

function HeaderNav() {
  return (
    <nav className="lg:flex items-center gap-4 text-xl hidden lg:block  text-light_text_high_color dark:text-dark_text_high_color">
      {navItems.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className="hover:text-secondary_color font-semibold "
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
