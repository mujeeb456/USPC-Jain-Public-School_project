// src/components/InfoSection.js
import React from "react";
import "./InfoSection.css";
import vicePresidentImg from "../Assests/vice-president.jpg"; // You'll need to add this image

const InfoSection = () => {
  return (
    <div className="desks-section">
      <div className="container">
        <div className="desks-row">
          {/* Sr. Vice President's Desk */}
          <div className="desk-card">
            <div className="profile-header">
              <img
                src={vicePresidentImg}
                alt="Sh. Mohinder Paul Jain"
                className="profile-img"
              />
              <h3>From the Sr. Vice President's Desk</h3>
            </div>
            <p>
              Foresight, ability to seize the opportunity, relentless drive to
              succeed and tremendous acumen in recognizing the needs of the
              society and integrating knowledge with professional inputs are the
              secrets behind USPC which have always kept us at the forefront of
              Education, value creation and a sustainable model of growth and
              achievement for the past three decades.
            </p>
            <div className="read-more-btn">Read More</div>
            <div className="author">
              Sh. Mohinder Paul Jain (Sr. Vice President)
            </div>
          </div>

          {/* Principal's Desk */}
          <div className="desk-card">
            <h3>From the Principal's Desk</h3>
            <p>
              "USPC JAIN PUBLIC School" My own AlmaMatar, is an amalgamation of
              competent teachers, state-of-the-art infrastructure and an
              experienced and efficient administration. The school came into
              existence with the vision of creating a safe and supportive
              environment for its students.
            </p>
            <div className="read-more-btn">Read More</div>
            <div className="author">Ms. Vinny Malhotra (Principal)</div>
          </div>

          {/* Upcoming Events */}
          <div className="desk-card events-card">
            <h3>Upcoming Events/Notifications</h3>
            <ul className="events-list">
              <li>
                <span>New Academic Session (2025-2026)</span>
                <span className="event-read-more">Read more...</span>
              </li>
              <li>
                <span>Datesheet Of PT-I (I-XII) MAY-2025</span>
                <span className="event-read-more">Read more...</span>
              </li>
              <li>
                <span>HOLIDAY HOMEWORK 2024-2025</span>
                <span className="event-read-more">Read more...</span>
              </li>
              <li>
                <span>CBSE BOARD RESULT CLASSES X & XII 2024-2025</span>
                <span className="event-read-more">Read more...</span>
              </li>
              <li>
                <span>LIST OF BOOKS FOR THE SESSION 2025-2026</span>
                <span className="event-read-more">Read more...</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
