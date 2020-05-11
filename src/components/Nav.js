import React from 'react';
import PokemonsRegion from './PokemonsRegion';
import '../App.css';

function Nav() {
    return (
        <nav>
            <h1><a href="/">Pokemon</a></h1>
            <PokemonsRegion />
        </nav>
    );
}

export default Nav;
