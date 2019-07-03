import { combineReducers } from "redux";
import {
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_SUCCESS,
  TRAINERS_SUCCESS,
  STUDENTS_SUCCESS,
  SIGN_OUT
} from "./Constants";

const initialAccountState = {
  token: null,
  email: "",
  lastName: "",
  name: "",
  phoneNumber: "",
  isAuthenticated: false,
  rol: null,

  sports: [],
  trainers: [],
  students: []
};

const ACCOUNT_REDUCER = (state = initialAccountState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_LOGIN_SUCCESS:
      return {
        ...state,
        email: payload.email,
        isAuthenticated: true,
        lastName: payload.lastName,
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        rol: payload.rol,
        token: payload.token
      };
    case SPORTS_SUCCESS:
      return { ...state, sports: payload };
    case TRAINERS_SUCCESS:
      return { ...state, trainers: payload };
    case STUDENTS_SUCCESS:
      return { ...state, students: payload };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default combineReducers({ ACCOUNT_REDUCER });
