import React from 'react'
import '../stylesheets/Header.css'

function Header() {
  const link = 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=4377s';

  return (
      <div className='head-box'>
        <div className='top-box'>Ask Astro</div>
        <div className='head-link-box'>

          <a href= {link} className='head-links'>Home</a>
          <a href= {link} className='head-links'>Archive</a>
          <a href= {link} className='head-links'>Archive</a>
          <a href= {link} className='head-links'>Archive</a>
          <a href= {link} className='head-links'>Archive</a>
          <a href= {link} className='head-links'>Archive</a>

        </div>
      </div>

  )
}

export default Header
