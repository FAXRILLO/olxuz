import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Serch from '../Serch/Serch'
import Menyu from '../Menyu/Menyu'
import HomeData from '../HomeData/HomeData'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Serch />
      <Menyu />
       <HomeData />
      <Footer />
    </div>
  )
}

export default Home
