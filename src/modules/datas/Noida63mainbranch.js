import React, { Fragment } from 'react'
import Delhibranch from './Delhibranch'
import Faridabadbranch from './Faridabadbranch';
import "../style.css";

function Noida63mainbranch() {
    const totalemp = 150;
    const a=<h3>this is parent element</h3>
    const b = [100,200,300,400,500];
                                                        
  return (
   <Fragment>
    <h1  style={{marginTop:70}}>this is main branch {totalemp} {a}</h1>
    <section className='mysection'>
        {/* <Delhibranch one="kumar"></Delhibranch> */}
        <Delhibranch one={totalemp} two={a} mydata = {b}></Delhibranch>
    </section>                                                  
    <section className='mysection'>
        <Faridabadbranch mydata={b}></Faridabadbranch>
    </section>


   </Fragment>
  )
}

export default Noida63mainbranch