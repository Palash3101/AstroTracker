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
          {props.data.author_data.name}<br/>
          {props.data.author_data.username}{/* Thsi will be a lik in the end */}
          
        </p>
      </div>
      <div className='header-right'>
        
        {
          (()=>{
            if (props.data.published_status){
              return <button className='unPublish-but but'>Unpublish</button>      
            }
            else{
              return <button className='Publish-but but'>Publish</button>
            } 
          })()
        }
        <button className='Delete-but but'>Delete</button>
      </div>
    </div>


  )
}

export default BlogHeader
