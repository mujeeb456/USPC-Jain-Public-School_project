// src/components/Navbar.js
import "./Navbar.css";
import logo from "../Assests/logo.png";

function Navbar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <img src={logo} alt="USPC Logo" className="school-logo" />
        <div className="school-info">
          <h1>USPC JAIN PUBLIC SCHOOL</h1>
          <p>
            AN ENGLISH MEDIUM SENIOR SECONDARY SCHOOL
            <br />
            <span className="affiliation">
              AFFILIATED TO C.B.S.E., NEW DELHI (VIDE AFFILIATION NO. 1630079)
            </span>
            <br />
            Jamalpur, Chandigarh Road, Ludhiana 141010 (Pb.) India
          </p>
          <p className="contact-info">
            📞 0161 - 4634954, 70871-37301 | 📧 uspcgroup@gmail.com
          </p>
        </div>
      </div>

      <div className="top-bar-right">
        <div className="follow-us">
          <span>FOLLOW US ON</span>
          <div className="icons">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
        <div className="buttons">
          <button className="btn yellow">📝 Online Fee</button>
          <button className="btn red">🔐 ERP Login</button>
          <button className="btn yellow">👨‍🎓 Admission</button>
        </div>
      </div>

      <nav className="main-navbar">
        <ul className="navbar-links">
          <li>
            <button className="nav-button">HOME</button>
          </li>
          <li>
            <button className="nav-button">ABOUT US</button>
          </li>
          <li>
            <button className="nav-button">ACADEMIC</button>
          </li>
          <li>
            <button className="nav-button">STUDENT LIFE</button>
          </li>
          <li>
            <button className="nav-button">ACHIEVEMENTS</button>
          </li>
          <li>
            <button className="nav-button">GALLERY</button>
          </li>
          <li>
            <button className="nav-button">INFRASTRUCTURE</button>
          </li>
          <li>
            <button className="nav-button">FACULTY</button>
          </li>
          <li>
            <button className="nav-button">LATEST NEWS</button>
          </li>
          <li>
            <button className="nav-button">CAREER</button>
          </li>
          <li>
            <button className="nav-button">CONTACT US</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
