import React from "react";
import CardPokemon from "./CardPokemon";
import { getAllPokemon } from "../actions/pokemon";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatchGetAllPokemon();
  }

  renderMessagesNoPokemon() {
    return <h2>No pokemon</h2>;
  }

  render() {
    const { pokemons } = this.props.pokemon;
    return (
      <div className="container">
        <div className="row mt-5">
          <h2 className="list-product-title">New pokemon</h2>
          <div className="list-product-subtitle">
            <p>List pokemon description</p>
          </div>
          <div className="product-group">
            <div className="row">
              {pokemons.length > 0
                ? pokemons.map((e) => {
                    return <CardPokemon key={e.id.toString()} pokemon={e} />;
                  })
                : this.renderMessagesNoPokemon()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }) => {
  return { pokemon };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetAllPokemon: () => dispatch(getAllPokemon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
