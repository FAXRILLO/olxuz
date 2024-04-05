import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { InfoProvider, useInfoContext } from './context/Context';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';

const App = () => {
  const {currentUser} = useInfoContext()
  console.log(currentUser);
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          {/* <Route path='/' element={<About /> } /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App