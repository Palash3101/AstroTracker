// import Home from "./pages/Home.js";
import UserProfile from "./pages/UserProfile.js";
import { About } from "./components/About";
import { Highlights } from "./components/Highlights";
import { highlightsData } from "./components/highlightsData";

function App() {
  return (
    <div>
      <UserProfile/>
      {/* <Home /> */}
      {/* About Section */}
      <About />

      {/* Highlights Section */}
      <Highlights data={highlightsData} />
    </div>

    
  );
}

export default App;
