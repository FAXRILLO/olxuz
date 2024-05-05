import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./Chat.scss"

const Chat = () => {
  return (
    <div className='chat'>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="box1">
                    <div className="page1">
                        <h3 className='habar'>Xabarlar</h3>
                        <div className="hisob">
                            <small className='hizmat'>Hisobingiz balansi: 0 cym</small>
                            <br />
                            <small className='bonus'>Mavjud bonuslar: 0 bonus</small>
                        </div>
                        <button className='btn1'>Hisobni to'ldirish</button>
                        <button className='btn2'>To'plam sotib olish</button>
                    </div>
                    <div className="page2">
                        <button className='sman1'>E'lonlar</button>
                        <button className='sman1'>E'lonlar</button>
                        <button className='sman1'>Xabarlar</button>
                        <button className='sman1'>To‘lovlar va OLX hisobi</button>
                        <button className='sman1'>Nomzod profili</button>
                        <button className='sman1'>Sozlamalar</button>
                    </div>
                </div>
                <div className="box2">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="page1">
                                <div className="section1">
                                    <button className='save'><i class="fa-sharp fa-regular fa-bookmark"></i> Saqlanganlar</button>
                                    <button className='delete'><i class="fa-solid fa-trash"></i> Quti</button>
                                </div>
                                <div className="section2">
                                    <button className='olmoq'>Sotib olaman</button>
                                    <button className='sotaman'>Sotaman</button>
                                </div>
                                <div className="section3">
                                    <h4 className='h4'>O'QILMAGAN</h4>
                                </div>
                                <div className="section4">
                                    <img className='img' src="https://t4.ftcdn.net/jpg/05/77/84/55/360_F_577845594_EovUzhXih8CbtkW7K81hB8Aqw1VB7H1Y.jpg" alt="img" />
                                    <h5 className='h5'>Barchasini o'qidingiz!</h5>
                                </div>
                                <div className="section5">
                                    <h4 className='h4'>O'qilgan</h4>
                                </div>
                                <div className="section6">
                                    <img className='img1' src="https://t4.ftcdn.net/jpg/05/77/84/55/360_F_577845594_EovUzhXih8CbtkW7K81hB8Aqw1VB7H1Y.jpg" alt="img" />
                                    <div className="box">
                                        <span className='name'>sunnat</span>
                                        <br />
                                        <span className='text'>fmfkrfrkfr</span>
                                        <br />
                                        <span className='message'>eded</span>
                                    </div>
                                    <div className="box2">
                                        <span className='data'>24.01</span>
                                        <br />
                                        <i class="fa-regular fa-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="page2">
                                <div className="box1">
                                    <img className='img1' src="https://img.favpng.com/22/14/20/computer-icons-user-profile-png-favpng-t5jjbVtARafBFMz6SeBYs6wmS.jpg" alt="img" />
                                    <h6 className='name'>sunnat</h6>
                                    <div className="icon">
                                        <i class="fa-regular fa-bookmark"></i>
                                        <i class="fa-sharp fa-solid fa-ban"></i>
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                                <div className="box2">
                                    <img className='img2' src="https://img.favpng.com/22/14/20/computer-icons-user-profile-png-favpng-t5jjbVtARafBFMz6SeBYs6wmS.jpg" alt="img" />
                                    <div className="malumot">
                                        <small className='text'>hjrfkfdr</small>
                                        <br />
                                        <small className='price'>25536</small>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <div className="message">
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-date'>san</span>
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-text'>mijoz</span>
                                        <span className='message-text'>mijoz</span>
                                    </div>
                                </div>
                                <div className="modal-footerr">
                                    <input name='image' type="file" className="message-file-input" placeholder='reasim' />
                                    <input className='input-message' type="text" placeholder='malumot yozing' />
                                    <button className="send-btn button">send</button>

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

export default Chat
