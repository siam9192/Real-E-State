import React from "react";
import BlogCard from "../cards/BlogCard";

function RecentBlogs() {
  return (
    <div className="py-20">
      <h1 className="text-3xl md:text-4xl font-jost font-extrabold">Recent Blog Posts</h1>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 md:gap-5 gap-10">
        {[...Array(10)].map((_, index) => (
          <BlogCard key={"recent-blog" + (index + 1)} />
        ))}
      </div>
      <div className="mt-7 text-center">
        <button className=" px-8 py-3 bg-primary_color text-white rounded-md">
          Loading More..
        </button>
      </div>
    </div>
  );
}

export default RecentBlogs;
