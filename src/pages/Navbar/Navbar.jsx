import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="container">
      <Link to={"/"} class="navbar-brand" href="#">
        <img src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="logo" />
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <form class="d-flex">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to={"/chat"} class="nav-link msg" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="css-1658auh"><path fill="currentColor" fill-rule="evenodd" d="M11 4.01c-3.86 0-7 3.157-7 7.038v8.426l2.553-1.283.447-.106h6c3.86 0 7-3.157 7-7.037S16.86 4.01 13 4.01h-2zM3.447 22 2 21.1V11.049C2 6.058 6.037 2 11 2h2c4.962 0 9 4.059 9 9.048s-4.038 9.047-9 9.047H7.236L3.448 22z"></path></svg>Xabarlar </Link>
          </li>
          <li class="nav-item">
          <a  class="nav-link rus" href="#"> <span className='gray'>O'Z |</span>Рус</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <Link to={"/like"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" aria-label="Выделенные" class="css-l9chfa"><path fill="currentColor" fill-rule="evenodd" d="M20.219 10.367 12 20.419 3.806 10.4A3.96 3.96 0 0 1 3 8c0-2.206 1.795-4 4-4a4.004 4.004 0 0 1 3.868 3h2.264A4.003 4.003 0 0 1 17 4c2.206 0 4 1.794 4 4 0 .868-.279 1.698-.781 2.367M17 2a5.999 5.999 0 0 0-5 2.686A5.999 5.999 0 0 0 7 2C3.692 2 1 4.691 1 8a5.97 5.97 0 0 0 1.232 3.633L10.71 22h2.582l8.501-10.399A5.943 5.943 0 0 0 23 8c0-3.309-2.692-6-6-6"></path></svg>
            </Link>
            </a>
          </li>
       <Link style={{textDecoration: "none"}} to={'profile'}> 
       <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="css-1fne1f4"><path fill="currentColor" fill-rule="evenodd" d="M12 12c4.963 0 9 4.038 9 9l-1 1H4l-1-1c0-4.962 4.037-9 9-9zm0 2c-3.52 0-6.442 2.613-6.929 6H18.93c-.487-3.387-3.409-6-6.93-6zm0-12c2.481 0 4.5 2.019 4.5 4.5 0 2.482-2.019 4.5-4.5 4.5a4.505 4.505 0 0 1-4.5-4.5C7.5 4.019 9.519 2 12 2zm0 2a2.503 2.503 0 0 0-2.5 2.5C9.5 7.878 10.621 9 12 9s2.5-1.122 2.5-2.5S13.379 4 12 4z"></path></svg> Hisobingiz</a>

          </li>
       </Link>
        </ul>
       <Link to={"/addProd"}>
       <button className="ad">E‘lon berish</button>
       </Link>
        
      </div> 
      </form>
      
      </div>
    </nav>

    
  )
}

export default Navbar
