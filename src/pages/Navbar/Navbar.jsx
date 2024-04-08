import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <nav className = "navbar">
        <div className = "container-fluid">
          <h1 className = "brand">olx</h1>
          <form className = "d-flex">
            <h5 className='xabar'><i style={{marginRight: "10px"}} className ="fa-regular fa-comment"></i> Xabarlar</h5>
            <h5 className='til'>O'Z | PY</h5>
            <h5><i className ="icon fa-sharp fa-regular fa-heart"></i></h5>
            <h5 className='hisoplar'><i style={{marginRight: "7px"}} className ="fa-regular fa-user"></i> Hisobingiz</h5>
            <button className = "button" type="submit">E'lon berish</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
