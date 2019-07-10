import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import serialize from "form-serialize";

import { useDispatch, useSelector } from "react-redux";
import { sportsRequest, createSport, deleteSport } from "../../state/Actions";
import Header from "../commons/Header";

const Sports = () => {
  const dispatch = useDispatch();
  const { sports, token } = useSelector(state => state.ACCOUNT_REDUCER);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = serialize(evt.target, { hash: true });
    dispatch(createSport(form, token));
  };

  const handleDeleteSport = id => () => {
    if (window.confirm("Esta seguro pa?")) {
      dispatch(deleteSport(id));
    }
  };

  useEffect(() => {
    dispatch(sportsRequest(token));
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Header></Header>
      <main className="sports">
        <div className="sports__form">
          <form className="home__form " onSubmit={handleSubmit}>
            <h1 className="home__title">Crear deporte</h1>
            <label>
              Nombre:
              <input name="name" type="text" placeholder="Nombre" required />
            </label>
            <label>
              Capacidad:
              <input
                name="capacity"
                type="text"
                placeholder="Capacidad"
                required
              />
            </label>

            <button className="home__submit" type="submit">
              Crear
            </button>
          </form>
        </div>
        <ul>
          <h2 className="sports__title">Deportes</h2>
          {sports &&
            sports.map(sport => (
              <li key={sport.id} className="sports-list__item">
                <div className="sports-list__title">
                  <Link to={`/sport/${sport.id}`}>
                    {sport.id} - {sport.name}
                  </Link>
                  <div>
                    <span
                      onClick={() => console.log(sport.id)}
                      role="img"
                      aria-label="delete"
                    >
                      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                      <Link to={`/update-sport/${sport.id}`}>✏️</Link>
                    </span>

                    <span
                      onClick={handleDeleteSport(sport.id)}
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

export default Sports;
