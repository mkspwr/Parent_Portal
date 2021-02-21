import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Parent-Portal
            {/* <img src={logo} width="auto" height="100%" alt="connexion logo" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register" id="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" id="nav-link2">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
