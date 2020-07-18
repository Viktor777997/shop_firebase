import React, { Component } from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
// import { navigate } from "@reach/router"
import { withRouter } from 'react-router-dom'

class Header extends Component {
  state = {
    term: '',
  }

  onChange = (e) => {
    this.setState({ term: e.target.value })
  }
  handleKeyDown = (e) => {
    if (e.charCode == 13) {
      this.props.history.push(`/search_query=${this.state.term}`)
    }
  }
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div className="container">
            <a className="navbar-brand" href="/">
              Хозтовары
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
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/price">
                    Прайс-лист
                  </NavLink>
                </li>

                <li className="nav-item active">
                  <NavLink className="nav-link" to="/contact">
                    Контакты
                  </NavLink>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0 ">
                <input
                  className="form-control mr-sm-2 search-input"
                  type="search"
                  placeholder="Поиск"
                  aria-label="Search"
                  value={this.state.term}
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyDown}
                />
                <Link className="btn my-2 my-sm-0 search-btn" to={`/search_query=${this.state.term}`} >
                  <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  </svg>
                </Link>

              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
