import React, { useState, useEffect } from 'react';
import '../stylesheets/EditProfile.css';
import NavBar from '../components/NavBar'
import Header from '../components/Header'

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProfile = () => {
    const navigate = useNavigate();
    const username = useParams().username;

    const [user_name, setUser_name] = useState("");
    const [Aboutme, setAboutme] = useState("");

    useEffect(
        ()=>{
          const fetchData = async()=>{
            try{
              var res  = await axios.get("http://localhost:8800/user/"+username)
              if (user_name==""){
                  setAboutme(res.data[0].about_me)
                  setUser_name(res.data[0].user_name)
              }
            }
            catch(err){
              console.log(err)
            }
          };
          fetchData();
        }
      )

    const handleSubmit = async e => {
        e.preventDefault();
        // add image functionality
        const userData = {user_name,Aboutme};
        //change karlena ye part
        try{
            console.log(userData);
            await axios.put("http://localhost:8800/user/"+username+"/edit", userData).then(res=>{console.log(res)})
            navigate('/user/'+username);
        }catch(err){
            console.log(err);
        }

        console.log("Profile Updated:", userData);
        // setTitle("");
        // setContent("");
        // setDesc("");
        // setImage(null);
        //alert("Profile Updated Successfully!");
    };

return (
    <main>
    <Header/>
    <NavBar />
    <div class="EditProfile">
        <div class="head">Edit your profile</div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Username</label>
        <input
            type="text"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            placeholder="Enter blog title"
            required
        />
        </div>
        <div className="form-group">
        <label>About Me</label>
        <textarea
            value={Aboutme}
            onChange={(e) => setAboutme(e.target.value)}
            placeholder="Write your blog content here"
            required
        />
        </div>
        {/* <div className="form-group">
        <label>Add Profile Image</label>
        <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
        />
        {image && <p className="file-info">Selected File: {image.name}</p>}
        </div> */}
        <button type="submit" className="submit-button">
        Submit Changes
        </button>
    </form>
    </div>
    </main>
);
};


export default EditProfile;