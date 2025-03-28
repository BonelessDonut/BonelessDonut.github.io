import React from 'react'
import "../index.css";
import bioPic from '../images/eddieSuberLinkedinBioPic.jpeg';
import IconComponent from '../Components/IconComponent';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {AiFillMail} from "react-icons/ai";

const Homepage = () => {
    
  document.title = "Eddie Suber Portfolio";
  
  return (
    <div id="page-background" className="w-screen bg-gray-400 flex flex-col">
      <div id="page-header" className="w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100">
        <h1 id="name" className="text-center text-4xl">Welcome to Eddie Suber's Portfolio</h1>
      </div>
      <div id="page-body" className="bg-gray-600 w-full h-[90%] border-gray-400 border-4 rounded-2xl text-slate-100 flex flex-col">
        <div id="bio" className="h-full bg-gray-700 rounded-md border-gray-400 border-2">
          <div id="top-bio-panel" className="p-20 border-4 border-black border-opacity-25 flex flex-row w-full justify-center space-x-64 items-center">
            <p className="max-w-[50%] text-lg text-justify"> <span className="font-medium text-xl">Hello!</span> I am an undergraduate student at Drexel University studying Computer Science. 
            I enjoy being challenged and excel when with other innovative people.
            I aspire to find ways to weave creativity into designing programs and coding.
            <br></br>
            <br></br>
            I am interested in software development, game development, and collaborative problem solving,
            but I am passionate about learning and would love to explore other areas as well.
            <br></br>
            <br></br>
            To me, coding is a method for creating tools to automate some process or otherwise help people.
            <br></br>
            <br></br>
            The human element is the most important to me and people should always be kept centered when developing technology.
            </p>
            <img 
            id="bio-picture" 
            alt="Eddie Suber"
            src={bioPic}
            className="h-[80%] rounded-full border-opacity-20 border-black border-8"
            >
              
            </img>
          </div>
        </div>
        <section className=" bg-gray-700 rounded-md border-gray-400 border-2">
          <div id="projects-section-title">
            <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">Experience</h2>
            </div>
          <div id="projects-section-body">
            <ul className="flex flex-col gap-2 items-center pb-2">
              <li className='projects-item'>
                <h3 className="text-lg text-yellow-100">Everroot Forest</h3>
                <p>
                  Worked on a 2D roguelike adventure game inspired by Legend of Zelda and made using Pygame.
                </p>
              </li>
              <li className='projects-item'>Riskless</li>
            </ul>
          </div>
        </section>
        <div id="contact" className="bg-gray-700 rounded-md border-gray-400 border-2">
          <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">Contact Info</h2>
          <ul>
            <li className="flex flex-row justify-center items-center">
              <IconComponent icon={FaLinkedin}/>
              <a 
              className="links" 
              href="https://www.linkedin.com/in/eddie-suber-369370296/" 
              target='_blank'
              rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex flex-row justify-center items-center">
              <IconComponent icon={FaGithub}/>
              <a 
              className="links"
              href="https://github.com/BonelessDonut"
              target="_blank"
              rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="flex flex-row justify-center items-center">
              <IconComponent icon={AiFillMail}/>
              <a
              className="links"
              href="mailto:eddiesuber7@gmail.com?subject=Interest from your Portfolio Website">
                Email
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Homepage