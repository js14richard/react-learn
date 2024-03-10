import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='fixed-top text-center'>
      <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_navbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="main_navbar">
            <div className='d-lg-flex d-md-flex align-items-center justify-content-between w-100'>
              <Link className="navbar-brand" to="/">
                <img src="/images/logo.png" className="rounded-pill nav_logo" alt='' />
                <h3 className='d-inline-block logo_text mt-1'>Shopify</h3>
              </Link>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link navigation_links' to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link navigation_links' to="user">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link navigation_links' to="products">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link navigation_links' to="cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
