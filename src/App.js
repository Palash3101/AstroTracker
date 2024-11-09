import Home from "./pages/Home.js";
import UserProfile from "./pages/UserProfile.js";

import { Highlights } from "./components/Highlights.js";
import "./stylesheets/App.css";
import AboutUs from "./components/AboutUs";
import { highlightsData, aboutUsData } from "./components/data";
import Login from "./pages/LoginForm.js";
import Signup from "./pages/Signup.js";

import Login from "./pages/LoginForm.js";
import Signup from "./pages/Signup.js";


function App() {
  return (
    <div>

      <UserProfile/>
      {/* <Home /> */}

    {/* About Us Section */}
 <AboutUs data={aboutUsData} />

      {/* Highlights section */}
      <Highlights data={highlightsData} />
      {/* <Home />
      <Login />
      <Signup /> */}
      

    </div>

    
  );
}

export default App;