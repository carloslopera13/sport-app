import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/background.png";

const Admin = () => (
  <main className="admin">
    <img className="admin__image" src={background} alt="background" />
    <h1 className="admin__title">Administrador</h1>
    <ul className="admin__options">
      <li className="admin__options-item">
        <Link to="/admin/profile">Mi perfil</Link>
        <br />
        <Link to="/admin/trainers">Entrenadores</Link>
        <br />
        <Link to="/admin/sports">Deportes</Link>
      </li>
    </ul>
  </main>
);

export default Admin;
