import { api } from "../../services/api"
import styles from './Book.module.scss'
import Image from 'next/image'
import Head from 'next/head'
export default function Book({book}){
    const {title, book_image, description, author, contributor, buy_links} = book
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.bookContainer}>
                <div className={styles.image}>
                    <Image 
                        width={400}
                        height={573}
                        src={book_image}
                        alt={title}
                        className={styles.img}
                    />

                </div>
                <div className={styles.description}>
                    <h1>Title: {title}</h1>
                    <h2>Description: {description}</h2>
                    <p>Author: {author}</p>
                    <p>Contributor: {contributor}</p>
                    <a href={buy_links[0].url}>Comprar</a>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}
export const getStaticProps = async (ctx) => {
    const { slug } = ctx.params

    const {data} = await api.get(`/current/hardcover-fiction.json?api-key=
    ${process.env.NEXT_APP_BOOKFINDER_API_KEY}`)
    const books = data.results.books
    const rank = slug
    const bookFilter = books.find(book => book.rank == rank)
    

    return {
        props: {
            book: bookFilter,
        },
        revalidate: 60 * 60 * 24, // 24 hours
    }
}