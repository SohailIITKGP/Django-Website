import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (location, path) => {
  if (location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = () => {
  const location = useLocation();

  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link
            style={currentTab(location, "/")}
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(location, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {/* {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(location, "/UserDashboard")}
              className="nav-link"
              to="/UserDashboard"
            >
              dashboard
            </Link>
          </li>
        )} */}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(location, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(location, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              onClick={() => {
                signout(() => {
                  window.location.href = "/"; 
                });
              }}
              className="nav-link text-warning"
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;