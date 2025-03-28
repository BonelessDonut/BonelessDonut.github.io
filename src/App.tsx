import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import MainLayout from './Pages/MainLayout';
import ProjectPage from './Pages/ProjectPage';
import IconComponent from './Components/IconComponent';
import {FaLinkedin} from "react-icons/fa";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Homepage></Homepage>}></Route>
        <Route path="/everrootForest" element={
          <ProjectPage pageInfo={
            {title: "Everroot Forest",
            repoAddress: "https://github.com/BonelessDonut/Everroot-Forest-Project",
            id : "everrootForest",
            }
        }></ProjectPage>
          }></Route>
        <Route path="/brainstu" element={
          <ProjectPage pageInfo={
            {title: "Brain Stu Citation Generator",
              repoAddress: "",
              id : "brainstu",
              }
        }></ProjectPage>
          }></Route>
        <Route path="/riskless" element={
          <ProjectPage pageInfo={
            {title: "Riskless Investment Advisor", 
              repoAddress: "",
              id : "riskless",
            }
        }></ProjectPage>
          }></Route>
          <Route path="/about-me" element={
            <ProjectPage pageInfo={
              {
                title: "About Me",
                repoAddress: "",
                id: "about-me"
              }
            }></ProjectPage>
          }></Route>
      </Route>
  ));
  
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
  
}

export default App;
