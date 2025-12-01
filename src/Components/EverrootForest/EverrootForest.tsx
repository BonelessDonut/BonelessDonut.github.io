import React from 'react'
import titleScreen from '../../images/everrootForestTitleScreen.png';

const EverrootForest = () => {
  return (
    <div className='bg-gray-700 rounded-md border-black border-4 border-opacity-25 flex flex-col justify-center items-center'>
        <div 
        id="banner-image-container"
        className="h-96 flex justify-center my-2 p-3"
        >
            <img
            id="title-screen-pic"
            src= {titleScreen}
            alt="Everroot Forest Title Screen"
            className="h-full rounded-2xl border-solid border-opacity-25 border-black border-8"
            >
            </img>
        </div>
        <p className='text-lg text-justify w-[80%]'>
            Everroot Forest is a 2D roguelike adventure game inspired by classic games such as Legend of Zelda.
            <br></br>
            With an emphasis on exploration, find your way through the mysterious forest to help the villagers and save the environment from pollutants!
            <br></br>
            <br></br>
            This game was made using Pygame and was the product of a 6-month long project as part of a team of 4.
            My main responsibilities on the team was creating the player character's interactions with the ores and flowers you can harvest,
            creating the melee attacks and creating the boss fight. I also set up a portion of the sprites and animations.
            <br></br>
            <br></br>
            We used Git and Scrum to collaborate effectively and keep ourselves on schedule to meet our goals we had planned.
        </p>

    </div>
  )
}

export default EverrootForest