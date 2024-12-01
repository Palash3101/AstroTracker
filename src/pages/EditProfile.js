import React, { useState } from 'react';
import '../stylesheets/EditProfile.css';
import NavBar from '../components/NavBar'
import Header from '../components/Header'

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const NewBlog = () => {
    const navigate = useNavigate();
    const username = useParams().username;

    const [Username, setUsername] = useState("");
    const [Aboutme, setAboutme] = useState("");
    const [image, setImage] = useState(null);
    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        // add image functionality
        const blogData = {Username,Aboutme};
        //change karlena ye part
        try{
            console.log(blogData);
            await axios.post("http://localhost:8800/user/palash/new", blogData).then(res=>{console.log(res)})
            navigate('/user/'+username);
        }catch(err){
            console.log(err);
        }

        console.log("Profile Updated:", blogData);
        // setTitle("");
        // setContent("");
        // setDesc("");
        // setImage(null);
        alert("Profile Updated Successfully!");
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
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="form-group">
        <label>Add Profile Image</label>
        <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
        />
        {image && <p className="file-info">Selected File: {image.name}</p>}
        </div>
        <button type="submit" className="submit-button">
        Submit Changes
        </button>
    </form>
    </div>
    </main>
);
};


export default NewBlog;