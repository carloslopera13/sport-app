import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import serialize from "form-serialize";
import { useSelector, useDispatch } from "react-redux";

import { trainersRequest, updateTrainer } from "../../state/Actions";
import Header from "../commons/Header";
import Spinner from "../commons/Spinner";

const UpdateTrainer = ({ match }) => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const { trainers, token } = useSelector(state => state.ACCOUNT_REDUCER);
  const userInfo = trainers.find(trainer => trainer.id === +match.params.id);
  console.log("TCL: UpdateTrainer -> userInfo", userInfo);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = serialize(evt.target, { hash: true });
    dispatch(updateTrainer(form, userInfo.id));
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
            <h1 className="home__title">Actualizar entrenador</h1>
            <label>
              Nombre:
              <input
                name="name"
                type="text"
                placeholder="Nombre"
                required
                defaultValue={userInfo.name}
              />
            </label>
            <label>
              Apellido:
              <input
                name="lastName"
                type="text"
                placeholder="Apellido"
                defaultValue={userInfo.lastName}
                required
              />
            </label>
            <label>
              Email:
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                defaultValue={userInfo.email}
              />
            </label>
            <label>
              Telefono:
              <input
                name="phoneNumber"
                type="tel"
                placeholder="Telefono"
                required
                defaultValue={userInfo.phoneNumber}
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

export default withRouter(UpdateTrainer);
