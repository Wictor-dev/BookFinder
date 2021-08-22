import Head from 'next/head'
import Image from 'next/image'
import Search  from '../components/Search'
import Header from '../components/Header'
import styles from '../../styles/Home.module.css'
const Home = (props) => {
  // console.log()
  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <Search books={props.results.results} />

      </div>   
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  // const res = await fetch('http://localhost:3333/books'):
  const res = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AqaEWGystNSOFqdTaHhoxJdsdRa53oYm')
  const data = await res.json()

  return {
      props: {
          results: data,
      }
  }
}


