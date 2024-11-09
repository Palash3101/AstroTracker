import React from "react";
import HighlightCard from "./HighlightCard";
import "../stylesheets/Highlights.css";

export const Highlights = ({ data }) => {
  return (
    <section id="portfolio" className="highlights-section">
      <div className="container">
        <div className="section-title">
          <h2>Highlights of the Week</h2>
          <p>Explore some of the most exciting updates and news of the week!</p>
        </div>
        <div className="grid-container">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <HighlightCard key={index} item={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
