// import { createContext, useContext, useEffect, useState } from "react";
// import { getAll } from "../api/getRequests";

// const InfoContext = createContext();

// export const useInfoContext = () => useContext(InfoContext);

// export const InfoProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("profile")) || null
//   );
//   const [loading, setLoading] = useState(false);
//   const [cards, serCards] = useState([])
//   const [selectProd, setSelectProd] = useState([]);

//   const [category, setCategory] = useState([])
//   const [sub, setSub] = useState([])
//   const [type, setType] = useState([])
//   const [works, setWorks] = useState([])
//   const [onlineUsers, setOnlineUsers] = useState([])
//   const [currentChat, setCurrentChat] = useState(null)
//   const [chats, setChats] = useState([])
//   const [loadingRes, setLoadingRes] = useState(false)
  


//   useEffect(() => {
//     const getCars = async () => {
//       try {
//         const res = await getAll("car")
//         console.log(res);
//         serCards(res.data.getAll)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getCars();
//   }, [currentUser])

//   const exit = () => {
//     localStorage.clear()
//     setCurrentUser(null)
//   }


//   const value = {
//     currentUser,
//     setCurrentUser,
//     loading,
//     setLoading,
//     cards,
//     serCards,
//     selectProd, 
//     setSelectProd,
//     onlineUsers,
//     setOnlineUsers,
//     chats,
//     setChats,
//     currentChat,
//     setCurrentChat,
//     // open,
//     // setOpen,
//     // userInfo,
//     // setUserInfo,
//     // settings,
//     // setSettings,
//     exit, category, setCategory,
//     sub, setSub, type, setType,
//     works, setWorks
//   };
  
  
//   return (
//     <InfoContext.Provider value={value}>
//       <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
//     </InfoContext.Provider>
//   );
// };








/////// maniki


import { createContext, useContext, useEffect, useState } from "react"
import { getProd } from "../api/getRequests"

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)
    const [cards, setCards] = useState([])
    const [category, setCategory] = useState([])
    const [sub, setSub] = useState([])
    const [type, setType] = useState([])
    const [works, setWorks] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [chats, setChats] = useState([])
    const [loadingRes, setLoadingRes] = useState(false)

    const toggleReset = () => setLoadingRes(!loadingRes)
    

    useEffect(()=>{
        const getAllProd = async () => {
            try {
                const resCar = await getProd('car')
                const resWork = await getProd('work')
                const resFashion = await getProd('fashion')
                const resCategory = await getProd('category')
                const resSub = await getProd('sub')
                const resType = await getProd('type')
                setCategory(resCategory?.data?.getAll)
                setSub(resSub?.data?.getAll) 
                setType(resType?.data?.getAll) 
                setWorks(resWork?.data?.getAll)
                setCards([...resCar?.data?.getAll, ...resFashion?.data?.getAll])
            } catch (error) {
                console.log(error);
                if(error?.response?.data.message === 'jwt expired'){
                    exit()
                  }
            }
        }
        getAllProd()
    },[currentUser, loadingRes])

    const exit = () => {
        localStorage.clear()
        setCurrentUser(null)
    }

     const value = {
        currentUser, setCurrentUser, exit,
        cards, setCards, category, setCategory,
        onlineUsers, setOnlineUsers,
        currentChat, setCurrentChat,
        chats, setChats, sub, setSub,
        type, setType, works, setWorks,
        toggleReset
    }

 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}
