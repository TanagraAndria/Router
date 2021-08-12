import React from 'react'
import styles from './Contato.module.css'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import contato from '../../img/contato.jpg';

export const Contato = () => {
    return (
        <div >
            <Header/>
            <section className={`${styles.contato} animeLeft`}>
                <img src={contato} alt="Máquina de escrever" />
                <div>
                    <h1>Entre em contato.</h1>
                    <ul className={styles.dados}>
                    <li>tanagra.andria@gmail.com</li>
                    <li>99999-9999</li>
                    </ul>
                </div>
            </section>
          <Footer/>  
        </div>
    )
}
