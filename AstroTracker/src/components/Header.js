import React from 'react'
import '../stylesheets/Header.css'

function Header() {
  const link = 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=4377s';

  return (
      <div className='head-box'>
        <div className='top-box'>CELEST</div>
        <div className='head-link-box'>

          <a href= {link} className='head-links'>Home</a>
          <a href= {link} className='head-links'>Archive</a>
          <a href= {link} className='head-links'>About</a>
          <a href= {link} className='head-links'>Contact</a>
          <a href= {link} className='head-links'>Blog</a>
          <a href= {link} className='head-links'>Gallery</a>

        </div>
      </div>

  )
}

export default Header
