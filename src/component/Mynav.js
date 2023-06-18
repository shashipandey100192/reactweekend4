import React, { Fragment } from 'react'
import "../project/style.css";
import Myhome from '../project/Home';


function Mynav() {
    const a=5000;
  return (
   <nav className='mynav'>
        {60+30}
        {a}
   </nav>
  )
}

export default Mynav


export function Mynav2()
{
const b = <Myhome/>

    return(
        <Fragment>
            <section className='mysecond'>
            {b}
            </section>
        </Fragment>
    )
}