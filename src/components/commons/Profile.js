import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const profile = useSelector(state => state.ACCOUNT_REDUCER.userInfo);
  return (
    <main className="profile">
      <h3 className="profile__name">Nombre: {profile.name}</h3>
      <p className="profile__phone">Telefono: {profile.phone}</p>
      <p className="profile__email">Correo: {profile.email}</p>
    </main>
  );
};

export default Profile;
