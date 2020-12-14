import React, { Component } from "react";
import { Link } from "react-router-dom";
class landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Parent-Portal</h1>
                <p className="lead">
                  To make your kids helpful, responsible by giving rewards - Use Parent-Portal
                </p>
                <hr />

                <Link
                  to="/register"
                  className="btn btn-lg btn-info mr-2"
                  id="signup-link"
                >
                  Sign Up&nbsp;&nbsp;&nbsp;
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login&nbsp;&nbsp;&nbsp;
                </Link>
                <Link to="/forgotPassword" className="btn btn-lg btn-light">
                  ForgotPassword
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default landing;
