import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllPokemon } from "./actions/pokemon";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import PokemonsList from "./components/PokemonsList";
import Signup from "./components/Signup";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatchGetAllPokemon();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/pokemons_list" component={PokemonsList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetAllPokemon: () => dispatch(getAllPokemon()),
  };
};

export default connect(null, mapDispatchToProps)(App);
