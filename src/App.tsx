import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import MainLayout from './Pages/MainLayout';
import EverrootForest from './Pages/EverrootForest';
import Riskless from './Pages/Riskless';
import BrainStu from './Pages/BrainStu';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Homepage></Homepage>}></Route>
        <Route path="/everrootForest" element={<EverrootForest></EverrootForest>}></Route>
        <Route path="/brainstu" element={<BrainStu></BrainStu>}></Route>
        <Route path="/riskless" element={<Riskless></Riskless>}></Route>
      </Route>
  ));
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
