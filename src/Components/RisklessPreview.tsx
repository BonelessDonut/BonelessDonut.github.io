import React from 'react'
import Accordian from './Accordian';
import logo from '../images/risklessLogoPic.png';

const RisklessPreview = () => {
  return (
    <div>
        <Accordian
        outer={
            <h3 className="flex flex-row items-center justify-center">
                <img
                id="landing-page-pic"
                src={logo}
                alt="Riskless Landing Page"
                className='h-6 rounded-xl'
                ></img>
                Riskless
            </h3>
        }
        inner={
            <p>
                Created an investment risk management tool. Using historical data about the S&P 500 top stocks, we made predictions about how the market will behave using our homegrown machine learning algorithm.
                <br></br>
                The multi-team workflow allowed us to combine an interactive user inferface with a backend that communicated with our data base and setup our behind-the-scenes program logic.
            </p>
        }
        />
    </div>
  )
}

export default RisklessPreview;