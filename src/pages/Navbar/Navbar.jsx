import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbare">
      <div className="container">

        <header className='header-none'>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to={"/"} >
                      <img src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="logo" />
                  </Link>
  

                </div>
                <nav>
                    <ul className="nav-list">
                        <Link to={"/"} >
                            <i class="fa-solid fa-house icon"></i>
                        </Link>
                        <li className="nav-item">
                            <Link to={"/chat"} class="nav-link">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="css-1658auh"><path fill="currentColor" fill-rule="evenodd" d="M11 4.01c-3.86 0-7 3.157-7 7.038v8.426l2.553-1.283.447-.106h6c3.86 0 7-3.157 7-7.037S16.86 4.01 13 4.01h-2zM3.447 22 2 21.1V11.049C2 6.058 6.037 2 11 2h2c4.962 0 9 4.059 9 9.048s-4.038 9.047-9 9.047H7.236L3.448 22z"></path></svg><span className='h6'>Xabarlar</span> </Link>
                        </li>
                        <li className="nav-item">
                            <a  class="nav-link" href="#">O'Z |<span>Рус</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to={"/like"} className="nav-link">
                              <i className="fa-regular fa-heart"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/profile'} className="nav-link"> 
                              <i className="fa-regular fa-user"></i>
                              <h6 className='h6'>
                                hisobingiz
                              </h6>
                          </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/addProd"} className="nav-link">
                              <button className="header-btn">E‘lon berish</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
      </div>
    </div>

    
  )
}

export default Navbar
