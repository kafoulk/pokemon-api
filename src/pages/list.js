import React, { useEffect, useState } from 'react';
import styles from '@/styles/List.module.css';
import { Grid, Card, Image } from 'semantic-ui-react';
import ListItem from './components/ListItem.js';

export default function List() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getRandomOffset = () => Math.floor(Math.random() * 1000); // Adjust the range based on your needs

    const fetchRandomPokemon = async () => {
        try {
          const offset = getRandomOffset();
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`);
          if (!response.ok) {
            throw new Error('Error fetching Pokémon list');
          }
          const data = await response.json();
      
          const pokemonListData = data.results.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            stats: pokemon.stats,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').reverse()[1]}.png`,
          }));
      
          setPokemonList(pokemonListData);
        } catch (error) {
          console.error('Error fetching Pokémon list:', error);
        }
      };

    fetchRandomPokemon();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <>
      <Grid className={styles.listContainer}>
        <Grid.Row columns="4">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <img className={styles.image} src={pokemon.image} alt={pokemon.name} />
            </li>
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
}
