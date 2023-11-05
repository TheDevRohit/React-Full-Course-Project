import React from 'react'
import Header from './compnents/Header/Header'
import Footer from './compnents/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Root() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

