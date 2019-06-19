import React from "react";
import { useDispatch } from "react-redux";
import serialize from "form-serialize";

import { loginUser } from "../../state/Actions";
import background from "../../assets/background.png";

const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = serialize(evt.target, { hash: true });
    dispatch(loginUser(form));
  };

  return (
    <main className="home">
      <img className="home__image" src={background} alt="background" />
      <form className="home__form " onSubmit={handleSubmit}>
        <h1 className="home__title">Iniciar Sesión</h1>
        <label>
          Usuario:
          <input name="user" type="text" placeholder="Usuario" required />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </label>
        <button className="home__submit" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Home;
