import React from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import styles from '@/styles/Home.module.css';
import Hero from './components/Hero.js';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Grid className={styles.content} >
        <Grid.Row columns='1'>
          <Grid.Column textAlign='center'>
            <h1 className={styles.bigRedFont} >KNOW YOUR POKEMON</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns= '1'>
        <Grid.Column className={styles.hero}>
            <Card fluid>
              <Hero/>
              <Card.Content textAlign='center'>
                <Card.Header textAlign='center'>All Pokemon stats and images at the tip of your fingers!</Card.Header>
                <Card.Description className={styles.description}>
                  <details> 
                    <p>
                    Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Lorem dolor sed viverra ipsum nunc. Vestibulum lorem sed risus ultricies. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aliquet lectus proin nibh nisl condimentum id. Ultricies integer quis auctor elit sed. Eu ultrices vitae auctor eu augue ut lectus arcu. Diam vulputate ut pharetra sit. Ipsum suspendisse ultrices gravida dictum.
                    </p>
                  </details>

                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className={styles.browse}>
          <Grid.Column className={styles.browseTwo}>
            <p>Browse our list:</p>
            {/* </Input> */}
            <Button as={Link} href={`list`} color='orange'>HERE</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}