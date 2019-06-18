import React from "react";
import { Link } from "react-router-dom";

const Trainer = () => (
  <main className="trainer">
    <h1 className="trainer__title">Entrenador</h1>
    <ul className="trainer__options">
      <li className="trainer__options-item">
        <Link to="/trainer/profile">Mi Perfil</Link>
        <Link to="/trainer/sports">Deportes</Link>
      </li>
    </ul>
  </main>
);

export default Trainer;