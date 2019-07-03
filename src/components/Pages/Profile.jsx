import React from "react";
import { useSelector } from "react-redux";
import Header from "../commons/Header";

const Profile = React.memo(() => {
  const { name, lastName, phoneNumber, email } = useSelector(
    state => state.ACCOUNT_REDUCER
  );

  return (
    <React.Fragment>
      <Header />
      <main className="profile">
        <div className="profile__image">
          <h2 className="profile__title">Mi perfil</h2>
          <img
            src="http://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png"
            alt="avatar"
          />
        </div>
        <div className="profile__info">
          <p className="profile__text">
            <span>Nombre: </span> {name}
          </p>
          <p className="profile__text">
            <span>Apellido: </span>
            {lastName}
          </p>
          <p className="profile__text">
            <span>Telefono: </span> {phoneNumber}
          </p>
          <p className="profile__text">
            <span>Correo:</span> {email}
          </p>
        </div>
      </main>
    </React.Fragment>
  );
});

export default Profile;
