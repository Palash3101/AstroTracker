import React from "react";
import BlogContainer from "./BlogContainer";
import "../stylesheets/Highlights.css";

export const Highlights = (props) => {
  return (
    <section id="portfolio" className="highlights-section">
      <div className="container">
        <div className="section-title">
          <h2>Highlights of the Week</h2>
          <p>Explore some of the most exciting updates and news of the week!</p>
        </div>
        <div className="grid-container">
          {/* Pass highlightsData to BlogContainer as a prop */}
          <BlogContainer data={props.data} />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
