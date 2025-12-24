import React from 'react'
import "../index.css";
import bioPic from '../images/eddieSuberLinkedinBioPic.jpeg';
import ContactInfo from '../Components/ContactInfo';
import RisklessPreview from '../Components/Riskless/RisklessPreview';
import EverrootForestPreview from '../Components/EverrootForest/EverrootForestPreview';
import BrainStuPreview from '../Components/BrainStu/BrainStuPreview';

const Homepage = () => {
  const projectList = [
    {name: 'Riskless', component: RisklessPreview},
    {name: 'BrainStu', component: BrainStuPreview},
    {name: 'EverrootForest', component: EverrootForestPreview},
  ];
    
  document.title = "Eddie Suber Portfolio";
  
  return (
    <div id="page-background" className={'w-screen bg-gray-400 flex flex-col'}>
      <div id="page-header" className={"w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100"}>
        <h1 id="name" className="text-center lg:text-4xl xs:text-lg">Welcome to Eddie Suber's Portfolio</h1>
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
            My name is Eddie. I'm an undergraduate student at Drexel University studying Computer Science. 
            I love being challenged and excel when with other innovative people.
            I aspire to find ways to weave creativity into designing programs and coding.
            <br></br>
            <br></br>
            I am interested in software development, game development, and collaborative problem solving,
            but I am passionate about learning and would love to explore other areas as well.
            <br></br>
            <br></br>
            To me, coding is a tool with many purposes. It can create efficiency through automation, tell stories, and do many other things.
            <br></br>
            <br></br>
            The human element is the most important to me and people should always be kept centered when developing technology.
            </p>
            <img 
            id="bio-picture" 
            alt="Eddie Suber"
            src={bioPic}
            className="xl:max-h-[60%] xs:max-w-[45%] md:max-w-[30%] rounded-full border-opacity-20 border-black border-8"
            >
              
            </img>
          </div>
        </div>
        <section className=" bg-gray-700 rounded-md border-gray-400 border-2">
          <div id="projects-section-title" className="bg-gray-800">
            <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">Experience</h2>
          </div>
          <div id="projects-section-body">
            <ul className="flex flex-col gap-2 items-center pb-2">
              {projectList.map((item) => {
                return <li key={item.name} className='projects-item'>
                  {React.createElement(item.component)}
                </li>
              })}
            </ul>
          </div>
        </section>
        {<ContactInfo/>}
      </div>
    </div>
  )
}

export default Homepage