import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
 import Cara from './Cara.js'
import Cloths from './Cloths';
 import Weather from './Weather';
 import Contact from './Contact';
 import Aboutus from './Aboutus.js';
 import News from './News';
 import Checkbmi from './Checkbmi';
 import Movies from './Movies.js'
 import Food from './Food.js'
export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Home/>
        <Routes>
           <Route path='/' element={<Cara />} />
          <Route path='/Contact' element={<Contact />} />
           <Route path='/Cloths' element={<Cloths />} />
           <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Weather' element={<Weather />} />
          <Route path='/News' element={<News />} />
          <Route path='/Checkbmi' element={<Checkbmi />} />
          <Route path ='/Movies' element={<Movies/>}/> 
          <Route path='/Food' element={<Food/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  );
}
