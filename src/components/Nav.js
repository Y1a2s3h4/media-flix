import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App";
import "../App.css";

export default class Search_Movies extends Component {
  render() {
    return (
      <nav className="navbar  navbar-expand-lg navbar-light ">
        <div className="container text-uppercase">
          <Link to="/">
            <a className="navbar-brand text-white" href="#home">
              MediaFlix
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/movies">
                  Movies <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/tvshows">
                  T.V Shows
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#dropdown"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/popular">
                    Popular Movies
                  </Link>
                  <Link className="dropdown-item" to="/newreleases">
                    New-Releases Movies
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
