import axios from "axios";
import { AUTHENTICATED, NOT_AUTHENTICATED } from ".";

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const thirtyMinutes = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < thirtyMinutes) {
    return localStorage.getItem("token");
  }
  return "";
};

export const signUpUser = (credentials) => {
  return (dispatch) => {
    return axios
      .post(
        "http://localhost:3001/signup",
        { user: credentials },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setToken(response.headers.authorization);
        console.log(response.data);
        return dispatch({ type: AUTHENTICATED, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({ type: NOT_AUTHENTICATED });
      });
  };
};

export const loginUser = (credentials) => {
  return (dispatch) => {
    return axios
      .post(
        "http://localhost:3001/login",
        { user: credentials },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setToken(response.headers.authorization);
        console.log(response.data);
        return dispatch({ type: AUTHENTICATED, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({ type: NOT_AUTHENTICATED });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return axios
      .delete("http://localhost:3001/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      })
      .then((response) => {
        console.log(response);
        return dispatch({ type: NOT_AUTHENTICATED });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
