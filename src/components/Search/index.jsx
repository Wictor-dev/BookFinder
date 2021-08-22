import {useState} from 'react'
import styles from './styles.module.css'

export default function Search(props){
    const [valor, setValor] = useState(null)
    const [livro, setLivro] = useState(null)
    const prevent = (e) => {
        e.preventDefault();
    }
    const onChange=(event) => {
        setValor(event.target.value)
    }

    // console.log(props.books)
    // console.log(props.books.books)
    // console.log(typeof(props.books.books))
    const booksList = (livro!='') ? props.books.books.filter(book => book.title.includes(livro))
        .map(filteredBook => (
            <li keys={filteredBook.title}>
            {filteredBook.title}
            </li>
        )) : ''
    
    return (
        <div className={styles.container}>
            <h1>Pesquise o livro</h1>
            <form onSubmit={prevent}>
                <input type="text" value={valor} onChange={onChange} />
                <button onClick={() => setLivro(valor)}>Submit</button>
            </form>
            <p>Livros</p>
            {(booksList.length == '' )?(<p>Sem livros</p>):
            <ul className={styles.livros} >{booksList}</ul>
            }
            
            
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3333/books')
    const data = await res.json()

    return {
        props: {
            books: data,
        }
    }
}
