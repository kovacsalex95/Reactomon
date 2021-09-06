import React, { Component } from 'react';
import PokemonList from '../PokemonList';

const Pokedex = require('pokedex-promise-v2');

class Pokemons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonList: {}
        };
        this.updatePokemonList = this.updatePokemonList.bind(this);
    }

    updatePokemonList(result) {
        this.setState({
            pokemonList: result
        });
    }

    componentDidMount() {
        const interval = {
            limit: 10,
            offset: 34
        };
        const p = new Pokedex();

        p.getPokemonsList(interval).then(this.updatePokemonList);
    }

    render() {
        return (
            <PokemonList items={this.state.pokemonList} />
        )
    }
}

export default Pokemons;