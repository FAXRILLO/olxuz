import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useInfoContext } from "../../context/Context";
import { io } from "socket.io-client";
import {userChats} from "../../api/chatRequest"
import "./Chat.scss"
import { deleteAll, getAllUsers,getUser } from "../../api/deleteRequests";
import Userlar from '../Userlar/Userlar';
import Message from '../Message/Message';
const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io(serverUrl);


const Chat = () => {
    const {chats, exit, setChats, currentUser,  currentChat, setCurrentChat, setOnlineUsers} = useInfoContext()
    const [sendMessage, setSendMessage] = useState(null);
    const [answerMessage, setAnswerMessage] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [socketDel, setSocketDel] = useState(false);
    const [chat, setChat] = useState(0);

    
    useEffect(()=>{
        const getchats = async () => {
          try {
            const res = await userChats()
            setChats(res?.data.chats);
          } catch (error) {
            console.log(error);
            if(error?.response?.data.message === 'jwt expired'){
              exit()
            }
          }
        }
        getchats()
      },[currentUser._id, loading])
    
      useEffect(() => { 
        socket.emit("new-user-added", currentUser._id); 
     
        socket.on("get-users", (users) => { 
          setOnlineUsers(users); 
        }); 
      }, [currentUser._id,]); 
     
      useEffect(() => { 
        if (sendMessage !== null) { 
          socket.emit("send-message", sendMessage); 
        } 
        socket.on("answer-message", (data) => { 
          setAnswerMessage(data); 
        }); 
      }, [sendMessage]); 
     
      useEffect(() => {
        if(deleted && socketDel){
          setSocketDel(false)
          socket.emit('delete-message')
        }
        socket.on('deleted', () => {
          setDeleted(!deleted)
        })
      }, [deleted]);
    
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
                                    {chats?.length > 0 ? (
                                        chats.map((chat) => {
                                        return (
                                            <div
                                                onClick={() => setCurrentChat(chat)}
                                                key={chat._id}
                                                className="chat-item"
                                            >
                                                <Userlar chat={chat} />
                                            </div>
                                        );
                                        })
                                    ) : (
                                        <h3>Chats not found!</h3>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="page2">
                            {currentChat ? (
                                <Message
                                    setSendMessage={setSendMessage}
                                    answerMessage={answerMessage}
                                />
                                ) : (
                                <>
                                    <h2 className="chat-title">Chat yo' vashe qo'sh</h2>
                                </>
                                )}
                                
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
