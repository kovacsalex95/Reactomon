import React, { Component } from 'react';

class PokemonList extends Component {

    render() {

        /*const listItems = this.props.items.map((item) => 
            <div className="pokemon">
                <a class="name" href={"/pokemon/" + item.id}>{item.name}</a>
                <img src={item.image} alt={item.name}></img>
            </div>
        );

        return (
            <div className="pokemon-list">{listItems}</div>
        )*/
        return(
            <pre>{this.props.items}</pre>
        )
    }
}

export default PokemonList;