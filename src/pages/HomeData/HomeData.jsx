import React from 'react'
import "./HomeData.scss"
import { Link } from "react-router-dom";

const HomeData = () => {
    return (
        <div className='homedata'>
            <div className="container">
                <div className="row">
                    <div className="box">
                        <h2 className='h2'>Премиум объявления</h2>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <Link to="/oneinfo" className="card">
                                    <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                    <div className="page">
                                        <div className="boz">
                                            <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                        <p className='prise'>76374364766   <span>so'm</span></p>
                                        <br />
                                        <span className='city'>Toshkent, Yunusobot tumani</span>
                                        <br />
                                        <span className='data'>4.12.2024</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <Link to="/oneinfo" className="card">
                                    <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                    <div className="page">
                                        <div className="boz">
                                            <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                        <p className='prise'>76374364766   <span>so'm</span></p>
                                        <br />
                                        <span className='city'>Toshkent, Yunusobot tumani</span>
                                        <br />
                                        <span className='data'>4.12.2024</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <Link to="/oneinfo" className="card">
                                    <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                    <div className="page">
                                        <div className="boz">
                                            <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                        <p className='prise'>76374364766   <span>so'm</span></p>
                                        <br />
                                        <span className='city'>Toshkent, Yunusobot tumani</span>
                                        <br />
                                        <span className='data'>4.12.2024</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <Link to="/oneinfo" className="card">
                                    <img className='image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                                    <div className="page">
                                        <div className="boz">
                                            <h5 className='info'> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                            <i class="fa-regular fa-heart"></i>
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
            </div>
        </div>
    )
}

export default HomeData
