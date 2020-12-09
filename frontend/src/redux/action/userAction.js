import { CLEAR_REDUCER, LOGIN, REGISTER } from "../types";
import axios from "axios";

const url = "http://localhost:5000/api/user";

export const userLogin = user => dispatch => {
  return axios
    .post(url + "/login", user)
    .then((res) => {
      console.log('login action', res)
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      console.log(err)
    });
};

export const userRegister = user_details => dispatch => {
  return axios
    .post(url + '/new', user_details)
    .then((res) => {
      dispatch({
        type: REGISTER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const clearReducer = () => dispatch => {
  dispatch({
    type: CLEAR_REDUCER
  })
}
