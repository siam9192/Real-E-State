import LoadingLine from '@/components/loading/LoadingLine';
import { ILayoutProps } from '@/types/props.type';
import React from 'react';

function layout({ children }: ILayoutProps) {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] px-2 md:px-0">
        {children}
        {/* <LoadingLine/> */}
      </div>
    </>
  );
}

export default layout;
