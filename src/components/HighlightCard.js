import React from "react";
import "../stylesheets/HighlightCard.css";

const HighlightCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default HighlightCard;
