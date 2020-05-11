import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

const Container = styled.main`
width:100%;
height: 80vh;
padding: 5%;
display: flex;
flex-direction: column;
align-items: center;
`;



function Search() {

    useEffect(() => {
        fetchPokemons();
    }, []);

    const [pokemons, setPokemons] = useState([]);


    const fetchPokemons = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokedex/1/');
        const pokemons = await data.json();
        await setPokemons(pokemons.pokemon_entries);

    }
    const filterPoks = (inputValue) => {
        return pokemons
            .map((pokemon, idx) => ({ label: pokemon.pokemon_species.name, value: idx }))
            .filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
    };

    const promiseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(filterPoks(inputValue).map(pokemon => (
                    {
                        label: <Link className="poke-links" to={"/national/" + pokemon.label}>{pokemon.label}</Link>,
                        value: pokemon
                    }
                )));
            }, 1000);
        });


    return (
        <Container>
            <AsyncSelect className="select-search" cacheOptions defaultOptions loadOptions={promiseOptions} />
        </Container>
    );
}

export default Search;
