import React from 'react';
import styles from '@/styles/Hero.module.css';
import { Image } from 'semantic-ui-react';

export default function Hero(props) {
    return (
        <>
            <div className={styles.hero} style={{backgroundImage: `url(${props.heroimage})`}} ></div>
        </>
    );
}
