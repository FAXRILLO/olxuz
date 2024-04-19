import React from 'react'
import "./OneMalumot.scss"
import { Link } from 'react-router-dom'

const oneMalumot = () => {
  return (
    <div className='onemalumot'>
      <div className="container">
        <div className="row">
            <div className="box">
                <Link className='link' to="/">
                    <h2 className='h2'><i class="i fa-sharp fa-solid fa-circle-arrow-left"></i> Orqaga</h2>
                </Link>
                
                <div className="page1">
                    <div className="row">
                        <div style={{backgroundColor: "white",}} className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img style={{maxWidth: "100%", maxHeight: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZNXrICbJDn4YnD8g6LyF2tOQIhIEUGAYJ5NKuD4WYw&s" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                <img style={{maxWidth: "100%", maxHeight: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZNXrICbJDn4YnD8g6LyF2tOQIhIEUGAYJ5NKuD4WYw&s" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                <img style={{maxWidth: "100%", maxHeight: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZNXrICbJDn4YnD8g6LyF2tOQIhIEUGAYJ5NKuD4WYw&s" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div style={{backgroundColor: "white",}} className="about">
                                <div className="sana">
                                    <small className='joy'>Joylashtirilgan sana: 12-avgust</small>
                                    <i className="icon fa-regular fa-heart"></i>
                                </div>
                                <h4 className='h4'>Voyah Free apollo Tech - hybrid 2024</h4>
                                <h3 className='prise'>41000 y.e</h3>
                                <button className='btn_xabar'>Xabar yozish</button>
                                <br />
                                <button className='btn_tel'><i className="fa-sharp fa-solid fa-phone-volume"></i> 33 333 33 30</button>
                            </div>
                            <div style={{backgroundColor: "white",}} className="about2">
                                <h6 className='h6'>Foydalanuvchi</h6>
                                <div className="user">
                                    <div className="row">
                                        <div className="col-2">
                                            <img className='userimg' src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="img" />
                                        </div>
                                        <div className="col-10">
                                            <span className='name'>Sunnat</span>
                                            <h6 className='p1'>OLXda 2022 M11 beri</h6>
                                            <h6 className='p1'>So'ngi faollik 2024 M04 15</h6>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <small className='mualif'>mualifning boshqa e'loni </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page2">
                    <div className="row">
                        <div style={{backgroundColor: "white",}} className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                <div className="malumotlarpage">
                                    <div className="bbb">
                                        <h6 className='h6'><i className="fa-regular fa-bookmark"></i> REKLAMA QILISH</h6>
                                        <h6 className='h6_1'><i className="fa-solid fa-arrows-rotate"></i> KO'TARISH</h6>
                                    </div>
                                    <div className="btnlar">
                                        <button className='malumotbtn'>Jismoniy shaxs</button>
                                        <button className='malumotbtn'>Model: Cobalt</button>
                                        <button className='malumotbtn'>Kuzov turi: Sedan</button>
                                        <button className='malumotbtn'>Ishlab chiqarilgan yili: 2020</button>
                                        <button className='malumotbtn'>Bosgan yo‘li: 89 000 km</button>
                                        <button className='malumotbtn'>Uzatmalar qutisi: Avtomatik</button>
                                        <button className='malumotbtn'>Rang: Kul rang</button>
                                        <button className='malumotbtn'>Dvigatel hajmi: 15 cm³</button>
                                        <button className='malumotbtn'>Yoqilg‘i turi: Gaz/Benzin</button>
                                        <button className='malumotbtn'>Mashina holati: Ідеальний</button>
                                        <button className='malumotbtn'>Mulkdorlar soni: 1</button>
                                        <button className='malumotbtn'>Qo‘shimcha optsiyalar: Охоронна система, Elektrko‘zgular, El. oyna ko‘targichlar, Konditsioner</button>
                                    </div>
                                    <h1 className='h1_1'>TAVSIF</h1>
                                    <p className='pmalumot'>Кобалть 2020-йил,4- позиция сотилади.Краскаси тозза,идел холатда.4 поколения гази бор.Балонлар такилган,аккумулятор 1 ой один алиштирилган хеч канака харажати йук оласила хайдесила.</p>
                                </div>
                        </div>
                        <div  className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <div style={{backgroundColor: "white",}} className="lakatsiya">
                                    <h4 className='joylashuv'>JOYLASHUV</h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <h4 className='h4_2'><i className="fa-solid fa-location-dot"></i> 
                                                Toshkent, Chilonzor tumani
                                            </h4>
                                            <small className='small'>Toshkent viloyati</small>
                                        </div>
                                        <div className="col-6">
                                            <img className='img1' src="https://i.ytimg.com/vi/U42ICAgFUJQ/sddefault.jpg" alt='img' />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="page3">
                    <div className="row">
                        <div style={{backgroundColor: "white",}} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="man">
                                        <h4 className='sotuv'>SOTUVCHIGA MUROJAAT QILISH</h4>
                                            <div className="row">
                                                <div className="col-2">
                                                    <img className='userimg2' src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="img" />
                                                </div>
                                                <div className="col-10">
                                                    <span className='name'>Sunnat</span>
                                                    <h6 className='p1'>OLXda 2022 M11 beri</h6>
                                                    <h6 className='p1'>So'ngi faollik 2024 M04 15</h6>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="malumotnomer">
                                        <button className='habar'>Xabar yozish</button>
                                        <div className="nomer">
                                            <i className="fa-sharp fa-solid fa-phone-volume"></i>
                                            <h4 className='h4x'>xxx xxx xxx</h4>
                                            <button className='korsat'>Ko'rsatish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="page4">
                    <h3 className='kim'>Mualifning boshqa elonlari  <small className='smal'>Hammasi</small></h3>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <div className="images d-flex">
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <div className="images d-flex">
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="images d-flex">
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
                <div className="page5">
                    <h3 className='elon'>O'xshash e'lonlar</h3>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="images d-flex">
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="images d-flex">
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="images d-flex">
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                    <div className="img1">
                                            <Link to="/oneinfo" className="card">
                                                <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                                <div className="page">
                                                    <div className="boz">
                                                        <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <p className='prise'>76374364766   <span>so'm</span></p>
                                                    <br />
                                                    <span className='city'>Toshkent, Yunusobot tumani</span>
                                                    <br />
                                                    <span className='data'>4.12.2024</span>
                                                </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default oneMalumot
