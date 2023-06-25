import React, { useState } from 'react';


function Mystate() {
const [abc,xyz]=useState(20)


const myupdate = ()=>{
    xyz(5000);
}

  return (
    <div onClick={myupdate}>Mystate jfghsdg jhsgdgsdfgsf  {abc}</div>
  )
}

export default Mystate