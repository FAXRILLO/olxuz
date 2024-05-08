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

  const [category, setCategory] = useState([])
  const [sub, setSub] = useState([])
  const [type, setType] = useState([])
  const [works, setWorks] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [chats, setChats] = useState([])
  const [loadingRes, setLoadingRes] = useState(false)
  


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

  const exit = () => {
    localStorage.clear()
    setCurrentUser(null)
  }


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
    // open,
    // setOpen,
    // userInfo,
    // setUserInfo,
    // settings,
    // setSettings,
    exit, category, setCategory,
    sub, setSub, type, setType,
    works, setWorks
  };
  
  
  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};
