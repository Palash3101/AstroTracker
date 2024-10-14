import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import backgroundImage from '../images/home_page_background.jpg'

function Home() {
  return (
    <main>
    {/* <div className="main-content-background"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}> */}
      <Header />
      <Content />
      <Footer />
      {/* </div> */}
    </main>
  )
}

export default Home
