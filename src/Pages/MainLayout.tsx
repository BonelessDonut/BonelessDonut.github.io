import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div className="flex flex-row">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout