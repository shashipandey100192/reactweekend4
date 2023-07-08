import React from 'react';
import { Link } from 'react-router-dom';

function Mynav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contactus">Contactus</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="forms">forms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="chart">charts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="axios">axios api</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Mynav