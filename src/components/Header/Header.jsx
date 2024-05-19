import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.scss'
import { useInfoContext } from '../../context/infoContext'

const Header = () => {
    const {exit} = useInfoContext()
    const path = useLocation().pathname
  return (
    <header className={path === '/chat' ? 'header-none' : {}}>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="logo_site" />
                    </Link>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/chat" className="nav-link">
                                <i className="fa-regular fa-comment"></i>
                                Сообщения
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                O'z
                                <span>|  Рус</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/like" className="nav-link">
                                <i className="fa-regular fa-heart"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/account" className="nav-link">
                                <i className="fa-regular fa-user"></i>
                                Ваш профиль
                                <i className="fa-solid fa-chevron-down"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/add" className="nav-link">
                                <button className='header-btn'>
                                    Подать объявление
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="media-navbar">
            <ul className="media-list">
                <li className="media-item">
                    <NavLink to="/" className="media-link">
                        <i className="fa-solid fa-house-chimney"></i>
                        Главная
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink to="/like" className="media-link">
                        <i className="fa-solid fa-heart"></i>
                        Избранное
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink to="/add" className="media-link">
                        <i className="fa-solid fa-circle-plus"></i>
                        Создать
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink to="/chat" className="media-link">
                        <i className="fa-solid fa-comment"></i>
                        Сообщения
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink to="/account" className="media-link">
                        <i className="fa-solid fa-user"></i>
                        Профиль
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header