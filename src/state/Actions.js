import axios from "axios";
import {
  LOGIN_API,
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_API,
  SPORTS_SUCCESS,
  TRAINERS_SUCCESS,
  TRAINERS_API,
  STUDENTS_SUCCESS,
  STUDENTS_API
} from "./Constants";

/* Account Actions */
export const loginUser = payload => {
  return async dispatch => {
    try {
      const { data } = await axios.get(LOGIN_API, payload);
      dispatch(loginUserSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUserSuccess = payload => ({
  type: ACCOUNT_LOGIN_SUCCESS,
  payload: payload
});

export const sportsLoadSuccess = payload => ({
  type: SPORTS_SUCCESS,
  payload: payload
});

export const trainersLoadSuccess = payload => ({
  type: TRAINERS_SUCCESS,
  payload: payload
});

export const studentsLoadSuccess = payload => ({
  type: STUDENTS_SUCCESS,
  payload: payload
});

export const sportsRequest = payload => {
  return async dispatch => {
    try {
      const { data } = await axios.get(SPORTS_API, payload);
      dispatch(sportsLoadSuccess(data.sports));
    } catch (err) {
      console.log(err);
    }
  };
};

export const trainersRequest = payload => {
  return async dispatch => {
    try {
      const { data } = await axios.get(TRAINERS_API, payload);
      dispatch(trainersLoadSuccess(data.trainers));
    } catch (err) {
      console.log(err);
    }
  };
};

export const soccersRequest = payload => {
  return async dispatch => {
    try {
      const { data } = await axios.get(STUDENTS_API, payload);
      dispatch(studentsLoadSuccess(data.students));
    } catch (err) {
      console.log(err);
    }
  };
};
