import React from 'react'
import landingPage from '../images/risklessLandingPage.png';

const Riskless = () => {
  return (
    <div className="bg-gray-700 rounded-md border-black border-4 border-opacity-25 flex flex-col justify-center items-center">
      <div id="banner-image-container" className="h-96 flex justify-center items-center mt-2 mb-6 p-3 flex-row gap-6">
        <img
        id="riskless-landing-page"
        src={landingPage}
        alt="riskless-homepage"
        className="h-[100%] border-solid border-opacity-25 border-black border-4"
        ></img>
      </div>
      <p className="text-lg text-justify w-[80%]">
        Designed a dynamic and interactive user interface using React for a full-stack financial investment risk manager that used a machine learning algorithm to make accurate predictions about the S&P 500.
        <br></br>
        <br></br>
        We utilized Electron to run the application outside of the web browser.
        <br></br>
        Styled the pages with Tailwind to streamline the design process and get quicker feedback from the rest of the development team.
        <br></br>
        Made fetch requests to integrate the Flask backend and retrieve information from our Sqlite database that held data about top 50 stocks in each S&P 500 sector, as well as relevant articles about crucial stocks.
        <br></br>
        <br></br>
        Modeled data visually with React Google Charts to illustrate the predictions we made with our genetic algorithm machine learning model, which outperformed the market by 7% for the same time period.
      </p>
      
    </div>
  )
}

export default Riskless