import React, { Component } from 'react';
import PokemonList from '../PokemonList';

const Pokedex = require('pokedex-promise-v2');
const p = new Pokedex();

class Pokemons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonList: []
        };
    }

    componentDidMount() {
        const fetchPokemonList = async() => {
            const { pokemonList } = await p.resource(['/api/v2/pokemon']);
            this.setState({
                pokemonList
            });
        };
        fetchPokemonList();
    }

    render() {
        return (
            <PokemonList items={this.state.pokemonList} />
        )
    }
}

export default Pokemons;