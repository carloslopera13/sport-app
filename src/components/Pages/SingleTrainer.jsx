import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../commons/Header";

const ProfileTrainer = React.memo(({ match }) => {
  const { trainers } = useSelector(state => state.ACCOUNT_REDUCER);
  const userInfo = trainers.find(trainer => trainer.id === +match.params.id);

  return (
    <React.Fragment>
      <Header />
      <main className="profile">
        <div className="profile__image">
          <h2 className="profile__title">perfil {userInfo.name}</h2>
          <img
            src="http://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png"
            alt="avatar"
          />
        </div>
        <div className="profile__info">
          <p className="profile__text">
            <span>Nombre: </span> {userInfo.name}
          </p>
          <p className="profile__text">
            <span>Apellido: </span>
            {userInfo.lastName}
          </p>
          <p className="profile__text">
            <span>Telefono: </span> {userInfo.phoneNumber}
          </p>
          <p className="profile__text">
            <span>Correo:</span> {userInfo.email}
          </p>
        </div>
      </main>
    </React.Fragment>
  );
});

export default withRouter(ProfileTrainer);
