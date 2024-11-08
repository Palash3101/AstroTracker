import React from 'react'
import '../stylesheets/NavBar.css'

function Header() {
  const link = 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=4377s';

  return (
    <div className='nav-bar'>
        <a href= {link} className='head-links'>Home</a>
        <a href= {link} className='head-links'>Astro Calender</a>
        <a href= {link} className='head-links'>Gallery</a>
        <a href= {link} className='head-links'>Blogs</a>
        <a href= {link} className='head-links'>Login/SignUp</a>

    </div>

  )
}

export default Header