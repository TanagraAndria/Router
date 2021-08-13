import React from 'react'
import styles from './Footer.module.css'
export const Footer = () => {
    return (
        <div className={styles.footer}>
           <a href="https://www.linkedin.com/in/tanagraandria" target="blank" className={styles.imgFooter}><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="https://www.linkedin.com/in/tanagraandria" height="20" width="30" /></a>
           <a href="https://github.com/TanagraAndria" target="blank" className={styles.imgFooter}><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="https://github.com/TanagraAndria" height="20" width="30" /></a>
        </div>
    )
}
