import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import "./AddElon.scss"
const AddElon = () => {
    return (
        <div>
            <Navbar />
            <div className="add-page">
                <div className="container">
                    <div className="row">
                        <h2>E’lon joylashtirish</h2>
                        <div className="add-item mb-3">
                            <h3>Bizga e’loningiz haqida gapirib bering</h3>
                            <div className='label'>
                                <label htmlFor='name'>Sarlavhani kiriting*</label>
                                <input id='name' minLength={16} type="text" placeholder='Masalan, iPhone 11 kafolati bilan' />
                            </div>
                            <p>Kamida 16 ta belgi kiriting</p>

                            <div className='label my-2'>
                                <label htmlFor="category">Rukn*</label>
                                <select name="category" id="category">
                                    <option selected disabled hidden value="">Bo‘limni tanlang</option>
                                    <option value="2">asd</option>
                                    <option value="3">asd</option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="add-item my-3">
                            <h3>Rasmlar</h3>
                            <p className='add-p'>Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.</p>

                            <div className="img-boxes">
                                <div className="row">

                                    <div className="first_pace">
                                        <label htmlFor="inp-1" className="col-6 first_box">
                                            <span>Rasmlarni qoshish</span>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                    </div>

                                    <div className="second_pace">
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                        <label htmlFor="inp-1" className="col-6">
                                            <i className="fa-solid fa-camera"></i>
                                            <input hidden id="inp-1" className="col-6 box" type="file" />
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text">
                            <label htmlFor="text">Tavsif*</label>
                            <textarea minLength={40} placeholder="O’zingizni shu e'lonni ko’rayotgan odam o’rniga qo’ying va tavsif yozing" name="text" id="text" cols="80" rows="10"></textarea>
                            <p>Kamida 40 ta belgi kiriting</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="activ my-3">
                            <svg width="18" height="18" class="css-1fol2uy" viewBox="0 0 91 80" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M78.3612 34.4054C75.6287 15.4338 59.2598 0.833984 39.4115 0.833984C17.6526 0.833984 0 18.3732 0 40.0007C0 61.6281 17.6526 79.1673 39.4115 79.1673C52.2596 79.1673 63.6401 73.0275 70.8318 63.5678L66.3276 56.9468C60.6636 65.8022 50.7282 71.707 39.4115 71.707C21.8189 71.707 7.50694 57.4839 7.50694 40.0007C7.50694 22.5174 21.8189 8.2943 39.4115 8.2943C55.0747 8.2943 68.073 19.5892 70.7417 34.4054H60.0555L75.0694 56.4768L90.0833 34.4054H78.3612ZM38.627 45.5961L33.7812 60.5167L56.3021 34.4056H42.0727L47.2337 19.4849L22.5208 45.5961H38.627Z"></path></svg>
                            <div>
                                <h4>Avtomatik uzaytirish</h4>
                                <p>E'lon har 30 kunda avtomatik ravishda uzaytiriladi</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="location">
                            <h4>Joylashuv*</h4>
                            <input type="text" placeholder='Toshkent, Olmazor tumani' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="phone my-3">
                            <h4>Aloqa uchun ma'lumotlar</h4>
                            <div className='my-3'>
                                <label htmlFor='name'>Murojaat qiluvchi shaxs*</label>
                                <input id='name' type="text" className="add-input" />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="email">Email-манзил</label>
                                <input type="text" className="add-input" id="email" placeholder='faxrillo67@gmail.com' />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="phone">Telefon raqami</label>
                                <input type="text" className="add-input" id="phone" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="end">
                            <button className="line">Ko'rib chiqish</button>
                            <button className="gray">E’lon joylashtirish</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddElon