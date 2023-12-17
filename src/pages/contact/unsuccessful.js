import React from 'react';
import {Card} from 'semantic-ui-react';
import styles from '@/styles/contact/Unsuccessful.module.css';


export default function ContactNotSuccess() {
    return (
        <>
            <Card fluid className={styles.cardContainer} >
                <h1 className={styles.header}>Contact Message NOT Sent Successsfully.</h1>
            </Card>
        </>
    );
}
