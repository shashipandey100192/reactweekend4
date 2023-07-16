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
import Noida63mainbranch from './modules/datas/Noida63mainbranch';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from './modules/myredux/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="HmK0W7dfNBZxyNJjHBmeUmfTe7oxaEKR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <Provider store={store}>
    <BrowserRouter >
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
        <Route path='myprops' element ={<Noida63mainbranch/>}/>
      </Routes>
      <Myfooter/>
    </BrowserRouter>
    </Provider>
    </Auth0Provider>
    

  </React.StrictMode>
);

