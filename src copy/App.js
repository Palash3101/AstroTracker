// App.js
import React from "react";
import { About } from "./About";
import { Highlights } from "./Highlights";
import { highlightsData } from "./highlightsData"; // or custom data

const App = () => {
  return (
    <div>
      {/* About Section */}
      <About />

      {/* Highlights Section */}
      <Highlights data={highlightsData} />
    </div>
  );
};

export default App;
