import { createContext, useContext, useEffect, useState } from "react";
import { getAll } from "../api/getRequests";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );
  const [loading, setLoading] = useState(false);
  const [cards, serCards] = useState([])
  const [selectProd, setSelectProd] = useState([]);


  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [settings, setSettings] = useState(false);
  
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const exit = () => {
    localStorage.clear();
    setCurrentUser(null);
    setCurrentChat(null);
  };


  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await getAll("car")
        console.log(res);
        serCards(res.data.getAll)
      } catch (error) {
        console.log(error);
      }
    }
    getCars();
  }, [currentUser])


  const value = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    cards,
    serCards,
    selectProd, 
    setSelectProd,
    onlineUsers,
    setOnlineUsers,
    chats,
    setChats,
    currentChat,
    setCurrentChat,
    open,
    setOpen,
    userInfo,
    setUserInfo,
    settings,
    setSettings,
    exit,
    serverUrl
  };
  
  
  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};
