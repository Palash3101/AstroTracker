import React from 'react'

import '../stylesheets/Home.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogContainer from '../components/BlogContainer'
function Home() {

  const data = [
    {
      id:'1',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'2',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'3',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'4',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'5',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'6',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    }
  ];

  return (
    <main>
      <Header />
      <div className='blog-box'>
        <BlogContainer data={data} />
      </div>
      <Footer />
    </main>
  )
}

export default Home
