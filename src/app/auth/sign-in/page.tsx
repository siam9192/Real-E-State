import SignInForm from '@/components/forms/SignInForm';
import GoogleLoginButton from '@/components/ui/GoogleLoginButton';
import React from 'react';

const page = () => {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/3 p-5 md:p-10 bg-dark_light_color  rounded-lg ">
      <div className="mb-10 ">
        <img
          src="https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo-light.svg"
          alt=""
          className="w-40 mx-auto mb-5"
        />
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium text-white dark:text-dark_text_high_color">
              Sign in
            </h1>
            <p className="text-dark_text_medium_color">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <GoogleLoginButton />
        </div>
      </div>
      <SignInForm />
    </div>
  );
};

export default page;
