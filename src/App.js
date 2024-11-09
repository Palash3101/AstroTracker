// import Home from "./pages/Home.js";
import UserProfile from "./pages/UserProfile.js";
import { Highlights } from "./components/Highlights.js";
import "./stylesheets/App.css";
import AboutUs from "./components/AboutUs";
import { highlightsData, aboutUsData } from "./components/data";

function App() {
  return (
    <div>
      <UserProfile/>
      {/* <Home /> */}

    {/* About Us Section */}
 <AboutUs data={aboutUsData} />

      {/* Highlights section */}
      <Highlights data={highlightsData} />
      
     
    </div>

    
  );
}

export default App;
