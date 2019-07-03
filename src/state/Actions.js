import axios from "axios";
import {
  API_URL,
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_SUCCESS,
  CREATE_STUDENT_SUCCESS,
  TRAINERS_SUCCESS,
  STUDENTS_SUCCESS,
  SIGN_OUT
} from "./Constants";

/* Account Actions */
export const loginUser = payload => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_URL}users`);

      dispatch(loginUserSuccess(data));
    } catch (err) {
      // alert("Datos incorrectos");
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
