import {useContext} from 'react'
import styles from './styles.module.css'
import {HeaderContext} from '../../context/HeaderContext'
export default function Search(props){
    const {search, livro} = useContext(HeaderContext)
 
    const booksList = (livro!='') ? props.books.books.filter(book => book.title.includes(livro))
        .map(filteredBook => (
            <li keys={filteredBook.title}>
            {filteredBook.title}
            </li>
        )) : ''
    
    return (
        <div className={styles.container}>
            <p>Livros</p>
            {(booksList.length == '' )?(<p>Sem livros</p>):
            <ul className={styles.livros} >{booksList}</ul>
            }

            <p>Context = {search}</p>  
        </div>
    )
}

