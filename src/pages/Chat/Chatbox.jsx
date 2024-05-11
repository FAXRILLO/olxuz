import React, { useEffect, useState } from 'react'
import "./Chat.scss"
import { useInfoContext } from "../../context/Context";
import { io } from "socket.io-client";
import {userChats} from "../../api/chatRequest"
import "./Chat.scss"
import Userlar from '../Userlar/Userlar';
import { Link } from 'react-router-dom'
import Message from '../Message/Message';
const serverUrl = process.env.REACT_APP_SERVER_URL;
const socket = io(serverUrl);

const Chatbox = () => {
    const {chats, exit, setChats, currentUser,  currentChat, answerMessage, setCurrentChat, setOnlineUsers, sendMessage, setSendMessage} = useInfoContext()

    const [asnwerMessage, setAnswerMessage] = useState(null)
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
          if(error?.response?.data.message === 'jwt expired'){
            exit()
          }
        }
      }
      getchats()
    },[currentUser._id])
  
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
    }, [sendMessage]); 

    useEffect(() => { 
      socket.on("answer-message", (data) => { 
        setAnswerMessage(data); 
      }); 
    }, [answerMessage]); 
   
    useEffect(() => {
      if(deleted && socketDel){
        setSocketDel(false)
        socket.emit('delete-message')
      }
      socket.on('deleted', () => {
        setDeleted(!deleted)
      })
    }, []);
  return (
    <div className="box2">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
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
                                  {chats?.length > 0 ? chats.map(chat => {
                                    return (<div  className="chats" onClick={() => {setCurrentChat(chat); setChat(1)}} key={chat._id}>
                                      <Userlar chat={chat} loading={loading}/>
                                    </div>
                                      )
                                    }) : <div className='not-acc'>
                                        <h2 className='bbb'>hali hich kim bilan gaplashmagansiz</h2>
                                    </div>}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                        <div className={chat === 1 ? 'message-box' : 'message-box message-none'}>
                        <Message asnwerMessage={asnwerMessage} setSendMessage={setSendMessage} sendMessage={sendMessage}  setPage={setChat} setSocketDel={setSocketDel} deleted={deleted} setDeleted={setDeleted} loading={loading} setLoading={setLoading}/>
                      </div>
                        </div>
                    </div>
                </div>
  )
}

export default Chatbox
