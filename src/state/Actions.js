import axios from "axios";
import {
  LOGIN_API,
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_API,
  SPORTS_SUCCESS,
  TRAINERS_SUCCESS,
  TRAINERS_API,
  STUDENTS_SUCCESS,
  STUDENTS_API,
  CREATE_TRAINER_SUCCESS,
  CREATE_SPORT_SUCCESS,
  CREATE_STUDENT_SUCCESS,
  SPORTS_API_CREATE,
  TRAINERS_API_CREATE,
  STUDENTS_API_CREATE
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
  payload
});

export const sportsLoadSuccess = payload => ({
  type: SPORTS_SUCCESS,
  payload
});

export const createTrainerSuccess = payload => ({
  type: CREATE_TRAINER_SUCCESS,
  payload
});

export const createSportSuccess = payload => ({
  type: CREATE_SPORT_SUCCESS,
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

export const sportsRequest = token => {
  return async dispatch => {
    try {
      const { data } = await axios.get(SPORTS_API, {
        headers: { Authorization: `Basic ${token}` }
      });
      dispatch(sportsLoadSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const studentsRequest = token => {
  return async dispatch => {
    try {
      const { data } = await axios.get(STUDENTS_API, {
        headers: { Authorization: `Basic ${token}` }
      });
      dispatch(studentsLoadSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const trainersRequest = token => {
  return async dispatch => {
    try {
      const { data } = await axios.get(TRAINERS_API, {
        headers: { Authorization: `Basic ${token}` }
      });
      dispatch(trainersLoadSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createTrainer = (payload, token) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(
        TRAINERS_API_CREATE,
        { data: payload },
        {
          headers: { Authorization: `Basic ${token}` }
        }
      );

      dispatch(createTrainerSuccess(data));

      trainersRequest(token);
    } catch (err) {
      console.log(err);
    }
  };
};

export const createSport = (payload, token) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(
        SPORTS_API_CREATE,
        { data: payload },
        {
          headers: { Authorization: `Basic ${token}` }
        }
      );

      dispatch(createSportSuccess(data));

      sportsRequest(token);
    } catch (err) {
      console.log(err);
    }
  };
};

export const createStudent = (payload, token) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(
        STUDENTS_API_CREATE,
        { data: payload },
        {
          headers: { Authorization: `Basic ${token}` }
        }
      );

      dispatch(createStudentSuccess(data));

      studentsRequest(token);
    } catch (err) {
      console.log(err);
    }
  };
};
