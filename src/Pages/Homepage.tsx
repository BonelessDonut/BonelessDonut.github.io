import React from 'react'
import Navbar from '../Components/Navbar';

const Homepage = () => {
    
  document.title = "Eddie Suber Portfolio";
  return (
    <div id="page-background" className="w-screen h-screen bg-gray-400 text-slate-100 flex flex-row">
      <div id="portfolio-header" className="w-full bg-gray-600 h-20 justify-center items-center flex">
        <h1 id="name" className="text-center text-3xl">Welcome to Eddie Suber's Portfolio</h1>
      </div>
    </div>
  )
}

export default Homepage