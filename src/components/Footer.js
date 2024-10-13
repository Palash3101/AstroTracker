import '../stylesheets/Footer.css'

function Footer() {
  const link = 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=4377s';

  return (
    <div>
      <div className='foot-box'>
        <div className='foot-link-box'>
            <a href= {link} className='foot-links'>Home</a>
            <a href= {link} className='foot-links'>Archive</a>
            <a href= {link} className='foot-links'>Archive</a>
            <a href= {link} className='foot-links'>Archive</a>
            <a href= {link} className='foot-links'>Archive</a>
            <a href= {link} className='foot-links'>Archive</a>

        </div>
        <div className='foot-note'> aur kuch likhna ho toh</div>
      </div>
    </div>
  )
}

export default Footer
