import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pokemonDetail.css';
import loader from '../assets/loader.svg';

function PokemonDetail({ match }) {
    useEffect(() => {
        fetchPokemon();
    }, []);


    const [pokemon, setPokemon] = useState({});
    const [pokemonImage, setPokemonImage] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchPokemon = async () => {
        try {
            const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${match.params.name}/`);
            const data = await fetchPokemon.json();
            await setPokemonImage(`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`);
            setPokemon(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    if (loading) {
        return (
            <div id="pokemon">
                <h1><img src={loader} className="loader" /></h1>
                {/* <h2>
                    <Link to={"/" + match.params.regionName}>Powrót</Link>
                </h2> */}
            </div>
        );
    }

    return (
        <div id="pokemon">
            <img src={pokemonImage} />
            <h1>{pokemon.name} #{pokemon.id}</h1>
            <h2>
                <Link to={"/" + match.params.regionName}>Powrót</Link>
            </h2>
        </div>
    );
}

export default PokemonDetail;
