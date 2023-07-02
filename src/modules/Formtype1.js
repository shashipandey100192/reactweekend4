import React from 'react';
import { useForm } from 'react-hook-form';

const mydata=[];

function Formtype1() {

  const { register, handleSubmit,formState: { errors }} = useForm();

  const mysubmit = (data)=>{
    console.log(data);
    mydata.push(data);
    console.log(mydata);
    localStorage.setItem("mydatalist",JSON.stringify(mydata));

  }


  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container-fluid p-4 bg-light shadow'>
      <div className='row'>
      <div className='col-md-12 text-center mt-3 pb-3'>
            <h4>reactHooksForm formvalidation</h4>
        </div>
        <div className='col-md-6'>
            <label className="form-label">FullName</label>
            <input type="text" className="form-control" {...register("fullname",{required:true})}/>
            {errors.fullname && <p className='text-danger'>fullname is required</p>}
        </div>
        <div className='col-md-6'>
            <label className="form-label">Email id</label>
            <input type="email" className="form-control" {...register("email",{required:true})} />
            {errors.email && <p className='text-danger'>email is required</p>}
        </div>
        <div className='col-md-6'>
            <label className="form-label">DOB</label>
            <input type="date" className="form-control" {...register("dob",{required:true})} />
            {errors.dob && <p className='text-danger'>date is required</p>}
        </div>
        <div className='col-md-6'>
            <label className="form-label">comments</label>
            <input type="text" className="form-control" {...register("comment",{required:true})}/>
            {errors.comment && <p className='text-danger'>comments is required</p>}
        </div>
        <div className='col-md-12 mt-3 text-center'>
            <input type="submit" className="btn btn-primary" value="submit" />
          
        </div>
      </div>
    </div>
    </form>
  )
}

export default Formtype1