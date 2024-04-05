import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
        <Routes>
          {/* <Route path='/' element={<About /> } /> */}
          
        </Routes>
      <Footer />
    </div>
  )
}

export default App