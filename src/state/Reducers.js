import { combineReducers } from "redux";
import {
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_SUCCESS,
  TRAINERS_SUCCESS,
  STUDENTS_SUCCESS,
  CREATE_TRAINER_SUCCESS,
  CREATE_SPORT_SUCCESS,
  CREATE_STUDENT_SUCCESS
} from "./Constants";

const initialAccountState = {
  token: "",
  userInfo: {},
  sports: [],
  trainers: [],
  students: [],
  isAuthenticated: false,
  rol: null
};

const ACCOUNT_REDUCER = (state = initialAccountState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        userInfo: payload.userInfo,
        isAuthenticated: true,
        rol: payload.rol
      };
    case SPORTS_SUCCESS: {
      return {
        ...state,
        sports: payload
      };
    }
    case TRAINERS_SUCCESS:
      return { ...state, trainers: payload };
      case STUDENTS_SUCCESS:
        return { ...state, students: payload };
    case CREATE_TRAINER_SUCCESS:
      return { ...state, trainers: payload };
    case CREATE_SPORT_SUCCESS:
      return { ...state, sports: payload };
    case CREATE_STUDENT_SUCCESS:
      return { ...state, students: payload };
    default:
      return state;
  }
};

export default combineReducers({ ACCOUNT_REDUCER });
