import { DELETE_POKEMON, SET_POKEMONS } from "../actions";

const initialState = {
  pokemons: [],
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        pokemons: action.payload.data,
      };
    case DELETE_POKEMON:
      const pokemons = state.pokemons.filter(
        ({ id }) => id !== action.payload.toString()
      );
      state.pokemons = pokemons;
      return state;
    default:
      return state;
  }
}
