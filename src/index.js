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
import Customform from './modules/Customform';
import Mychart from './modules/Mychart';
import Myapi from './modules/myaxios';
import Detailspage from './modules/Detailspage';
import Myfetchapi from './modules/Myfetchapi';




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
          <Route path='custom' element={<Customform/>}/>
        </Route>
        <Route path='chart' element={<Mychart/>}/>
        <Route path='axios' element={<Myapi/>}/>
        <Route path='axios/:id' element={<Detailspage/>}/>
        <Route path='fetchapi' element={<Myfetchapi/>}/>
      </Routes>
      <Myfooter/>
    </BrowserRouter>
 
    

  </React.StrictMode>
);

