import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        const navbarItems = this.props.items;

        const listItems = navbarItems.map((link) =>
            <a className="navbar-item" href={link.url}>{link.name}</a>
        );

        return (
            <div className="navbar">{listItems}</div>
        );
    }
}

export default Navbar;