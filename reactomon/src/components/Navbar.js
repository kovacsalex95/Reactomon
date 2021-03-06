import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <Link to="/pokemons">Pokemons</Link>
                <Link to="/types">Types</Link>
            </div>
        )
    }
}

export default Navbar;