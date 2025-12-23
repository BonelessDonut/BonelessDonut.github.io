import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div className="flex sm:flex-row flex-col">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout