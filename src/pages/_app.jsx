import { useState } from 'react'
import '../../styles/globals.css'
import Header from '../components/Header'
import { HeaderContext } from '../context/HeaderContext'

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  const [livro, setLivro] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <HeaderContext.Provider value={{search, onChange, livro, setLivro}}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>

    </HeaderContext.Provider>
  )
}

export default MyApp
