import React from 'react'
import Navbar from '../Components/Navbar';
import "../index.css";
import bioPic from '../images/eddieSuberLinkedinBioPic.jpeg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Homepage = () => {
    
  document.title = "Eddie Suber Portfolio";
  
  return (
    <div id="page-background" className="w-screen h-screen bg-gray-400 flex flex-col">
      <div id="page-header" className="w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100">
        <h1 id="name" className="text-center text-4xl">Welcome to Eddie Suber's Portfolio</h1>
      </div>
      <div id="page-body" className="bg-gray-600 w-full h-full border-gray-400 border-4 rounded-2xl text-slate-100 flex flex-col">
        <div id="about-me" className="bg-gray-700 rounded-md border-gray-400 border-2 my-2">
          <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">About Me</h2>
          <div id="top-bio-panel" className="flex flex-row w-full h-[50%] justify-center space-x-64 items-center">
            <p> <span className="font-medium">Hello.</span> I am a student at Drexel University studying Computer Science.</p>
            <img 
            id="bio-picture" 
            alt="Picture of Eddie Suber"
            src={bioPic}
            className="h-[80%] rounded-xl"
            ></img>
          </div>
          <div id="bottom-bio-panel" className="w-full h-[50%] flex justify-center">
            <p className="text-center">More Body Text</p>
          </div>
        </div>
        <div id="contact" className="bg-gray-700 rounded-md border-gray-400 border-2 my-2">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <a 
              className="links" 
              href="https://www.linkedin.com/in/eddie-suber-369370296/" 
              target='_blank'>
                LinkedIn
              </a>
            </li>
            <li>
              <a 
              className="links"
              href="https://github.com/BonelessDonut"
              target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Homepage