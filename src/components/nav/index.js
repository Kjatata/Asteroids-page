import "./index.css";
import { Link } from "react-router-dom";

const Nav = ({ type }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="nav-link navbar-brand" to="/home">
      <img src="./../../../favicon.ico" className="navbar-img" alt="..." />
      <span className="text-warning"> Asteroids Page</span>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className={`nav-item ${type === "home" ? "active" : ""}`}>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className={`nav-item ${type === "asteroids" ? "active" : ""}`}>
          <Link className="nav-link" to="/asteroids">
            Asteroids
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
