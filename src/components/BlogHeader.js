import React from 'react'
import '../stylesheets/BlogHeader.css'

function BlogHeader(props) {

  function Publish_Button(){
    
  }


  return (
    <div className='header_container'>
      <div className='header-left'>
        <div className='blog-header'>
          {props.data.title}
        </div>
        <p className='header_author_data'>
          {props.data.author_id}{/* Thsi will be a lik in the end */}
          
        </p>
      </div>
      <div className='header-right'>
        
        <button className='Delete-but but'>Delete</button>
      </div>
    </div>


  )
}

export default BlogHeader
