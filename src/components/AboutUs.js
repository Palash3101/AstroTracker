import React from "react";
import "../stylesheets/AboutUs.css";

const AboutUs = ({ data }) => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="about-us-content">
          {/* Left Side: Image */}
          <div className="about-image-container">
            <img src={data.image} alt="About Us" className="about-image" />
          </div>

          {/* Right Side: Text */}
          <div className="about-text">
            <h2>About Us</h2>
            <p className="about-description">{data.description}</p>

            <h3>Why Choose Us</h3>
            <div className="points-grid">
              {/* Points List */}
              {data.points1.concat(data.points2).map((point, index) => (
                <div key={index} className="point-item">
                  <span>✅</span> {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
