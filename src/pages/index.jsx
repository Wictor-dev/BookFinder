import Head from 'next/head'
import Image from 'next/image'
import Search  from '../components/Search'
import styles from '../../styles/Home.module.css'
const Home = (props) => {
  // console.log()
  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      
      <div className={styles.container}>
        <Search books={props.results.results} />

      </div>   
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=
  ${process.env.NEXT_APP_BOOKFINDER_API_KEY}`)
  const data = await res.json()

  return {
      props: {
          results: data,
      }
  }
}


