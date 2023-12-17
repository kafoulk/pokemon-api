import React from 'react';
import {Card} from 'semantic-ui-react';
import styles from '@/styles/contact/Unsuccessful.module.css';

export default function ContactSuccess() {
    return (
        <>
            <Card fluid className={styles.cardContainer} >
                <h1 className={styles.header}>Contact Message Sent Successsfully.</h1>
            </Card>
        </>
    );
}