import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Myform() {
    return (
        <div className='container-fluid p-3 mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center h3 border-bottom pb-3 '>welcome to form types</p>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-3'>

                                {/* sdf */}
                                <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                                    <Link to="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

                                        <span className="fs-4">Sidebar</span>
                                    </Link>
                                    <hr />
                                    <ul className="nav nav-pills flex-column mb-auto">
                                        <li className="nav-item">
                                            <Link to="form1" className="nav-link link-body-emphasis">
                                                Form1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="custom" className="nav-link link-body-emphasis">
                                               custom
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="nav-link link-body-emphasis">
                                                Orders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="nav-link link-body-emphasis">
                                                Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="nav-link link-body-emphasis">
                                                Customers
                                            </Link>
                                        </li>
                                    </ul>


                                </div>

                                {/* end */}
                            </div>
                            <div className='col-9'>
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