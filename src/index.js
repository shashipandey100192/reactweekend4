import React from 'react';
import ReactDOM from 'react-dom/client';
import Pankaj, { Myhome1, Myhome2 } from './project/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pankaj></Pankaj>
    <Myhome1></Myhome1>
    <Myhome2></Myhome2>
  </React.StrictMode>
);

