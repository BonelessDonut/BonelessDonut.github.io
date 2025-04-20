import React from 'react'
import logo from '../images/brainstuart.jpg';
import demoPage from '../images/brainStuWorking.png';

const BrainStu = () => {
  return (
    <div className="bg-gray-700 rounded-md border-black border-4 border-opacity-25 flex flex-col justify-center items-center">
      <div id="banner-image-container" className="h-96 flex justify-center items-center mt-2 mb-6 p-3 flex-row gap-6">
        <img
        id="brainstu-concept-pic"
        src={logo}
        alt="BrainStu Expanded Logo"
        className="h-[70%] rounded-2xl border-solid border-opacity-25 border-black border-8"
        ></img>
        <img
        id="demo-page"
        src={demoPage}
        alt="BrainStu Demo"
        className="h-[100%] rounded-lg border-solid border-opacity-15 border-black border-4"
        ></img>
      </div>
      <p className="text-lg text-justify w-[80%]">
        We created an AI powered Google Docs extension using Javascript, CSS, and HTML for students to reduce academic integrity violations by discouraging plagiarism, incentivizing independent research, and making education more accessible through research. 
        <br></br>
        The extension generates sources related to the contents of the document and creates citations to be inserted onto the page.

        Highlighted portions of the document text, or the entire document are analyzed with the OpenAi ChatGPT 3.5 api and used to find articles through our custom tailored google search engine.
      </p>
  
    </div>
  )
}

export default BrainStu