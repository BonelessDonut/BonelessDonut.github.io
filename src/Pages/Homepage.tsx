import React from 'react'
import "../index.css";
import bioPic from '../images/eddieSuberLinkedinBioPic.jpeg';
import ContactInfo from '../Components/ContactInfo';
import RisklessPreview from '../Components/Riskless/RisklessPreview';
import EverrootForestPreview from '../Components/EverrootForest/EverrootForestPreview';
import BrainStuPreview from '../Components/BrainStu/BrainStuPreview';

const Homepage = () => {
    
  document.title = "Eddie Suber Portfolio";
  
  return (
    <div id="page-background" className={'w-screen bg-gray-400 flex flex-col'}>
      <div id="page-header" className={"w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100"}>
        <h1 id="name" className="text-center text-4xl xs:text-lg">Welcome to Eddie Suber's Portfolio</h1>
      </div>
      <div id="page-body" className={"bg-gray-600 w-full h-[90%] border-gray-400 border-4 rounded-2xl text-slate-100 flex flex-col"}>
        <div id="bio" className={"h-full bg-gray-700 rounded-md border-gray-400 border-2"}>
          <div id="top-bio-panel" className={`
              p-5
              border-4 
              border-black 
              border-opacity-25 
              flex 
              flex-col-reverse
              w-full 
              justify-center 
              space-x-[20%]
              items-center
          `}>
            <p className="lg:max-w-[80%] xl:text-xl md:max-w-[90%] xs:max-w-[90%] xs:text-sm md:text-lg text-justify"> 
              <span className="font-medium text-xl">Hello! </span>
            I am an undergraduate student at Drexel University studying Computer Science. 
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
            className="xl:h-[75%] lg:max-w-[70%] xs:max-h-[30%] xs:max-w-[40%] rounded-full border-opacity-20 border-black border-8"
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
                <RisklessPreview/>
              </li>
              <li className="projects-item">
                <BrainStuPreview/>
              </li>
              <li className='projects-item'>
                <EverrootForestPreview/>
              </li>
            </ul>
          </div>
        </section>
        <div id="contact" className="bg-gray-700 rounded-md border-gray-400 border-2">
          <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">Contact Info</h2>
          <ContactInfo/>
          
        </div>
      </div>
    </div>
  )
}

export default Homepage