import React from "react";
import { aboutData } from "./aboutData"; // Adjust the path as necessary

export const About = (props) => {
  const data = props.data || aboutData; // Use props data if available, otherwise fallback to default data

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{data.paragraph}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
