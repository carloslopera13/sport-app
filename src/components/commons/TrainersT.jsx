import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/Entrenadores.jpg";

const Trainer = () => (
  <main className="trainer">
      <img className="trainer__image" src={background} alt="Entrenadores" />
    <form className="trainer__form ">
      <h1 className="trainer__title">Entrenador</h1>
     <ul className="trainer__options">
      <li className="trainer__options-item">
        <Link to="/trainer/profile">Mi Perfil</Link>
        <br />
        <Link to="/trainer/sports">Deportes</Link>
        <br/>
        <Link to="/trainer/students">Estudiantes</Link>
      </li>
     </ul>
    </form>
  </main>
);

export default Trainer;
