import React, { useState } from 'react';
import '../stylesheets/NewBlog.css';
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const NewBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const blogData = {
        title,
        content,
        image,
        };
        console.log("Blog Data Submitted:", blogData);
        setTitle("");
        setContent("");
        setImage(null);
        alert("Blog Submitted Successfully!");
    };

return (
    <main>
    <Header/>
    <NavBar />
    <div class="NewBlog">
        <div class="head">Write a New Blog</div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Title</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
        />
        </div>
        <div className="form-group">
        <label>Content</label>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here"
            required
        />
        </div>
        <div className="form-group">
        <label>Add Image</label>
        <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
        />
        {image && <p className="file-info">Selected File: {image.name}</p>}
        </div>
        <button type="submit" className="submit-button">
        Submit Blog
        </button>
    </form>
    </div>
    </main>
);
};


export default NewBlog;
