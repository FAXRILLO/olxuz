import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useInfoContext } from "../../context/Context";
import { io } from "socket.io-client";
import {userChats} from "../../api/chatRequest"
import "./Chat.scss"
import Userlar from '../Userlar/Userlar';
import { Link } from 'react-router-dom'
import Message from '../Message/Message';
import Chatbox from './Chatbox';
import Elon from '../Elon/Elon';
const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io(serverUrl);


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
                        <button className='sman1'><Link to={"/elon"}>E'lonlar</Link></button>
                        <button className='sman1'>Sobshena</button>
                        <button className='sman1'><Link to={"/"}>Xabarlar</Link></button>
                        <button className='sman1'><Link to={"/"}>To‘lovlar va OLX hisobi</Link></button>
                        <button className='sman1'><Link to={"/"}>Nomzod profili</Link></button>
                        <button className='sman1'><Link to={"/"}>Sozlamalar</Link></button>
                    </div>
                </div>
                <Chatbox />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Chat
