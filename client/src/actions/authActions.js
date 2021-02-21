import { SET_ERROR, SET_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response.data,
      })
    );
};

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      //save the token to localstorage
      const { token } = res.data;
      console.log("1");
      localStorage.setItem("jwtToken", token);
      console.log("2");
      //set token to auth header
      setAuthToken(token);
      console.log("3");
      //decode token
      const decoded = jwt_decode(token);
      console.log("4");
      //Write user info to redux
      dispatch({
        type: SET_USER,
        payload: decoded,
      });
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response.data,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  //Remove token from ls
  localStorage.removeItem("jwtToken");
  //Remove token from axios header
  setAuthToken(false);
  //Reset user in the redux store
  dispatch({
    type: SET_USER,
    payload: {},
  });
};
