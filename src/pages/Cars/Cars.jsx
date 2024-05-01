import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Serch from '../Serch/Serch'
import "./Cars.scss"
import { Link, useParams } from "react-router-dom";
import {data} from "../../data"
import { useInfoContext } from '../../context/Context';


const Cars = () => {
    const id = useParams().id;
    const res = data.filter((res) => res.id == id)[0];
    const {cards} = useInfoContext()
  return (
      <div className='cars'>
        <Navbar />
        <Serch />
            <div className="container">
                <div className="row">
                    <div className="box1">
                        <div className="row">
                            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-6 col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                        Faqat fotosurat bilan
                                    </label>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                <button className='btn1'><i className="fa-regular fa-heart"></i> Qidiruvga amal qiling</button>
                            </div>
                        </div> 
                    </div>
                    <div className="box2">
                        <h3 className='filter'>Filtrlar</h3>
                        <div className="dropdavuns">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="dropdavun">
                                        <h6 className='h6'>Runk</h6>
                                        <select  required id="address" name='address'>
                                            <option value="bektemir">Yengil avtomabil</option>
                                            <hr />
                                            <option value="bektemir">Yuk avtomabil</option>
                                            <hr />
                                        </select>
                                    </div>  
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="dropdavun">
                                        <h6 className='h6'>Hama e'lonlar</h6>
                                        <select  required id="address" name='address'>
                                            <option value="bektemir">yengil avtomabil</option>
                                            <hr />
                                            <option value="bektemir">BYD</option>
                                            <hr />
                                            <option value="bektemir">Chevrolet</option>
                                            <hr />
                                            <option value="bektemir">Daewo</option>
                                            <hr />
                                            <option value="bektemir">Zekir</option>
                                            <hr />
                                            <option value="bektemir">Lipmotor</option>
                                            <hr />
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="dropdavun">
                                <h6 className='h6'>Narx</h6>
                                <div className='d-flex'>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">dan</option>
                                        <hr />
                                        <option value="bektemir">1,000,000</option>
                                        <hr />
                                        <option value="bektemir">3,000,000</option>
                                        <hr />
                                        <option value="bektemir">6,000,000</option>
                                        <hr />
                                        <option value="bektemir">10,000,000</option>
                                        <hr />
                                        <option value="bektemir">20,000,000</option>
                                        <hr />
                                        <option value="bektemir">30,000,000</option>
                                        <hr />
                                        <option value="bektemir">Ayirboshlash</option>
                                        <hr />
                                    </select>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">gacha</option>
                                        <hr />
                                        <option value="bektemir">1,000,000</option>
                                        <hr />
                                        <option value="bektemir">3,000,000</option>
                                        <hr />
                                        <option value="bektemir">6,000,000</option>
                                        <hr />
                                        <option value="bektemir">10,000,000</option>
                                        <hr />
                                        <option value="bektemir">20,000,000</option>
                                        <hr />
                                        <option value="bektemir">30,000,000</option>
                                        <hr />
                                    </select>
                                </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="dropdavun">
                                <h6 className='h6'>Dvigatel hajmi cm³</h6>
                                <div className='d-flex'>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">dan</option>
                                        <hr />
                                        <option value="bektemir">9 cm</option>
                                        <hr />
                                        <option value="bektemir">20 cm</option>
                                        <hr />
                                        <option value="bektemir">60 cm</option>
                                        <hr />
                                        <option value="bektemir">1,25 cm</option>
                                        <hr />
                                        <option value="bektemir">1,50 cm</option>
                                        <hr />
                                    </select>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">gacha</option>
                                        <hr />
                                        <option value="bektemir">9 cm</option>
                                        <hr />
                                        <option value="bektemir">20 cm</option>
                                        <hr />
                                        <option value="bektemir">60 cm</option>
                                        <hr />
                                        <option value="bektemir">1,25 cm</option>
                                        <hr />
                                        <option value="bektemir">1,50 cm</option>
                                        <hr />
                                    </select>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="dropdavun">
                                <h6 className='h6'>Bosgan yo‘li km</h6>
                                <div className='d-flex'>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">dan</option>
                                        <hr />
                                        <option value="bektemir">10.000 km</option>
                                        <hr />
                                        <option value="bektemir">20.000 km</option>
                                        <hr />
                                        <option value="bektemir">30.000 km</option>
                                        <hr />
                                        <option value="bektemir">40.000 km</option>
                                        <hr />
                                    </select>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">gacha</option>
                                        <hr />
                                        <option value="bektemir">10.000 km</option>
                                        <hr />
                                        <option value="bektemir">20.000 km</option>
                                        <hr />
                                        <option value="bektemir">30.000 km</option>
                                        <hr />
                                        <option value="bektemir">40.000 km</option>
                                        <hr />
                                    </select>
                                </div>
                            </div> 
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="dropdavun">
                                <h6 className='h6'>rangi</h6>
                                <select  required id="address" name='address'>
                                    <option value="bektemir">hana e'lonlar</option>
                                    <hr />
                                    <option value="bektemir">oq</option>
                                    <hr />
                                    <option value="bektemir">qora</option>
                                    <hr />
                                    <option value="bektemir">mo'kri</option>
                                    <hr />
                                    <option value="bektemir">yashil</option>
                                    <hr />
                                    <option value="bektemir">ko'k</option>
                                    <hr />
                                </select>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="dropdavun">
                                <h6 className='h6'>Yoqilg‘i turi</h6>
                                <select  required id="address" name='address'>
                                    <option value="bektemir">Hama e'lonlar</option>
                                    <hr />
                                    <option value="bektemir">benzin</option>
                                    <hr />
                                    <option value="bektemir">gaz</option>
                                    <hr />
                                    <option value="bektemir">elektor</option>
                                    <hr />
                                    <option value="bektemir">gibrit</option>
                                    <hr />
                                </select>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="dropdavun">
                                <h6 className='h6'>Ishlab chiqarilgan yili</h6>
                                <div className='d-flex'>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">dan</option>
                                        <hr />
                                        <option value="bektemir">2000</option>
                                        <hr />
                                        <option value="bektemir">2004</option>
                                        <hr />
                                        <option value="bektemir">2007</option>
                                        <hr />
                                        <option value="bektemir">2010</option>
                                        <hr />
                                        <option value="bektemir">2015</option>
                                        <hr />
                                        <option value="bektemir">2020</option>
                                        <hr />
                                        <option value="bektemir">2021</option>
                                        <hr />
                                        <option value="bektemir">2022</option>
                                        <hr />
                                        <option value="bektemir">2023</option>
                                        <hr />
                                    </select>
                                    <select  required id="address" name='address'>
                                        <option value="bektemir">gacha</option>
                                        <hr />
                                        <option value="bektemir">2000</option>
                                        <hr />
                                        <option value="bektemir">2004</option>
                                        <hr />
                                        <option value="bektemir">2007</option>
                                        <hr />
                                        <option value="bektemir">2010</option>
                                        <hr />
                                        <option value="bektemir">2015</option>
                                        <hr />
                                        <option value="bektemir">2020</option>
                                        <hr />
                                        <option value="bektemir">2021</option>
                                        <hr />
                                        <option value="bektemir">2022</option>
                                        <hr />
                                        <option value="bektemir">2023</option>
                                        <hr />
                                    </select>
                                </div>
                                </div>
                                </div>
                            </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        </div>
                    </div>
                    <div className="box3">

                    </div>
                    <h4 className='h4'>Biz 1,000 dan ortiq e'lon topdik</h4>
                    {data.length > 0 ? data.map(res=> {
                                    return  <Link to={`/oneinfo/${res.id}`} className="box4">
                                    <div className="page1">
                                        <img className='img_1' src={res.img[0]} alt="img" />
                                    </div>
                                    <div className="page2">
                                        <div className="malumot">
                                            <div className="row">
                                                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12">
                                                    <p className='text text-truncate'>{res.content}</p>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                    <span className='price'>{res.price}</span>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className="malumot2">
                                            <div className="row">
                                                <div className="col-xl-11 col-lg-10 col-md-10 col-sm-8 col-8">
                                                    <p className='lakatsiya'>{res.location}</p>
                                                    <p className='yurgan'>2015-yil / 20000 km</p>
                                                </div>
                                                <div className="col-xl-1 col-lg-2 col-md-2 col-sm-4 col-4">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                    }) : <h2>Tavar yo'q</h2>}

                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Cars
