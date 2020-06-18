import React, { Component } from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div className="container">
            <a className="navbar-brand" href="/">
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
                <button className="btn my-2 my-sm-0 search-btn" type="button">
                  <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg>
                </button>

              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
