import React from 'react'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import SecondaryNav from '../components/SecondaryNav'

const Buy = () => {
  return (
    <>
      <Header/>
      <SecondaryNav/>
      <SearchForm/>
      <main>
        <Banner/>
        <Features/>
      </main>
    </>
  )
}

export default Buy
