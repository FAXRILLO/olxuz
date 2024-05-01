import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from "../Navbar/Navbar"
import "./Like.scss"

const Like = () => {
  return (
    <div className='linke'>
      <Navbar />
        <div className="container">
            <div className="row">
                <div className="box">
            <div className="container">
                <h2 className='fh2'>Сараланган эълонлар</h2>    
                <div className="fff">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"><h2 className='h2'>Saralangan e'lonlar</h2></div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"><h2 className='h2'>Saqlangan qidiruv</h2></div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"><h2 className='h2'>Yaqinda ko'rib chiqilgan</h2></div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"><button className='delete'>saralanganlarni o'chirish</button></div>
                    </div>
                    
                </div>
            </div>
                </div>
                <div className="box1">
            <div className="containe">
                {/* <h3 className='text'>Kirish, saralangan e‘lonlar va qidiruv natij   alarini saqlash uchun</h3> */}
                <div className="cards">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card">
                            <img className='img' src="https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714348800&semt=sph" alt="img" />
                            <p className='text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, impedit.</p>
                            <div className="prise">
                                <span className='text_prise'>788788</span>
                                <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Like
