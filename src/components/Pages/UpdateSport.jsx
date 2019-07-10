import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import serialize from "form-serialize";
import { useSelector, useDispatch } from "react-redux";

import { trainersRequest, updateSport } from "../../state/Actions";
import Header from "../commons/Header";
import Spinner from "../commons/Spinner";

const UpdateSport = ({ match }) => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const { sports, token } = useSelector(state => state.ACCOUNT_REDUCER);
  const sportInfo = sports.find(sport => sport.id === +match.params.id);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = serialize(evt.target, { hash: true });
    dispatch(updateSport(form, sportInfo.id));
    setLoader(true);
  };

  useEffect(() => {
    dispatch(trainersRequest(token));
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Header />
      <div className="sports">
        <div className="sports__form">
          <form className="home__form " onSubmit={handleSubmit}>
            <h1 className="home__title">Crear deporte</h1>
            <label>
              Nombre:
              <input
                name="name"
                type="text"
                placeholder="Nombre"
                required
                defaultValue={sportInfo.name}
              />
            </label>
            <label>
              Capacidad:
              <input
                name="capacity"
                type="text"
                placeholder="Capacidad"
                required
                defaultValue={sportInfo.capacity}
              />
            </label>

            <span className="home__back" onClick={() => window.history.back()}>
              Cancelar
            </span>
            <button className="home__submit" type="submit">
              Confirmar
            </button>
            {loader && <Spinner />}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UpdateSport);
