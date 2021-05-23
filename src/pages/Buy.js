import React from 'react'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import SearchForm from '../components/SearchForm'
import SecondaryNav from '../components/SecondaryNav'

import curology from '../images/curology.svg'
import sneakers from '../images/sneakers.svg'
import coke from '../images/coke.svg'
import coffee from '../images/coffee.svg'
import paperBag from '../images/paper-bag.svg'
import box from '../images/box.svg'

const products = [curology, sneakers, coke, coffee, paperBag, box]

const Buy = () => {
  return (
    <>
      <Header/>
      <SecondaryNav/>
      <SearchForm/>
      <main>
        <Banner/>
        <Features/>
        <ProductList products={products} />
      </main>
    </>
  )
}

export default Buy
