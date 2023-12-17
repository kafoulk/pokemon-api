import React, { useEffect, useState } from 'react';
import styles from '@/styles/ListItem.module.css';
import { Loader, Card, Grid, Image } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function ListItem() {
  const [pokemonInfo, setPokemonInfo] = useState({ loading: true });
  const router = useRouter();

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${router.query.id}`);
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        const data = await response.json();
        setPokemonInfo(data);
      } catch (error) {
        console.error('Error fetching Pokémon Species:', error);
        setPokemonInfo({ loading: false, name: router.query.name });
      }
    }

    fetchListData();
  }, [router.query.id, router.query.name]);

  return (
    <>
      <Card className={styles.pokemon}>
        <Grid.Row column="3">
          <Grid.Column></Grid.Column>
        </Grid.Row>
        {pokemonInfo.id ? (
          <>
            <Card.Description className={styles.cardDescription}>
              <Image className={styles.image} src={pokemonSpecies} />
              <Grid columns="6" className={styles.cardStats}>
                {pokemonStats}
              </Grid>
            </Card.Description>
          </>
        ) : (
          <>
            {isNaN(pokemonInfo.id) ? <h2>Searching for Pokemon</h2> : <h2>Pokemon Not Found</h2>}
          </>
        )}
      </Card>
    </>
  );
}
