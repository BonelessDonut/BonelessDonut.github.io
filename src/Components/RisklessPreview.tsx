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
                
            </p>
        }
        />
    </div>
  )
}

export default RisklessPreview;