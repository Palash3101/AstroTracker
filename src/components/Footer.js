import '../stylesheets/Footer.css'

function Footer() {
  const link = 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=4377s';

  return (

        <div className='foot-link-box'>
            <a href= {link} className='foot-links'>About Us</a>
            <a href= {link} className='foot-links'>Contact Us</a>
            <a href= {link} className='foot-links'>Subscribe</a>
            <a href= {link} className='foot-links'>Customer Service</a>
            <a href= {link} className='foot-links'>Advertising</a>
            <a href= {link} className='foot-links'>Terms of Use</a>
            <a href= {link} className='foot-links'>Privacy Policy</a>

        </div>
  )
}

export default Footer
