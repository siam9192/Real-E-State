import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { ILayoutProps } from '@/types/props.type'
import React from 'react'

function layout({children}:ILayoutProps) {
  return (
    <>
    <Header/>

   {
     children
    }
  
    <Footer/>
    </>
  )
}

export default layout