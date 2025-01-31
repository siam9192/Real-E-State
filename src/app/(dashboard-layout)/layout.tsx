"use client";
import React from "react";
import { LayoutProps } from "../../../.next/types/app/layout";
import DashboardSidebar from "@/components/ui/DashboardSidebar";
import { Toaster } from "sonner";
import DashboardHeader from "@/components/shared/DashboardHeader";
import Provider from "@/provider";

function layout({ children }: LayoutProps) {
  return (
    <Provider>
      <>
        <div className=" lg:flex lg:h-screen bg-primary_color">
          <div className="  hidden lg:block w-[15%] ">
            <DashboardSidebar />
          </div>
          <div className=" lg:w-[85%] dark:bg-dark_color lg:rounded-l-[40px]  overflow-y-auto customize-scrollbar ">
            {/* <DashboardHeader /> */}
            <div className="p-5 md:p-10">{children}</div>
          </div>
        </div>
        <Toaster />
      </>
    </Provider>
  );
}

export default layout;
