import React from "react";
import "./loading.css";
const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-black ">
      <div className="loader"></div>
      <h4 className=" md:text-xl font-semibold text-slate-100 mt-4">Page is Loading...</h4>
    </div>
  );
};

export default LoadingPage;
