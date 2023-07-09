import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Myaxios() {

const [a,b]=useState([]);

 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    console.log(res.data);
    b(res.data)
  })
 },[])

  return (
   <div className='container' style={{marginTop:80}}> 
    <div className='row'>
        {a.map((d)=>{
          return(
            <div className='col-md-4' key={d.id}>
            <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.body}</p>
                  <a href="#" className="btn btn-primary btn-sm">Go somewhere {d.id}</a>
                  <Link to={`${d.id}`} className='btn btn-sm btn-warning ms-3'>view details</Link>
                </div>
              </div>
            </div>
          )
        })}
    </div>
   </div>
  )
}

export default Myaxios