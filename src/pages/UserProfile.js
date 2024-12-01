import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogContainer from '../components/BlogContainer';
//import Footer from '../components/Footer';
import Header from '../components/Header';
import '../stylesheets/UserProfile.css';

function UserProfile() {

  // const blog_data = [
  //   {
  //     id: '1',
  //     title: 'Saturn\'s Rings',
  //     desc: 'How long will Saturn\'s Rings last before they disappear?',
  //     author: 'author'
  //   },
  //   {
  //     id: '2',
  //     title: 'Saturn\'s Rings',
  //     desc: 'How long will Saturn\'s Rings last before they disappear?',
  //     author: 'author'
  //   },
  //   {
  //     id: '3',
  //     title: 'Saturn\'s Rings',
  //     desc: 'How long will Saturn\'s Rings last before they disappear?',
  //     author: 'author'
  //   }
  // ];

  const [blog, setBlog]  = useState([]);

  const [data, setData] = useState([]);
  const username = useParams().username;

  useEffect(
    ()=>{
      const fetchData = async()=>{
        try{
          var res  = await axios.get("http://localhost:8800/user/"+username);
          setData(res.data[0]);
          res = await axios.get("http://localhost:8800/user/"+username+"/blog");
          setBlog(res.data.slice(0,3));
        }
        catch(err){
          console.log(err)
        }
      };
      fetchData();
    }
  )


  return (
    <main>
      <Header />
      <div className='UserProfile'>
        <div className='personal-data-box'>
          <div className='profile-image'>
            <img src={require('../images/image3.jpg')} alt="Profile" />
          </div>

          <div className='personal-data'>
            <div className='name'>{data.user_name}</div>
            <div className='username'>{data.username}</div>
            <div className='other'>{data.pass}</div>
          </div>

          <div className='edit-profile'>
            <button className='edit-profile-button'>Edit Profile</button>
          </div>
        </div>

        <div className='about-me-box'>
          <div className='subheading'>About Me</div>
          <div className='about-me-data'>{data.about_me}</div>
        </div>

        <div className='pinned-blog-box'>
          <div className='pinned_subheading'>My Blogs</div>
          <BlogContainer data={blog} />
        </div>

        <div className='action-buttons'>
          <button className='action-button'>Write New Blog</button>
          <button className='action-button'>My Blogs</button>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
