import React from "react";
import "./ResourcesSection.css";

const ResourcesSection = () => {
  return (
    <div className="resources-container">
      <div className="resources-grid">
        {/* Resources Column */}
        <div className="resource-column">
          <h3 className="section-title">RESOURCES</h3>
          <ul className="resource-links">
            <li>
              <a href="/admissions">Admissions</a>
            </li>
            <li>
              <a href="/date-sheet">Date Sheet</a>
            </li>
            <li>
              <a href="/achievements">Achievements</a>
            </li>
            <li>
              <a href="/fee-payment">Online Fee Payment</a>
            </li>
            <li>
              <a href="/assignments">Assignments</a>
            </li>
            <li>
              <a href="/circulars">Circulars</a>
            </li>
          </ul>
        </div>

        {/* Facebook Column */}
        <div className="resource-column facebook-column">
          <h3 className="section-title">FIND US ON FACEBOOK</h3>
          <div className="facebook-card">
            <div className="facebook-header">
              <div className="facebook-logo">USPC Jain G...</div>
              <div className="facebook-followers">37K Followers LCSCHOOL</div>
            </div>
            <button className="facebook-button">Follow Page</button>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="resource-column">
          <h3 className="section-title">QUICK LINKS</h3>
          <ul className="resource-links">
            <li>
              <a href="/tours">Tour & Excursions</a>
            </li>
            <li>
              <a href="/ncc">NCC</a>
            </li>
            <li>
              <a href="/alumni">Alumni</a>
            </li>
            <li>
              <a href="/facilities">Facilities</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>

        {/* How to Reach Us Column */}
        <div className="resource-column">
          <h3 className="section-title">HOW TO REACH US</h3>
          <div className="map-links">
            <a href="/map" className="map-link">
              View larger map
            </a>
            <div className="address">
              <p>USPC JAIN PUBLIC SCHOOL</p>
              <p>PALM ESTATE 2025</p>
              <p>VIPER 2025</p>
            </div>
            <div className="map-credits">
              <span>T1 Google</span>
              <span>Map data ©2025</span>
              <a href="/terms">Terms</a>
              <a href="/report">Report</a>
              <span>@map.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
