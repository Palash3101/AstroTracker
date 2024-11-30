import Home from "./pages/Home.js";
import BlogView from "./pages/BlogView.js";
import UserProfile from "./pages/UserProfile.js";

import "./stylesheets/App.css";

import AstronomyCalendar from "./pages/AstronomyCalendar.js";
import Login from "./pages/LoginForm.js";
import Signup from "./pages/Signup.js";
import Blog from "./pages/Blog.js";
import NewGallery from "./pages/NewGallery.js";


function App() {
  return (
    <div>
      <Home/>
      <Login/>
      <Signup/>
      <UserProfile/>
      <NewGallery/>
      <AstronomyCalendar/>
      {/* <Blog/> */}
      {/* <BlogView/> */}
      
    </div>

    
  );
}

export default App;