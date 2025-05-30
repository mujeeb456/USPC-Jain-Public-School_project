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
      /* eslint-disable jsx-a11y/anchor-is-valid */
      <nav className="main-navbar">
        <ul className="navbar-links">
          <li>
            <a href="/" className="nav-button">
              HOME
            </a>
          </li>
          <li>
            <a href="/about" className="nav-button">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/academic" className="nav-button">
              ACADEMIC
            </a>
          </li>
          <li>
            <a href="/student-life" className="nav-button">
              STUDENT LIFE
            </a>
          </li>
          <li>
            <a href="/achievements" className="nav-button">
              ACHIEVEMENTS
            </a>
          </li>
          <li>
            <a href="/gallery" className="nav-button">
              GALLERY
            </a>
          </li>
          <li>
            <a href="/infrastructure" className="nav-button">
              INFRASTRUCTURE
            </a>
          </li>
          <li>
            <a href="/faculty" className="nav-button">
              FACULTY
            </a>
          </li>
          <li>
            <a href="/latest-news" className="nav-button">
              LATEST NEWS
            </a>
          </li>
          <li>
            <a href="/career" className="nav-button">
              CAREER
            </a>
          </li>
          <li>
            <a href="/contact-us" className="nav-button">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
      /* eslint-enable jsx-a11y/anchor-is-valid */
    </div>
  );
}

export default Navbar;
