import React, { useRef } from 'react';
import styles from '@/styles/Contact.module.css';
import { Grid, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function Contact() {
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault();
        
        const fullNameValue = fullNameRef.current.value;
        const emailValue = emailRef.current.value;

        if (fullNameValue !== '' && emailValue !== '') {
            router.push('/contact/successful');
        } else {
            router.push('/contact/unsuccessful');
        }
    }

    return (
        <>
            <Grid className={styles.contactForm}>
                <form className={styles.form} onSubmit={contactFormSubmit} >
                    <h1>Contact</h1>
                    <div className={styles.formField}>
                        <label>Full Name:</label>
                        <input
                            ref={fullNameRef}
                            name='fullName'
                            type='text'
                            placeholder='Kiersten Foulk'
                        />
                    </div>
                    <div className={styles.formField}>
                        <label>Email:</label>
                        <input
                            ref={emailRef}
                            name='email'
                            type='email'
                            placeholder='email@iu.edu'
                        />
                    </div>
                    <div>
                        <Button className={styles.submitButton} type='submit' value='Send Contact'>
                            Submit Info
                        </Button>
                    </div>
                </form>
            </Grid>
        </>
    );
}
