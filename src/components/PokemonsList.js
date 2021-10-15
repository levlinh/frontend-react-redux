import React from "react";
import { connect } from "react-redux";
import { deletePokemon } from "../actions/pokemon";

class PokemonsList extends React.Component {
  handleClick(id) {
    this.props
      .dispatchDeletePokemon({ id })
      .then(this.props.history.push("/pokemons_list"));
  }
  render() {
    const { pokemons } = this.props.pokemon;
    return (
      <div className="container">
        <h1>There are list pokemons</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Height (cm)</th>
              <th scope="col">Weight (kg)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{pokemon.attributes.name}</td>
                  <td>{pokemon.attributes.height} cm</td>
                  <td>{pokemon.attributes.weight} kg</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.handleClick(pokemon.attributes.id)}
                    >
                      Delete
                    </button>{" "}
                    /{" "}
                    <button type="button" className="btn btn-warning">
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }) => {
  return { pokemon };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeletePokemon: (id) => dispatch(deletePokemon(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
