import React, { ReactElement } from 'react'
import "../index.css";
import EverrootForest from '../Components/EverrootForest';
import BrainStu from '../Components/BrainStu';
import Riskless from '../Components/Riskless';
import AboutMe from './AboutMe';

type PageDirectory = Record<string, ReactElement>;

const projectPages: PageDirectory = {
    "everrootForest" : (<EverrootForest></EverrootForest>),
    "brainstu" : (<BrainStu></BrainStu>),
    "riskless" : (<Riskless></Riskless>),
    "about-me" : (<AboutMe></AboutMe>),
}

interface ProjectInfo {
    title: string,
    repoAddress?: string,
    id : string,
}
const ProjectPage = ( {pageInfo = {title: "Project", repoAddress: "/", id : ""}} ) => {
    const myPageInfo: ProjectInfo = pageInfo;
    return (
        <div id="page-background" className="w-screen bg-gray-400">
            <div id="page-header" className="w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100">
            <h1 id="name" className="text-center text-3xl">{myPageInfo.title}</h1>
        </div>
        <div id="page-body" className="bg-gray-600 w-full h-full border-gray-400 border-4 rounded-2xl text-slate-100">
            {myPageInfo.repoAddress !== "" ?
            <h3 className="bg-gray-700 w-full">
                Project link: <a className="links" href={myPageInfo.repoAddress} target="_black">{myPageInfo.title}</a>
            </h3>
            : ""
            }
            {myPageInfo.id !== "" ? projectPages[`${myPageInfo.id}`] : ""}
        </div>
        </div>
    )
}

export default ProjectPage