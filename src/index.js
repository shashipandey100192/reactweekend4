import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav, { Mynav2 } from './component/Mynav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mynav/>
    <Mynav2/>
    
  </React.StrictMode>
);

