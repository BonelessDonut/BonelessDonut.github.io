import React from 'react'
import Navbar from '../Components/Navbar';
import "../index.css";

const Homepage = () => {
    
  document.title = "Eddie Suber Portfolio";
  return (
    <div id="page-background" className="w-screen h-screen bg-gray-400 flex flex-col">
      <div id="page-header" className="w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100">
        <h1 id="name" className="text-center text-3xl">Welcome to Eddie Suber's Portfolio</h1>
      </div>
      <div id="page-body" className="bg-gray-600 w-full h-full border-gray-400 border-4 rounded-2xl text-slate-100 flex flex-col">
        <div id="about-me" className="bg-gray-700 rounded-md border-gray-400 border-2 my-2">
          <h2>About Me</h2>
          <p>Hello. I am a student at Drexel University studying Computer Science.</p>
        </div>
        <div id="contact" className="bg-gray-700 rounded-md border-gray-400 border-2 my-2">
          <h2>Contact Info</h2>
          <a className="links" href="https://www.linkedin.com/in/eddie-suber-369370296/" target='_blank'>LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Homepage