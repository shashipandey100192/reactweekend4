import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mynav from './modules/Mynav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mylandingpage from './modules/Mylandingpage';
import About from './modules/About';
import Contactus from './modules/Contactus';
import Myform from './modules/Myform';
import Myfooter from './modules/Myfooter';
import Formtype1 from './modules/Formtype1';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynav/>
      <Routes>
        <Route path='' element={<Mylandingpage/>}/> 
        <Route path='about' element={<About/>}/>
        <Route path='contactus' element={<Contactus/>}/>
        <Route path='forms' element={<Myform/>}>
          <Route path='form1' element={<Formtype1/>}/>
        </Route>
      </Routes>
      <Myfooter/>
    </BrowserRouter>
 
    

  </React.StrictMode>
);

