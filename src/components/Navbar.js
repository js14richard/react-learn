import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='fixed-top'>
        <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img src="/images/logo.png" className="rounded-pill nav_logo" alt=''/>
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className='nav-link navigation_links' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link navigation_links' to="user">User</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link navigation_links' to="products">Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link navigation_links' to="cart">Cart</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    </div>
  )
}