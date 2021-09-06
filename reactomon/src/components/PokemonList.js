import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PokemonList extends Component {

    render() {

        const results = this.props.items.results === undefined ? [] : this.props.items.results;

        const listItems = results.map((item) => 
            <div key={item.url} className="pokemon">
                <Link to={"/pokemon/" + getIDfromURL(item.url)}>{item.name}</Link>
            </div>
        );

        return (
            <div className="pokemon-list">{listItems}</div>
        )
    }
}

/**
 * @param {String} url The url itself
 */
function getIDfromURL(url)
{
    const parts = url.split('/');
    const id = parts[parts.length - 2];
    return id;
}

export default PokemonList;