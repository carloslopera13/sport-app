import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { signOut } from "../../state/Actions";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <NavLink to="/" activeClassName="selected">
        <h1>Sports!</h1>
      </NavLink>
      <div className="menu">
        <NavLink to="/sports" activeClassName="selected">
          Deportes
        </NavLink>
        <NavLink to="/trainers" activeClassName="selected">
          Entrenadores
        </NavLink>
        <NavLink to="/profile" activeClassName="selected">
          Mi perfil
        </NavLink>
        <button onClick={() => dispatch(signOut())}>Salir</button>
      </div>
    </header>
  );
};

export default Header;
