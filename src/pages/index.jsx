import Head from 'next/head'
import Search  from '../components/Search'
import styles from '../styles/Home.module.scss'
import {api} from '../services/api'
import Filter from '../components/Filter'
import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../context/FilterContext'
import {DateContext} from '../context/DateContext'
const Home = (props) => {
  const {filter} = useContext(FilterContext)
  const {date, setDate} = useContext(DateContext)

  const [books, setBooks] = useState([])
  useEffect(()=>{
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/${filter}.json?api-key=AqaEWGystNSOFqdTaHhoxJdsdRa53oYm`)
      .then(response => response.json())
      .then(data=>setBooks(data.results.books))
    // .then(response => console.log(response))
        

  }, [filter, date])
  
  console.log(books)
  if (books === undefined){
    console.log('é indefinido')
  }
  

  
  return (
    
    <div >
      
        <Head>
          <title>Home</title>
        </Head>
        
        <div className={styles.container}>
          <div className={styles.filter}>
            <Filter names={props.results}/>
            
          </div>
          <div className={styles.books}>
            <Search books={books} />
          </div>
        </div>   
    </div>
  )
}

export default Home

export const getStaticProps = async () => {  
    const {data} = await api.get(`names.json?api-key=${process.env.NEXT_APP_BOOKFINDER_API_KEY}`)                    
    
    return {
        props: {
            results: data,
        },
        revalidate: 60 * 60 * 24,
    }
  }


