import { useState } from 'react'
import '../styles/globals.css'
import Footer from '../components/Footer';
import Header from '../components/Header'
import { HeaderContext } from '../context/HeaderContext'
import { FilterContext } from '../context/FilterContext'
import { DateContext } from '../context/DateContext';

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

function MyApp({ Component, pageProps }) {
  const currentDate = format(new Date(), 'u-LL-dd', {
    locale: ptBR,
})

  const [search, setSearch] = useState('');
  const [livro, setLivro] = useState('');

  const [filter, setFilter] = useState('combined-print-and-e-book-fiction');

  const [date, setDate] = useState(currentDate)

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
        <DateContext.Provider value={{date,setDate}}>
          <FilterContext.Provider value={{filter, setFilter, onChangeFilter}} >
              <Component {...pageProps} />
          </FilterContext.Provider>
        </DateContext.Provider>
        <Footer />
      </div>

    </HeaderContext.Provider>
  )
}

export default MyApp





