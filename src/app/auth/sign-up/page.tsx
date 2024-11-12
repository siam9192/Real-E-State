import SignUpForm from '@/components/forms/SignUpForm';
import GoogleLoginButton from '@/components/ui/GoogleLoginButton';
import React from 'react';

const page = () => {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/3 p-5 md:p-10 bg-white shadow-primary dark:bg-dark_light_color  rounded-lg ">
      <div className="mb-10 ">
        {/* Dark */}
        <img
          src="https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo-light.svg"
          alt=""
          className="w-40 mx-auto mb-5 hidden dark:block"
        />
        {/* Light */}
        <img
          src="https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo.svg"
          alt=""
          className="w-40 mx-auto mb-5 block dark:hidden"
        />
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium text-light_text_high_color dark:text-dark_text_high_color">
              Sign Up
            </h1>
            <p className=" text-light_text_medium_color dark:text-dark_text_medium_color ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <GoogleLoginButton />
        </div>
      </div>
      <SignUpForm />
    </div>
  );
};

export default page;
