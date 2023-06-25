import React, { useEffect, useState } from 'react'

function Myelements() {

const [a,b]=useState('yyyyyyyyyy')
const head = (p)=>{
    alert("hi");
    console.log(p);
    b(p.target.innerHTML);
}

const [x,y]=useState("kumar")
const myinput = (w)=>{
    console.log(w);
    y(w.target.value)
}

var e=1;
const mydata = ()=>{
    console.log("this is text"+e);
    e++;
    
}
useEffect(()=>{
    mydata();
})

  return (
    <div>
        <h1 onClick={head}>heading</h1>
        <p>{a} {x}</p>
            <input type='text' onChange={myinput} value={x}/>


    </div>
  )
}

export default Myelements