import React from 'react'
import Serch from '../Serch/Serch'
import OneMalumot from '../OneMalumot/OneMalumot'
import "./OneInfo.scss"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const OneInfo = () => {
  return (
    <div className='info'>
      <Navbar />
      <Serch />
      <OneMalumot />
      <Footer />
    </div>
  )
}

export default OneInfo
