import React from 'react'
import "./Serch.scss"

const Serch = () => {
  return (
    <div className='serch'>
      <div className="container">
        <div className="row">
          <div className="box">
            <input className='input1' type="text" placeholder='Nimani qidiryapsiz?' />
            <input className='input2' type="text" placeholder="O'zbekiston" />
            <button className='btnserch'>Qidiruv <i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Serch
