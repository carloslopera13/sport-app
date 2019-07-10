import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import serialize from "form-serialize";
import { useSelector, useDispatch } from "react-redux";

import {
  trainersRequest,
  createTrainer,
  deleteTrainer
} from "../../state/Actions";
import Header from "../commons/Header";

const Trainers = () => {
  const dispatch = useDispatch();
  const { trainers, token } = useSelector(state => state.ACCOUNT_REDUCER);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = serialize(evt.target, { hash: true });
    dispatch(createTrainer(form, token));
  };

  const handleDeleteTrainer = id => () => {
    if (window.confirm("Esta seguro pa?")) {
      dispatch(deleteTrainer(id));
    }
  };

  useEffect(() => {
    dispatch(trainersRequest(token));
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Header />
      <main className="sports">
        <div className="sports__form">
          <form className="home__form " onSubmit={handleSubmit}>
            <h1 className="home__title">Crear entrenador</h1>
            <label>
              Nombre:
              <input name="name" type="text" placeholder="Nombre" required />
            </label>
            <label>
              Apellido:
              <input
                name="lastName"
                type="text"
                placeholder="Apellido"
                required
              />
            </label>
            <label>
              Email:
              <input name="email" type="email" placeholder="Email" required />
            </label>
            <label>
              Telefono:
              <input
                name="phoneNumber"
                type="tel"
                placeholder="Telefono"
                required
              />
            </label>

            <button className="home__submit" type="submit">
              Crear
            </button>
          </form>
        </div>
        <ul>
          <h2 className="sports__title">Entrenadores</h2>
          {trainers &&
            trainers.map(trainer => (
              <li key={trainer.id} className="sports-list__item">
                <div className="sports-list__title">
                  <Link to={`/trainer/${trainer.id}`}>
                    {trainer.id} - {trainer.name}
                  </Link>
                  <div>
                    <span
                      onClick={() => console.log(trainer.id)}
                      role="img"
                      aria-label="delete"
                    >
                      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                      <Link to={`/update-trainer/${trainer.id}`}>✏️</Link>
                    </span>

                    <span
                      onClick={handleDeleteTrainer(trainer.id)}
                      role="img"
                      aria-label="delete"
                    >
                      ❌
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default Trainers;
