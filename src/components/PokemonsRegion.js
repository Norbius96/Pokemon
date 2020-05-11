import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pokemonsRegion.css'

function PokemonsRegion() {

    useEffect(() => {
        fetchRegions();
    }, []);

    const [regions, setRegions] = useState([]);

    const fetchRegions = async () => {
        const fetchRegions = await fetch(`https://pokeapi.co/api/v2/pokedex/`);
        const data = await fetchRegions.json();
        setRegions(data.results);
    };


    return (
        <div>
            <ul>
                <li>Choose Region
                    <ul className="dropdown">
                        {regions.map(region => (
                            <li key={region.name}><Link to={"/" + region.name}> {region.name} </Link></li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default PokemonsRegion;
