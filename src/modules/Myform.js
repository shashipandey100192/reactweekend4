import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Myform() {
    return (
        <div className='container-fluid p-3 mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center h3 border-bottom pb-3'>welcome to form types</p>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-4'>
                                <h4>sidebar</h4>
                                <Link to="form1">form1</Link>
                            </div>
                            <div className='col-8'>
                                <h4>welcome to content</h4>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myform