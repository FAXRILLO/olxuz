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

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await getAll("car")
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
  };
  
  
  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};
