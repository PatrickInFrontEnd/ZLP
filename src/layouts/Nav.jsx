import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <NavLink to="/">
          <img src="" alt="" />
        </NavLink>
        <NavLink to="/">Strona główna</NavLink>
        <NavLink to="/drabinka">Drabinka</NavLink>
        <NavLink to="/regulamin">Regulamin</NavLink>
        <NavLink to="/plany">Co w planach</NavLink>
        <NavLink to="/rejestracja">Zarejestruj się</NavLink>
        <NavLink to="/logowanie">Zaloguj się</NavLink>
      </>
    );
  }
}

export default Nav;
