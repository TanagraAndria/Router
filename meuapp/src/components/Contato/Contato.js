import React from 'react'
import styles from './Contato.module.css';
import contato from '../../img/contato.png';

export const Contato = () => {
    return (
        <div className={styles.conteinerContato} >
            <section className={`${styles.contato} animeLeft`}>
                <article className={styles.item}>
                <img src={contato} alt="foto" className={styles.imgContato} />
                </article>
                <div className={styles.item}>
                    <h1>Entre em contato.</h1>
                    <ul className={styles.dados}>
                    <li>tanagra.andria@gmail.com</li>
                    <li>99999-9999</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
