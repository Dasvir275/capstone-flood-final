import "./Liveupdate.css";
import cwcImage from "../images/patiala2.jpeg"; // Place the cwc image in the src folder

function Liveupdate() {
  return (
    <div className="live">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://weather-live-snowy.vercel.app" target="_blank" rel="noopener noreferrer" className="button-link">
              Weather
            </a>
          </li>
          <li className="nav-item">Live Updated</li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <div className="content">
          <img src={cwcImage} alt="CWC Logo" className="cwc-image" />
          <h1>Welcome to Live Weather Updates</h1>
        </div>
      </div>
      <footer className="footer">
        <p>Reach Out for Support and Inquiries Anytime</p>
      </footer>
    </div>
  );
}

export default Liveupdate;


