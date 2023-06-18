import React from 'react';
import ReactDOM from 'react-dom/client';
import Pankaj, { Myhome1, Myhome2 } from './project/Home';
import Contactus from './project/Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pankaj></Pankaj>
    <Myhome1></Myhome1>
    <Myhome2></Myhome2>
    <Contactus></Contactus>
  </React.StrictMode>
);

