import React from "react";

function DashboardHeader() {
  return (
    <div className=" px-20  py-5 bg-dark_light_color flex justify-between items-center">
      <img
        src="https://resido-v2.smartdemowp.com/wp-content/themes/resido/assets/images/logo-light.svg"
        alt=""
        className="  w-32 md:w-40"
      />
      <div className="flex items-center gap-2 px-4 py-2 bg-dark_color  rounded-full">
        <h3 className="text-xl text-dark_text_high_color font-semibold">
          Hello,<span className="text-primary_color">Admin</span>
        </h3>
        <img
          className="size-10 rounded-full"
          src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
