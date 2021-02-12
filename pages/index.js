import Head from 'next/head'
import SearchBar from '../componants/SearchBar'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import CoinList from '../componants/Coins'


export default function Home({ filterCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filterCoins.filter(data =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )


  const handelChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="text" placeholder="search" onChange={handelChange} />
      <CoinList filterCoins={allCoins} />
    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')

  const filterCoins = await res.json()

  return {
    props: {
      filterCoins
    }
  }
}