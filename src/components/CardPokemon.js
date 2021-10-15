import React from "react";
import "../css/CardPokemon.css";

class CardPokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="col-md-3 col-sm-6 col-12">
        <div className="card card-product mb-3">
          <img
            className="card-img-top"
            src={pokemon.attributes.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{pokemon.attributes.name}</h5>
            <p className="card-text">{pokemon.attributes.description}</p>
            <h3>{pokemon.attributes.height} cm</h3>
            <h3>{pokemon.attributes.weight} kg</h3>
            <a href="/#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPokemon;
