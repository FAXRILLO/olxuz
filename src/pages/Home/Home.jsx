import React from 'react'
import Serch from '../Serch/Serch'
import Menyu from '../Menyu/Menyu'
import HomeData from '../HomeData/HomeData'
import Footer1 from '../Footer/Footer1'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />

      <Serch />
      <Menyu />
      <HomeData />
      <Footer1 />
      <Footer />

    </div>
  )
}

export default Home
