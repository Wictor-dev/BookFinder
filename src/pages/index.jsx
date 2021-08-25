import Head from 'next/head'
import Search  from '../components/Search'
import styles from '../../styles/Home.module.css'
import {api} from '../services/api'
const Home = (props) => {
  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      
      <div className={styles.container}>
        <h1>Livros</h1>
        <Search books={props.results.results} />
      </div>   
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const {data} = await api.get(`/current/hardcover-fiction.json?api-key=
  ${process.env.NEXT_APP_BOOKFINDER_API_KEY}`)
  
  
  return {
      props: {
          results: data,
      },
      revalidate: 60 * 60 * 24,
  }
}


