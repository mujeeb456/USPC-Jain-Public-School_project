import React from "react";
import "./Features.css";
import backgroundPattern from "../Assests/transparent-pattern.jpg"; 

const Features = () => {
  return (
    <div className="features-section">
      {/* Background pattern */}
      <div
        className="features-bg-pattern"
        style={{ backgroundImage: `url(${backgroundPattern})` }}
      ></div>

      <div className="container">
        <div className="features-grid">
          {/* Admissions Card */}
          <div className="feature-card">
            <h3>ADMISSIONS</h3>
            <p>
              Eligibility for admission to Pre-Nursery class is between 2.5 to
              3.3 years, for Nursery 3.4 to 4 years.
            </p>
            <div className="feature-more">MORE</div>
          </div>

          {/* Facilities Card */}
          <div className="feature-card">
            <h3>FACILITIES</h3>
            <p>
              A child spends his/her maximum time in school as a student. The
              school infrastructure then becomes a major factor behind how a
              child...
            </p>
            <div className="feature-more">MORE</div>
          </div>

          {/* Activities Card */}
          <div className="feature-card">
            <h3>ACTIVITIES</h3>
            <p>
              The development of mind and body go hand-in-hand. In short,
              physical education plays a vital role in creating...
            </p>
            <div className="feature-more">MORE</div>
          </div>

          {/* Workshops Card */}
          <div className="feature-card">
            <h3>WORKSHOPS</h3>
            <p>
              A workshop is a period of discussion or practical work on a
              particular subject in which a group of people share their
              knowledge or experience.
            </p>
            <div className="feature-more">MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
