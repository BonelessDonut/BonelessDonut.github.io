import React from 'react'
import bioPic from '../images/eddieSuberLinkedinBioPic.jpeg';

const AboutMe = () => {
  return (
    <div>
        <div id="bottom-bio-panel" className="w-full h-full flex place-content-evenly items-center flex-col bg-gray-700 border-black border-4 border-opacity-25">
            <h3 className="text-2xl font-bold border-b-2">My Origin Story</h3>
            <p className="text-justify max-w-[75%] text-lg">
              A fun weekend during my childhood would be getting to play Super Smash Bros. or Legend of Zelda with my sisters and their friends.
              Video games began as not only a hobby, but also a core part of how I experienced stories. 
              As I grew older and had other responsibilities such as school work or a job, I still kept gaming as a part of who I am.
              Playing games together was and still is one of the main ways I love spending time with people.
              <br></br>
              <br></br>
              I initially became interested in programming when I learned that is video games are made - 
              but I didn't know about the countless hours of hard work brainstoring, designing, coding and redesigning that go into the creation of a single game.
              <br></br>
              <br></br>
              From my interest in games, I learned a bit more about coding and how computers work and it has captivated me ever since.
              The progression of how computer technology evolved from needing an entire room to fit one computer, to present day where millions carry a tiny computer around in their pocket everyday that has far greater capabilities fascinates me.
            </p>
          </div>
    </div>
  )
}

export default AboutMe;