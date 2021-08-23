import React, { useContext } from 'react'
import { HeaderContext } from '../../context/HeaderContext'

import styles from './Header.module.css'

export default function Header(){
    const {search, onChange, setLivro} = useContext(HeaderContext)
    const prevent = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.logo}>Bookfinder</h1>
            <form className={styles.formSearch} onSubmit={prevent}>
                    <input type="text" placeholder="Pesquise o Livro" value={search} className={styles.searchBook} onChange={onChange}/>
                    <button 
                        className={styles.searchSubmit} 
                        onClick={() => setLivro(search)} 
                    >Pesquisar</button>
            </form>
        </div>
    )
}