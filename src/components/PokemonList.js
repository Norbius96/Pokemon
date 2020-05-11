import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pokemonList.css';

function PokemonList({ match }) {

    useEffect(() => {
        fetchPokemons();
    }, [match]);

    const [pokemons, setPokemons] = useState([]);


    const fetchPokemons = async () => {
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokedex/${match.params.regionName}/`);
            const pokemons = await data.json();
            setPokemons(pokemons.pokemon_entries);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <h1>{match.params.regionName}</h1>
            <div id="list">
                {pokemons.map((pokemon, index) => (
                    <h2 key={index}>
                        <Link to={match.params.regionName + '/' + pokemon.pokemon_species.name}>
                            {pokemon.pokemon_species.name}
                        </Link>
                    </h2>
                ))
                }
            </div>
        </div >
    );
}

export default PokemonList;
