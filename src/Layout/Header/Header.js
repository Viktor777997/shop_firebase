import React, { Component } from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div className="container">
            <a className="navbar-brand" href="/home">
              Navbar
            </a>
            <button
              className="navbar-toggler btn btn-dark ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <NavLink className="nav-link " to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/price">
                    Price
                  </NavLink>
                </li>

                <li className="nav-item active">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0 ">
                <input
                  className="form-control mr-sm-2 search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn my-2 my-sm-0 search-btn" type="button"></button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
