import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./Elon.scss"
import { Link } from 'react-router-dom'

const Elon = () => {
  return (
    <div className='elon'>
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
                        <button className='sman1'><Link to={"/chat"}>Sobshena</Link></button>
                        <button className='sman1'><Link to={"/"}>Xabarlar</Link></button>
                        <button className='sman1'><Link to={"/"}>To‘lovlar va OLX hisobi</Link></button>
                        <button className='sman1'><Link to={"/"}>Nomzod profili</Link></button>
                        <button className='sman1'><Link to={"/"}>Sozlamalar</Link></button>
                    </div>
                </div>
                <div className="box2">
                    <span className='span1_1'>Faol</span>
                    <span className='span1_1'>Kutayotgan</span>
                    <span className='span1_1'>To'lanmagan</span>
                    <span className='span1_1'>Nofaol</span>
                    <span className='span1_1'>Rad etilgan</span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Elon
