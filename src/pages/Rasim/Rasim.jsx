import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {data} from "../../data"
import "./Rasim.scss"

const Rasim = () => {
  const id = useParams().id;
  const res = data.filter((res) => res.id == id)[0];
  return (
    <div className='rasim'>
      <div className="container">
        <div className="box">
            <div className="boshi">
                <h3 className='h3'>Skoda Kodiaq (7 местный) с выкупом (Предоплата 5000$)</h3>
                <Link className='link' to="/oneinfo"><i class="fa-sharp fa-solid fa-x"></i></Link>
            </div>
            
            <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  {res.img.map((res) => {
                    return (
                      <Link to="/rasim" className="carousel-item active">
                        <img src={res} className="d-block w-100" alt="..." />
                      </Link>
                    )
                  })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="page">
                    <button className='btn_xabar'>Xabar yozish</button>
                    <button className='btn_nomer'>33 333 33 30</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rasim
