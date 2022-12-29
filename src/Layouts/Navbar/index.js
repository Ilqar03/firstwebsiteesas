import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

function Navbar() {
  return (
    <nav>
        <div className='start_bootstrap'><p><NavLink className="navlink" to="/">Start Bootstrap</NavLink></p></div>
        <div className='hamburger'><button><i className="fa-solid fa-bars"></i></button></div>
        <div className='nav_item'>
            <ul>
                <li><NavLink className="navlink" to='/'>Home</NavLink></li>
                <li><NavLink className="navlink" to='/about'>About</NavLink></li>
                <li><NavLink className="navlink" to='/contact'>Contact</NavLink></li>
                <li><NavLink className="navlink" to='/pricing'>Pricing</NavLink></li>
                <li><NavLink className="navlink" to='/faq'>FAQ</NavLink></li>
                <li><NavLink className="navlink" to='/blog'>Blog<i className="fa-solid fa-caret-down"></i></NavLink></li>
                <li><NavLink className="navlink" to='/portfolio'>Portfolio<i className="fa-solid fa-caret-down"></i></NavLink></li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar