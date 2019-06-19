import React from "react";
import { useSelector } from "react-redux";

const Profile = React.memo(() => {
  const { userInfo } = useSelector(state => state.ACCOUNT_REDUCER);

  return (
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
  );
});

export default Profile;
