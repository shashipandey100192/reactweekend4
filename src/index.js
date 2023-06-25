import React from 'react';
import ReactDOM from 'react-dom/client';
import Mystate from './Mystate';
import Myelements from './Myelements';
// import Mynav, { Mynav2 } from './component/Mynav';
// import Mybootstrap from './component/Mybootstrap';
// import Myreactbootstrap from './component/Myreactbootstrap';
// import Metrialui from './component/Metrialui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mynav/>
    <Mynav2/>
    <Mybootstrap/>
    <Myreactbootstrap/>
    <Metrialui/> */}
    <Mystate/>
    <Myelements/>
    
    

  </React.StrictMode>
);

