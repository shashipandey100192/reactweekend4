import React, { useEffect } from 'react';
import axios from 'axios';

function Faridabadbranch(props) {
useEffect(()=>{
  axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true').then((res)=>{
    console.log(res.data);
    })
},[])


  return (
    <div>
        <h2>Faridabadbranch</h2>
        {props.mydata.map((a)=>{
            return(
                <p>this is array: {a}</p>
            )
        })}
    </div>
  )
}

export default Faridabadbranch