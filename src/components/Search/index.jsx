import {useContext} from 'react'
import styles from './Search.module.scss'
import {HeaderContext} from '../../context/HeaderContext'
export default function Search(props){
    // console.log(props.books.books)
    const {livro} = useContext(HeaderContext)
    
    const booksList = (livro!='') ? props.books.books.filter(book => book.title.includes(livro))
        .map(filteredBook => {
            const {title, book_image} = filteredBook
            return (
                <li keys={title} className={styles.livro}>
                    
                    <img src={book_image} alt={title}/>
                    <p>{title}</p>
                </li>
            )
        }) : ''
    
    return (
        <div className={styles.container}>
            
            {(booksList.length == '' )?(
                <div className={styles.emptyBooks}>
                    <p>Sem livros</p>
                </div>
            ):
            <ul className={styles.livros} >{booksList}</ul>
            }
        </div>
    )
}

