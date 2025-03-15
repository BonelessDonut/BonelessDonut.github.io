import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import MainLayout from './Pages/MainLayout';
import ProjectPage from './Pages/ProjectPage';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Homepage></Homepage>}></Route>
        <Route path="/everrootForest" element={
          <ProjectPage pageInfo={
            {title: "Everroot Forest", repoAddress: "https://github.com/BonelessDonut/Everroot-Forest-Project"}
        }></ProjectPage>
          }></Route>
        <Route path="/brainstu" element={
          <ProjectPage pageInfo={
            {title: "Brain Stu Citation Generator", repoAddress: ""}
        }></ProjectPage>
          }></Route>
        <Route path="/riskless" element={
          <ProjectPage pageInfo={
            {title: "Riskless Investment Advisor", repoAddress: ""}
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
