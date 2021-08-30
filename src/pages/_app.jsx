import { useState } from 'react'
import '../styles/globals.css'
import Footer from '../components/Footer';
import Header from '../components/Header'
import { HeaderContext } from '../context/HeaderContext'
import { FilterContext } from '../context/FilterContext'


function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  const [livro, setLivro] = useState('');

  const [filter, setFilter] = useState('combined-print-and-e-book-fiction');


  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const onChangeFilter = (e)=> {
    setFilter(e.target.value)
  }

  
  return (
    <HeaderContext.Provider value={{search, onChange, livro, setLivro}}>
      <div>
        <Header />
      
          <FilterContext.Provider value={{filter, setFilter, onChangeFilter}} >
              <Component {...pageProps} />
          </FilterContext.Provider>

        <Footer />
      </div>

    </HeaderContext.Provider>
  )
}

export default MyApp





