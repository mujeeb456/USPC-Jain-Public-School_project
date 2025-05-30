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
            <a href="/#">HOME</a>
          </li>
          <li>
            <a href="/#">ABOUT US</a>
          </li>
          <li>
            <a href="/#">ACADEMIC</a>
          </li>
          <li>
            <a href="/#">STUDENT LIFE</a>
          </li>
          <li>
            <a href="/#">ACHIEVEMENTS</a>
          </li>
          <li>
            <a href="/#">GALLERY</a>
          </li>
          <li>
            <a href="/#">INFRASTRUCTURE</a>
          </li>
          <li>
            <a href="/#">FACULTY</a>
          </li>
          <li>
            <a href="/#">LATEST NEWS</a>
          </li>
          <li>
            <a href="/#">CAREER</a>
          </li>
          <li>
            <a href="/#">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
