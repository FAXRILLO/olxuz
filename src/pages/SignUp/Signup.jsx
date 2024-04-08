import React from 'react'
import "./Signup.scss"

const Signup = () => {
  return (
    <div className='signup'>
      <div className="signup-page">
        <button className="facebook mb-3">
        <i class="fa-brands fa-facebook"></i>
        <span>Facebook orqali kirish</span>
        </button>
        <button className="facebook apple mb-3">
        <i class="fa-brands fa-apple"></i>
        <span>Apple orqali kirish</span>
        </button>
        <button className="facebook google mb-3">
        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google" />
        <span>Google orqali kirish</span>
        </button>
      </div>
    </div>
  )
}

export default Signup
