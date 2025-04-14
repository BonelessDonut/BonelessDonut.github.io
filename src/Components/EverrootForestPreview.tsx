import React from 'react'
import Accordian from './Accordian';
import protag from '../images/EFProtag.png';

const EverrootForestPreview = () => {
  return (
    <div>
        <Accordian
        outer={
            <h3 className="flex flex-row items-center justify-center">
                <img
                id="title-screen-pic"
                src= {protag}
                alt="Everroot Forest Title Screen"
                className="h-6 rounded-xl"
                >
                </img>
                  Everroot Forest
                </h3>
        }
        inner={
            <p>
                Worked on a 2D roguelike adventure game inspired by Legend of Zelda and made using Pygame.
            </p>
        }
        />
    </div>
  )
}

export default EverrootForestPreview;