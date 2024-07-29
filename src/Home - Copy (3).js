import React from 'react';
import pic from './images/logo2.jpg';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ backgroundColor: 'skyblue' }}>
          <Link className="navbar-brand" to='/' style={{ marginRight: '550px' }}>
            <img src={pic} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/Aboutus'>Aboutus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Contact'>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Checkbmi">CheckBMI</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  API
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/Cloths'>Cloths</Link></li>
                  <li><Link className="dropdown-item" to='/Weather'>Weather</Link></li>
                  <li><Link className="dropdown-item" to='/Movies'>Movies</Link></li>
                  <li><Link className="dropdown-item" to='/Food'>Food</Link></li>
                  <li><Link className="dropdown-item" to='/News'>News</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
     );
}



