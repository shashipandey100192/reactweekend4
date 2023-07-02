import React from 'react';
const imgs= "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000";

function Mylandingpage() {
const datafromlocal = JSON.parse(localStorage.getItem("mydatalist"));
console.log(datafromlocal)

  return (
    <div className='container-fluid p-3 mt-5'>
        <div className='row'>
            <div className='col-md-3'>
            <div className="card">
                <img src={imgs} className="card-img-top" alt="myimg"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div className='col-md-3'>
            <div className="card">
                <img src={imgs} className="card-img-top" alt="myimg"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div className='col-md-3'>
            <div className="card">
                <img src={imgs} className="card-img-top" alt="myimg"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div className='col-md-3'>
            <div className="card">
                <img src={imgs} className="card-img-top" alt="myimg"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            
            
        </div>
        <div className='row'>
            <div className='col-12'>
                
                        <div>
                           <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">s.no</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {datafromlocal.map((p,t)=>{
                                 return(
                                    <tr>
                                    <th scope="row">{++t}</th>
                                    <td>{p.fullname}</td>
                                    <td>{p.email}</td>
                                    <td>{p.dob}</td>
                                    <td>{p.comment}</td>
                                    <td>
                                        <button className='btn btn-sm btn-danger'>del</button>
                                        <button className='btn btn-sm btn-warning'>Edit</button>
                                        <button className='btn btn-sm btn-primary'>view</button>
                                    </td>
                                    </tr>
                                       )
                                    })}
                                </tbody>
                                </table>
                        </div>
                 
            
            </div>    
        </div>    
    </div>
  )
}

export default Mylandingpage