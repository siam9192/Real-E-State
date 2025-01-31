import React from "react";

interface IBlogCardProps {}

const BlogCard = () => {
  return (
    <div>
      <img
        src="https://www.betterup.com/hubfs/Man%20has%20overwork%20and%20sitting%20with%20laptop%20and%20table%20lamp.%20Mental%20work%20with%20paper.%20Empty%20office.jpg"
        alt=""
        className="rounded-md"
      />
      <div className="mt-4 space-y-2">
        <h1 className=" text-xl md:text-2xl font-bold text-primary_color font-jost">
          Building Your Api Stack
        </h1>
        <p className="text-[0.9rem] text-gray-700 font-poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut harum repellendus
          doloribus facilis provident deserunt eaque ea? Obcaecati,
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/043/210/041/non_2x/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg"
          alt=""
          className="size-10 rounded-full border"
        />
        <h4 className="text-primary_color font-poppins font-bold text-[.8rem]">
          {"Arafat Hasan.18 Jan 25"}
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
