import axios from "axios";
import {
  API_URL,
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_SUCCESS,
  CREATE_STUDENT_SUCCESS,
  TRAINERS_SUCCESS,
  STUDENTS_SUCCESS,
  SIGN_OUT,
  LOGIN_API
} from "./Constants";

/* Account Actions */
export const loginUser = payload => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_URL}users`, {
        // headers: { Authorization: `Basic ${payload.user}:${payload.password}` }
      });
      console.log(data);
      dispatch(loginUserSuccess(data));
    } catch (err) {
      // alert("Datos incorrectos");
      console.log(err);
    }
  };
};

export const createTrainer = payload => {
  console.log("TCL: payload", payload);
  return async dispatch => {
    try {
      await axios.post(`${API_URL}trainers`, { ...payload });

      dispatch(trainersRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTrainer = payload => {
  console.log("TCL: payload", payload);
  return async dispatch => {
    try {
      await axios.delete(`${API_URL}trainers/${payload}`);

      dispatch(trainersRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateTrainer = (payload, id) => {
  return async dispatch => {
    try {
      await axios.put(`${API_URL}trainers/${id}`, { ...payload });

      setTimeout(() => {
        window.history.back();
      }, 2000);
      dispatch(trainersRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteSport = payload => {
  console.log("TCL: payload", payload);
  return async dispatch => {
    try {
      await axios.delete(`${API_URL}sports/${payload}`);

      dispatch(sportsRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateSport = (payload, id) => {
  return async dispatch => {
    try {
      await axios.put(`${API_URL}sports/${id}`, { ...payload });

      setTimeout(() => {
        window.history.back();
      }, 2000);
      dispatch(sportsRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

export const createSport = (payload, token) => {
  return async dispatch => {
    try {
      await axios.post(`${API_URL}sports`, { ...payload });

      dispatch(sportsRequest());
    } catch (err) {
      console.log(err);
    }
  };
};

export const sportsRequest = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_URL}sports`);
      dispatch(sportsLoadSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const trainersRequest = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_URL}trainers`);

      dispatch(trainersLoadSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUserSuccess = payload => ({
  type: ACCOUNT_LOGIN_SUCCESS,
  payload
});

export const sportsLoadSuccess = payload => ({
  type: SPORTS_SUCCESS,
  payload
});

export const createStudentSuccess = payload => ({
  type: CREATE_STUDENT_SUCCESS,
  payload
});

export const trainersLoadSuccess = payload => ({
  type: TRAINERS_SUCCESS,
  payload
});

export const studentsLoadSuccess = payload => ({
  type: STUDENTS_SUCCESS,
  payload
});

export const signOut = () => ({
  type: SIGN_OUT
});
