import React, { useContext } from 'react'
import { HeaderContext } from '../../context/HeaderContext'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header(){
    const {search, onChange, setLivro} = useContext(HeaderContext)
    const prevent = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.headerContainer}>
            <Link href='/'>
            <a className={styles.logo}><h1>BookFinder</h1></a>
            </Link>
            <form className={styles.formSearch} onSubmit={prevent}>
                    <input type="text" placeholder="Pesquise o Livro" value={search} className={styles.searchBook} onChange={onChange}/>
                    <button 
                        className={styles.searchSubmit} 
                        onClick={() => setLivro(search)}
                    >
                        Pesquisar
                    </button>
            </form>
        </div>
    )
}



