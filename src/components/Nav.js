import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Nav = ({ loggedIn, currentUser }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <NavLink
              className="p-4 block sm:inline-block"
              activeClassName="text-blue-900"
              exact
              to="/"
            >
              NormalRoute
            </NavLink>
            <NavLink
              className="p-4 block sm:inline-block"
              activeClassName="text-blue-900"
              exact
              to="/pokemons_list"
            >
              PokemonsList
            </NavLink>
          </div>
          <div className="sm:text-right">
            {loggedIn ? (
              <>
                <Logout />
              </>
            ) : (
              <div>
                <NavLink
                  className="p-4 inline-block"
                  activeClassName="text-blue-900"
                  exact
                  to="/signup"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  className="p-4 inline-block"
                  activeClassName="text-blue-900"
                  exact
                  to="/login"
                >
                  Log In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { loggedIn, currentUser } }) => {
  return { loggedIn, currentUser };
};

export default connect(mapStateToProps)(Nav);
