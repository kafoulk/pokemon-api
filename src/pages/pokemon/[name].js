import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.css';
import { useRouter } from 'next/router';
import { Loader, Image, Grid, Card, Header } from 'semantic-ui-react';
import styles from '@/styles/Name.module.css';

export default function PokemonName() {
    const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true, stats:[] });
    const router = useRouter();
    


    useEffect(function() {
        if (pokemonInfo.name !== router.query.name && router.query.name) {
            console.log('Load in pokemon info', router.query.name); 
            fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
            .then((r) => r.json())
            .then(function (r) {
                setPokemonInfo(r);
            })
            .catch((e) =>setPokemonInfo({ loading: false, name:router.query.name, stats:[]}));
        }
    }
    );

    // console.log(pokemonInfo);

    // console.log(router.query);

    const pokemonStats =
    pokemonInfo.stats.length === 0
      ? []
      : pokemonInfo.stats.map((stat) => {
          return (
            <Grid.Column key={stat.stat.name}>
              <Header as='h3'>{stat.stat.name}</Header>
              <p>{stat.base_stat}</p>
            </Grid.Column>
          );
        });

    return (
        <>
            <div className={styles.pokemon} fluid>
                <h1 className={styles.pokemonHeader}>Pokemon Name: {router.query.name}</h1>
                <Loader active={pokemonInfo.loading  || pokemonInfo.name !== router.query.name}/>
                {
                // if this statement
                    pokemonInfo.id ? (
                    // then do this; true
                    <>
                        <Card.Description className={styles.cardDescription}>
                            <Image className={styles.image} src={pokemonInfo.sprites.front_default}/>
                            <Grid columns='6' className={styles.cardStats} >{pokemonStats}
                            </Grid>
                        </Card.Description>
                    </>
                    // else do this; false
                    ) : (
                    <>
                        {isNaN(pokemonInfo.id) 
                        ? <h2>Searching for Pokemon</h2> 
                        : <h2>Pokemon Not Found</h2>
                        } 
                    </>
                    )
                
                }
            </div>
        </>
    );
}