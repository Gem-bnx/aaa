import React from 'react'
import './style.scss'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
function Home() {
  return (
    <section className='homepage container'>
      {/* <Header></Header>  */}
      <h2>Ready for your trip? Let's go!</h2>
      <SearchBar></SearchBar>
    </section>
  )
}

export default Home