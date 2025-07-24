import React from 'react'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayOut from './components/layer/RootLayOut';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import AuthorizedSales from './components/pages/AuthorizedSales';
import SolutionService from './components/pages/SolutionService';
import Gallery from './components/pages/Gallery';
import KeyPersonSaleService from './components/pages/KeyPersonSaleService';
import Carrier from './components/pages/Carrier';
import JobDetails from './components/pages/JobDetails';
import OurMission from './components/pages/OurMission';
import OurVision from './components/pages/OurVision';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import SisterConcern from './components/pages/SisterConcern';
import ManagingDirector from './components/pages/ManagingDirector';
import Induss from './components/pages/Induss';
import MaxthermBoiler from './components/pages/MaxthermBoiler';
import QiliRiceMill from './components/pages/QiliRiceMill';
import AceoilProject from './components/pages/AceOilProject';
import AllSolution from './components/pages/AllSolution';
import { SolutionDetails } from './components/SolutionDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>

      <Route index element = {<Home/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}> </Route>
      <Route path='/products' element = {<Products/>}> </Route>
      <Route path='/authorized' element = {<AuthorizedSales/>}> </Route>
      <Route path='/solutionservice' element = {<SolutionService/>}> </Route>
      <Route path='/gallery' element = {<Gallery/>}> </Route>
      <Route path='/keyperson' element = {<KeyPersonSaleService/>}> </Route>
      <Route path='/contact' element = {<Contact/>}> </Route>
      <Route path='/carrier' element = {<Carrier/>}> </Route>
      <Route path='/ourmission' element = {<OurMission/>}> </Route>
      <Route path='/ourvission' element = {<OurVision/>}> </Route>
      <Route path='/privacypolicy' element = {<PrivacyPolicy/>}> </Route>
      <Route path='/sisterconcern' element = {<SisterConcern/>}> </Route>
      <Route path='/danagingdirector' element = {<ManagingDirector/>}> </Route>
      <Route path='/carrier/:id' element = {<JobDetails/>}> </Route>
      <Route path='/induss' element = {<Induss/>}> </Route>
      <Route path='/maxtherm' element = {<MaxthermBoiler/>}> </Route>
      <Route path='/qili' element = {<QiliRiceMill/>}> </Route>
      <Route path='/ace' element = {<AceoilProject/>}> </Route>
      <Route path='/allsolution' element = {<AllSolution/>}> </Route>
      <Route path='/allsolution/:id' element = {<SolutionDetails/>}> </Route>
      
      
    </Route>
  )
);





const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App