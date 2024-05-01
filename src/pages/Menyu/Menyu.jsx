import React from 'react'
import { Link } from 'react-router-dom'
import "./Menyu.scss"

const Menyu = () => {
  return (
    <div className='menyu'>
        <div className="container">
            <h4 className='h4'>OLX эълонлар тахтасидаги рукнлар</h4>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <Link to={"/cars"} className='boxz'>
                  <img className='img1' src="https://categories.olxcdn.com/assets/categories/olxuz/transport-3-1x.png" alt="imgcar" />
                  <h6 className='h6'>Transport</h6>
                </Link>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className='boxz'>
                  <img className='img2' src="https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-1x.png" alt="imgish" />
                  <h6 className='h6'>Ish</h6>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className='boxz'>
                  <img className='img3' src="https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-1x.png" alt="imgmodastill" />
                  <h6 className='h6'>Moda va stil</h6>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Menyu
