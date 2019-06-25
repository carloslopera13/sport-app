import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/admin.jpg";

const Admin = () => (
  <main className="admin">
    <img className="admin__image" src={background} alt="admin" />
    <form className="admin__form ">
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
        </form>
  </main>
);

export default Admin;