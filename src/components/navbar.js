import React from "react";
import LogoNavBar from "../components/img/descarga.png";
import "../components/styles/navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand">
            <img
              className="Navbar__brand-logo"
              src={LogoNavBar}
              alt="LogoNav"
            />
            <span className="font-weight-light">Pelis</span>
            <span className="font-weight-bold">Cabe</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
