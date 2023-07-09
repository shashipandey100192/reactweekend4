import React, { useEffect, useState } from 'react'

function Myfetchapi() {
    const [a,b]=useState([])
    const Myfetch = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                return res.json();
        }).then((abc)=>{
               b(abc);
        })

    }
useEffect(()=>{
    Myfetch();
},[]);


    return (
    <div className='container-fluid' style={{marginTop:80}}>
        <div className='row'>
           <div className='col-12'>
           <table className="table table-bordered border-danger">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">body text</th>
                    <th scope="col" className='text-end' style={{width:200}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {a.map((d)=>{
                        return(
                            <tr key={d.id}>
                                <th scope="row">{d.id}</th>
                                <td>{d.title}</td>
                                <td>{d.body}</td>
                                <td className='text-end'>
                                    <button className="btn btn-sm btn-danger">Del</button>
                                    <button className="btn btn-sm btn-warning ms-2">Edit</button>
                                    <button className="btn btn-sm btn-primary ms-2">View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
           </div>
        </div>
    </div>
  
  )
}

export default Myfetchapi