import "./Liveupdate.css";
import cwcImage from "../assets/images/patiala2.jpeg"; // Place the cwc image in the src folder
//dasvir
function Liveupdate() {
  return (
    <div className="live">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://weather-live-snowy.vercel.app" target="_blank" rel="noopener noreferrer">
              Weather
            </a>
          </li>
          <li className="nav-item">Live Updated</li>
        </ul>
      </nav>
      <div className="content">
        <img src={cwcImage} alt="CWC Logo" className="cwc-image" />
        <h1>Welcome to Live Weather Updates</h1>
      </div>
    </div>
  );
}

export default Liveupdate;

