import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const ProfileSport = React.memo(({ match }) => {
  const { sports } = useSelector(state => state.ACCOUNT_REDUCER);
  const sportInfo = sports.find(sport => sport.id === match.params.id);

  return (
    <main className="profile">
      <div className="profile__image">
        <h2 className="profile__title">Deporte</h2>
        <img
          src="https://image.flaticon.com/sprites/new_packs/110803-sport-icons.png"
          alt="avatar"
        />
      </div>
      <div className="profile__info">
        <p className="profile__text">
          <span>Nombre: </span> {sportInfo.name}
        </p>
        <p className="profile__text">
          <span>Capacidad: </span>
          {sportInfo.capacity}
        </p>
      </div>
    </main>
  );
});

export default withRouter(ProfileSport);
