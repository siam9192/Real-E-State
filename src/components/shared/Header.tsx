import React from 'react';
import Container from '../container/Container';
import Link from 'next/link';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import { getAccessToken } from '@/services/profile.service';
import ProfileNav from '../ui/ProfileNav';
import HeaderNav from '../ui/HeaderNav';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import SideNavbar from '../ui/SideNavbar';

const Header = async () => {
  const accessToken = await getAccessToken();

  return (
    <div className="bg-dark_light_color">
      <div className="max-w-[1400px] mx-auto px-2 lg:px-0">
        <section className="py-4 flex items-center justify-between">
          <img
            src="https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo-light.svg"
            alt=""
            className="  w-32 md:w-40"
          />

          <HeaderNav />

          <nav className="flex items-center gap-2">
            <SideNavbar />

            {accessToken ? (
              <ProfileNav />
            ) : (
              <Link href={'/auth/sign-up'}>
                <button className="px-8 py-3 text-white bg-primary_color hover:bg-secondary_color rounded-full">
                  Sign Up
                </button>
              </Link>
            )}
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
