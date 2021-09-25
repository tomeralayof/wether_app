import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { useSelector } from "react-redux";

const NavBar = ({ location }) => {
  const [homeActive, setHomeActive] = useState(true);
  const idDarkMode = useSelector((state) => state.dark);

  return (
    <React.Fragment>
      <nav
        className={
          idDarkMode
            ? "navbar navbar-expand-lg navbar-light bg-dark shadow mb-5"
            : "navbar navbar-expand-lg navbar-light bg-light shadow mb-5"
        }
      >
        <div className="container-fluid ">
          <Link
            style={{ fontSize: "2vw" }}
            onClick={() => setHomeActive(true)}
            to="/"
            className={
              idDarkMode
                ? "navbar-brand text-primary"
                : "navbar-brand text-dark"
            }
          >
            Herolo Wether App , {location.country} , {location.city} ,{" "}
            {location.temp} C°
          </Link>

          <button
            className={
              idDarkMode ? "navbar-toggler bg-primary" : "navbar-toggler"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ToggleButton />
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setHomeActive(true)}
                  to="/"
                  className={
                    homeActive
                      ? "btn btn-outline-primary active"
                      : "btn btn-outline-primary"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setHomeActive(false)}
                  to="/favorite"
                  className={
                    homeActive
                      ? "btn btn-outline-primary"
                      : "btn btn-outline-primary active"
                  }
                >
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
