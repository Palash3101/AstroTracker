// Highlights.js
import React from "react";
import { highlightsData } from "./highlightsData"; // Adjust the path as necessary

export const Highlights = (props) => {
  const data = props.data || highlightsData; // Use props data if available, otherwise fallback to default data

  return (
    <div id="highlights">
      <div className="container">
        <h2>Highlights of the Week</h2>
        <div className="row">
          {data.events.map((event, index) => (
            <div className="col-md-4" key={`${event.title}-${index}`}>
              <div className="card">
                <img src={event.imageUrl} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
                  <p className="card-text">{event.description}</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
