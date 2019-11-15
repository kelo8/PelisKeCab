import React from "react";
import LogoNavBar from "../components/img/descarga.png";
import "../components/styles/navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          PelisCabe
        </a>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Listas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Peliculas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
