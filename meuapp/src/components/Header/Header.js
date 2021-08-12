import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
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
    )
}
