import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Detailspage() {
let {id} =useParams();

    const [singled,singlefunc]=useState({})
const Mysingleapi = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((e)=>{
            console.log(e.data);
            singlefunc(e.data);
        })
}

useEffect(()=>{
    Mysingleapi();
},[])

    return (
    <div className='container-fluid' style={{marginTop:80}}>
        <div className='row'>
            <div className='col-12 border p-3'>
            <h1 className='border bg-dark text-white'>Details page <span class="badge bg-primary">{singled.id}</span></h1>
            <h2 className='text-danger'>title:- {singled.title}</h2>
            <h4 className='text-danger'>body Text:- {singled.body}</h4>
            </div>
        </div>
    </div>
  )
}

export default Detailspage