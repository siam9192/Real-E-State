import { ILayoutProps } from "@/types/props.type";
import React from "react";

function layout({ children }: ILayoutProps) {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] px-2 md:px-0 bg-gray-200 dark:bg-dark_color">
        {children}
      </div>
    </>
  );
}

export default layout;
