import React from 'react';
const imgs= "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000";

function Mylandingpage() {
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
    </div>
  )
}

export default Mylandingpage