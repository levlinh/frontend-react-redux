import { combineReducers } from "redux";
import authReducer from "./auth";
import pokemonReducer from "./pokemon";

export default combineReducers({
  auth: authReducer,
  pokemon: pokemonReducer,
});
