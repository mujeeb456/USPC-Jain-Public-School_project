import "./SchoolInfo.css";
import girl1 from "../Assests/girl1.jpg";
import girl2 from "../Assests/girl2.jpg";
import cake from "../Assests/birthday.jpg";
import Calendar from "./Calender";
function SchoolInfo() {
  return (
    <section className="sectioninfo">
      <div className="left-boxes">
        <button>📘 About School</button>
        <button>🧒 Kids Corner</button>
        <button>🏫 USPC Jain Elementary School</button>
        <button>📝 Reg. For School Programmes</button>
      </div>

      <div className="toppers">
        <div className="topper-card">
          <h4>🏅 TOPPERS X</h4>
          <img src={girl1} alt="Topper X" />
          <p>
            <strong>AKANKSHA SINGH</strong>
            <br />
            94%
          </p>
        </div>
        <div className="topper-card">
          <h4>🏅 TOPPERS XII</h4>
          <img src={girl2} alt="Topper XII" />
          <p>
            <strong>KRITIKA SHARMA</strong>
            <br />
            90%
          </p>
        </div>
      </div>

      <div className="birthday">
        <img src={cake} alt="Birthday" />
        <p>
          <strong>BIRTHDAY WISHES</strong>
        </p>
      </div>

      <div className="calendar">
        <Calendar />
      </div>
    </section>
  );
}

export default SchoolInfo;
