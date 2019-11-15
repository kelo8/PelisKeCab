import React from "react";
import LogoNavBar from "../components/img/claqueta.svg";
import "../components/styles/navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          PelisCabe
        </a>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li classNmae="nav-item active">
              <a className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Listas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Peliculas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
