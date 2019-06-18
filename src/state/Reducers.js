import { combineReducers } from "redux";
import {
  ACCOUNT_LOGIN_SUCCESS,
  SPORTS_SUCCESS,
  TRAINERS_SUCCESS
} from "./Constants";
const initialAccountState = {
  token: "",
  userInfo: {},
  sports: [],
  trainers: [],
  isAuthenticated: false
};
const ACCOUNT_REDUCER = (state = initialAccountState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        userInfo: payload.userInfo,
        isAuthenticated: true
      };
    case SPORTS_SUCCESS: {
      return {
        ...state,
        sports: payload
      };
    }
    case TRAINERS_SUCCESS:
      return { ...state, trainers: payload };
    default:
      return state;
  }
};

export default combineReducers({ ACCOUNT_REDUCER });
