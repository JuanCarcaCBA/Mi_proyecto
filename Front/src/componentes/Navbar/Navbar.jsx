import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar(){
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">MiProyecto</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}