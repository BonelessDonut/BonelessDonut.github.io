import React from 'react'
import "../index.css";

interface ProjectInfo {
    title: string,
    repoAddress?: string,
}
const ProjectPage = ( {pageInfo = {title: "Project", repoAddress: "/"}} ) => {
    const myPageInfo: ProjectInfo = pageInfo;
    return (
        <div id="page-background" className="w-screen h-screen bg-gray-600">
            <div id="page-header" className="w-full bg-gray-600 border-gray-400 border-4 rounded-2xl h-20 justify-center items-center flex text-slate-100">
            <h1 id="name" className="text-center text-3xl">{myPageInfo.title}</h1>
        </div>
        <div id="page-body" className="bg-gray-600 w-full h-full border-gray-400 border-4 rounded-2xl text-slate-100">
            {myPageInfo.repoAddress !== "" ?
            <h3>
                Project link: <a className="links" href={myPageInfo.repoAddress} target="_black">{myPageInfo.title}</a>
            </h3>
            : ""
            }
        </div>
        </div>
    )
}

export default ProjectPage