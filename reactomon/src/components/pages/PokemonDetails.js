import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class PokemonDetails extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/pokemon/:id" children={<Pokemon />} />
                </Switch>
            </Router>
        )
    }
}

function Pokemon() {
    let {id} = useParams();

    return (
        <label>Pokemon {id}</label>
    )
}

export default PokemonDetails;