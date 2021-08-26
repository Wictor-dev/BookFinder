import React from 'react'
import styles from './Footer.module.scss'
export default function Footer(){
    let year = new Date().getFullYear()
    return (
        <div className={styles.footerContainer}>
            <p>Made by Wictor Gabriel &copy; {year}</p>
        </div>
    )
}