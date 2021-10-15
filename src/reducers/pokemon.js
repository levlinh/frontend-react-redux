import { DELETE_POKEMON, SET_POKEMONS } from "../actions";

const initialState = {
  pokemons: [],
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        pokemons: action.payload.data.data,
      };
    case DELETE_POKEMON:
      return state.pokemons.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
}
