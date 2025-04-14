import React from 'react'
import Accordian from './Accordian'
import BrainStuLogo from '../images/brainstu-logo.png';

const BrainStuPreview = () => {
  return (
    <div>
        <Accordian
        outer={
        <h3 className="flex flex-row items-center justify-center">
            <img
            id="brainstu-logo-pic"
            alt="brainstu-logo"
            className="h-6 rounded-xl"
            src={BrainStuLogo}
            >
            </img>
            BrainStu Citation Generator
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

export default BrainStuPreview