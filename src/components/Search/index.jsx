import {useContext} from 'react'
import styles from './Search.module.scss'
import {HeaderContext} from '../../context/HeaderContext'
import Image from 'next/image'
import Link from 'next/link'

export default function Search(props){
    const {livro} = useContext(HeaderContext)
    
    const booksList = (livro!='') ? props.books.filter(book => book.title.includes(livro))
        .map(filteredBook => {
            const {title, book_image, rank} = filteredBook
            return (
                <li keys={title} className={styles.livro}>
                    <div>
                        <Image 
                            width={300} 
                            height={400} 
                            src={book_image} 
                            alt={title} 
                            objectFit='contain'
                            className={styles.img}
                            />
                        <Link href={`/books/${rank}`}>
                            <a><p>{title}</p></a>
                        </Link>

                    </div>
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

