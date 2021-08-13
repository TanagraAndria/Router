import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../img/logo.png';

export const Header = () => {
    return (
        <div className={styles.conteinerHeader}>
             <img src={logo} alt="logo" className={styles.imgHeader} />
        <nav className={styles.header}>
            <ul>
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link} to="/">Produtos</NavLink>
                </li>
                <li>
                     <NavLink activeClassName={styles.active} className={styles.link} to="/contato">Contato</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
}
