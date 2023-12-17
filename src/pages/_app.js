import React from 'react';
import 'semantic-ui-css/semantic.css';
import styles from '@/styles/globals.css';
import { Menu, Input, Button } from 'semantic-ui-react';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  const [pokemonSearch, setPokemonSearch] = React.useState('');

  function updateSearch(e, {value}) {
    setPokemonSearch(value);
  }

  function refreshPage(){
    window.location.reload();
  }

  return(
    <>
      <Menu className={styles.topMenu}>
        <Menu.Item as={Link} href='/' className={styles.menuItem} onClick='reload' >Home
        </Menu.Item>
        <Menu.Item as={Link} href='/about' className={styles.menuItem}>About
        </Menu.Item>
        <Menu.Item as={Link} href='/list' className={styles.menuItem}>Browse
        </Menu.Item>
        <Menu.Item as={Link} href='/contact' className={styles.menuItem}>Contact
        </Menu.Item>
        <Menu.Item className={styles.menuSearch}>
          <Input className={styles.menuSearch} name='pokemonSearch' onChange={updateSearch} value={pokemonSearch} type='text' placeholder='Type Pokemon name here'/>
          <Button as={Link} href={`/pokemon/${pokemonSearch}`}>Search</Button>
        </Menu.Item>
      </Menu>
      <Component {...pageProps} />

    </>
  );
}
