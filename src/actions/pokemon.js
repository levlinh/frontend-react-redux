import axios from "axios";
import { getToken } from "./auth";
import { DELETE_POKEMON, SET_POKEMONS } from ".";

export const getAllPokemon = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/api/v1/pokemons", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      })
      .then((response) => {
        return dispatch({ type: SET_POKEMONS, payload: response.data });
      });
  };
};

export const deletePokemon = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3001/api/v1/pokemons/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      })
      .then(() => {
        return dispatch({ type: DELETE_POKEMON, payload: id });
      });
  };
};
