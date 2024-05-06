import { createContext, useContext, useEffect, useState } from "react";


import { getAll, getProd } from "../api/getRequests";


const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile") || null)
  );


<<<<<<< HEAD
  const [category, setCategory] = useState([]);
  const [cards, setCards] = useState([])
  const [sub, setSub] = useState([]);
  const [type, setType] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setcurrentChat] = useState(null);
  const [chats, setChats] = useState([]);

  const exit = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

=======
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


>>>>>>> a94cf8e10db9b526e914f3d46c2790351fa51b7f
  useEffect(() => {
    let myFunc = async () => {
      try {
        const resCar = await getAll("car");
        const resWork = await getAll("work");
        const resFashion = await getAll("fashion");
        const resCategory = await getAll("category");
        const resSub = await getAll("sub");
        const resType = await getAll("type");
        setCategory(resCategory?.data?.categorys);
        setSub(resSub?.data?.getAll);
        setType(resType?.data?.getAll);
        setCards([
          ...resCar?.data?.getAll,
          ...resFashion?.data?.getAll,
          ...resWork?.data?.getAll,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    myFunc();
  }, [currentUser]);

  const value = {
    currentUser,
    setCurrentUser,
    exit, category, setCategory,
    sub, setSub,
    type, setType,


    exit,
    cards,
<<<<<<< HEAD
    setCards,


=======
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
>>>>>>> a94cf8e10db9b526e914f3d46c2790351fa51b7f
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};