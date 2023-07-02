import React from 'react'

function Customform() {
  return (
    <div className='container-fluid p-4 bg-light shadow'>
      <div className='row'>
        <div className='col-md-12 text-center mt-3 pb-3'>
            <h4>Custom formvalidation</h4>
        </div>
        <div className='col-md-6'>
            <label className="form-label">FullName</label>
            <input type="text" className="form-control"/>
            <div className="form-text">field required</div>
        </div>
        <div className='col-md-6'>
            <label className="form-label">Email id</label>
            <input type="email" className="form-control"/>
            <div className="form-text">field required</div>
        </div>
        <div className='col-md-6'>
            <label className="form-label">DOB</label>
            <input type="date" className="form-control"/>
            <div className="form-text">field required</div>
        </div>
        <div className='col-md-6'>
            <label className="form-label">comments</label>
            <input type="text" className="form-control"/>
            <div className="form-text">field required</div>
        </div>
        <div className='col-md-12 mt-3 text-center'>
            <input type="submit" className="btn btn-primary" value="submit" />
          
        </div>
      </div>
    </div>
  )
}

export default Customform