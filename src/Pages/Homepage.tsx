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
        <div id="about-me" className="h-full bg-gray-700 rounded-md border-gray-400 border-2">
          <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">About Me</h2>
          <div id="top-bio-panel" className="border-4 border-black border-opacity-25 flex flex-row w-full h-[50%] justify-center space-x-64 items-center">
            <p className="max-w-[50%] text-lg"> <span className="font-medium text-xl">Hello!</span> I am an undergraduate student at Drexel University studying Computer Science. 
            I enjoy being challenged and excel when with other innovative people.
            I aspire to find ways to weave creativity into designing programs and coding.
            I am interested in software development, game development, and collaborative problem solving,
            but I am passionate about learning and would love to explore other areas as well.
            <br></br>
            To me, coding is a method for creating tools to automate some process or otherwise help people.
            <br></br>
            The human element is the most important to me and people should always be kept centered when developing technology.
            </p>
            <img 
            id="bio-picture" 
            alt="Picture of Eddie Suber"
            src={bioPic}
            className="h-[80%] rounded-full border-opacity-20 border-black border-8"
            >
              
            </img>
          </div>
          <div id="bottom-bio-panel" className="w-full h-[50%] flex items-center flex-col p-3 border-black border-4 border-opacity-25">
            <h3 className="m-2 text-2xl font-bold border-b-2">My Origin Story</h3>
            <p className="text-center max-w-[75%] text-lg">
              A fun weekend during my childhood would be getting to play Super Smash Bros. or Legend of Zelda with my sisters and their friends.
              Video games began as not only a hobby, but also a core part of how I experienced stories. 
              As I grew older and had other responsibilities such as school work or a job, I still kept gaming as a part of who I am.
              Playing games together was and still is one of the main ways I love spending time with people.
              <br></br>
              I initially became interested in programming when I learned that is video games are made - 
              but I didn't know about the countless hours of hard work brainstoring, designing, coding and redesigning that go into the creation of a single game.
              <br></br>
              From my interest in games, I learned a bit more about coding and how computers work and it has captivated me ever since.
              The progression of how computer technology evolved from needing an entire room to fit one computer, to present day where millions carry a tiny computer around in their pocket everyday that has far greater capabilities fascinates me.
            </p>
          </div>
        </div>
        <div id="contact" className="bg-gray-700 rounded-md border-gray-400 border-2">
          <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">Contact Info</h2>
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