import Home from "./pages/Home.js";
import BlogView from "./pages/BlogView.js";
import UserProfile from "./pages/UserProfile.js";

import "./stylesheets/App.css";

import AstronomyCalendar from "./pages/AstronomyCalendar.js";
import Login from "./pages/LoginForm.js";
import Signup from "./pages/Signup.js";
//import Blog from "./pages/Blog.js";
import NewGallery from "./pages/NewGallery.js";
import NewBlog from "./pages/NewBlog.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
     
      <Router>
        <Routes>

          <Route path="/calender" element={<AstronomyCalendar/>} />
          {/* <Route path="/blog" element={<Blog/>} /> */}
          <Route path="/Gallery" element={<NewGallery/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/user/:username/new" element={<NewBlog/>}/>
          <Route path="/user/:username" element={<UserProfile/>}/>

          <Route path="/blog/:id" element={<BlogView/>}/>
            
        </Routes>
      </Router>

    </div>

    
  );
}

export default App;