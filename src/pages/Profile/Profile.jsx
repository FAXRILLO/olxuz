import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Profile.scss"

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="settings d-flex">
                        <h2>Sozlamalar</h2>
                        <div className="setting-right">
                            <div className='my-2 mx-3'>
                                <p>Sizning hisobingiz: 0 сум</p>
                                <p>Eʼlonlar reklamasi uchun: 0 bonuslarni</p>
                            </div>
                            <i class="fa-solid fa-circle-info"></i>
                            <button>Hisobni to‘ldirish</button>
                        </div>
                    </div>
                </div>
                <div className="ads">
                    <span>E‘lonlar</span>
                    <span>Xabarlar</span>
                    <span>To‘lovlar va OLX hisobi</span>
                    <span>Olingan baholar</span>
                    <span>Nomzod profili</span>
                    <span className='line'>Sozlamalar</span>
                </div>
            </div>

            <div className="all-set">
                <div className="container">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Bog‘lanish uchun ma‘lumotlarni o‘zgartirish
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <form>
                                        <div>
                                            <label for="address">Shaharni tanlash</label>

                                            <select  required id="address" name='address'>
                                                <option value="bektemir">Toshkent, Bektemir tumani</option>
                                                <hr />
                                                <option value="chilonzor">Toshkent, Chilonzor tumani</option>
                                                <hr />

                                                <option value="toshkent">Toshkent, Toshkent tumani</option>
                                                <hr />

                                                <option value="mirobod">Toshkent, Mirobod tumani</option>
                                                <hr />

                                                <option value="uchtepa">Toshkent, Uchtepa tumani</option>
                                                <hr />

                                                <option value="yunusobod">Toshkent, Yunusobod tumani</option>
                                                <hr />

                                                <option value="yashnobod">Toshkent, Yashnobod tumani</option>
                                                <hr />

                                                <option value="olmazor" selected>Toshkent, Olmazor tumani</option>
                                            </select>
                                        </div>
                                        <hr />
                                        <div>
                                            <label htmlFor="email">Aloqa uchun shaxs  </label>
                                            <input className='olx-input' required name='email' type="email" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone">Telefon raqami</label>
                                            <input className='olx-input' id='phone' name='tel' type="tel" required placeholder="+998 90 123 45 67" />
                                        </div>
                                        <button className='setting-btn'>Saqlash</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Parolni o‘zgartirish
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <form action="">
                                        <div>
                                            <label htmlFor="">
                                                Parolingiz <span>*</span>
                                            </label>
                                            <input type="password" name='password' className="olx-input" />
                                        </div>
                                        <div>
                                            <label htmlFor="">
                                                Yangi parol
                                                <span>*</span>
                                            </label>
                                            <input type="password" name='password' className="olx-input" />
                                        </div>
                                        <button className="setting-btn">Parolni o‘zgartirish</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Email-manzilni o‘zgartirish
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <form action="">
                                        <div>
                                            <label htmlFor="">Sizning OLX dagi xozirgi parolingiz</label>
                                            <input type="password" className='olx-input' />
                                        </div>
                                        <div>
                                            <label htmlFor="">Yangi e‘lon</label>
                                            <input type="text" className='olx-input' />
                                        </div>
                                        <button className="setting-btn">Saqlash</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Mening rezyume
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                   <h4>Bu boʻlimni "Nomzod profili" varagʻiga koʻchirdik. Bu yerda rezyume biriktirishingiz yoki oʻzgartirishingiz va ishga tezroq ariza topshirish uchun koʻproq tafsilotlar kiritishingiz mumkin.</h4>
                                   <button className="setting-btn-2">Nomzod profiliga oʻtish</button>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Akauntni o‘chirish
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                   <button className="setting-btn-3">Akauntni o‘chirish</button>
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

export default Profile