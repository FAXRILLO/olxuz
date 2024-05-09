import React, {useState, useEffect} from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import OneInfo from "./pages/OneInfo/OneInfo";
import Footer1 from "./pages/Footer/Footer1";
import HomeData from "./pages/HomeData/HomeData";
import Serch from "./pages/Serch/Serch";
import Menyu from "./pages/Menyu/Menyu";
import { ToastContainer } from "react-toastify";
import Rasim from "./pages/Rasim/Rasim";
import Profile from "./pages/Profile/Profile";
import Like from "./pages/Like/Like";
import Cars from "./pages/Cars/Cars";
import Chat from "./pages/Chat/Chat";
import AddProd from "./pages/AddProd/AddProd";
import Elon from "./pages/Elon/Elon";
import Chatbox from "./pages/Chat/Chatbox";


const App = () => {
  const { currentUser } = useInfoContext();
  const [isSignUp, setIsSignUp] = useState(false)
  const path = useLocation().pathname
  
  useEffect(() => {
    const rePath = () => {
      if(path === '/add' && !currentUser || path === '/account' && !currentUser || path === '/my' && !currentUser  || path === '/like' && !currentUser){
        setIsSignUp(true)
      } else {
        setIsSignUp(false)
      }
    }
    rePath()
  }, [path])
  return (

      <div className="app">
        <Routes>
          {/* <Route path="/" element={currentUser ? <Home /> : <SignUp />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/oneinfo/:id" element={<OneInfo />} /> */}
          
          {/* <Route path="/rasim/:id" element={<Rasim />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/elon" element={<Elon />} /> */}
          {/* <Route path="/sobshena" element={<Chatbox />} /> */}

          {/* <Route path="/addProd" element={<AddProd />} /> */}

          {/* <Route path="/like" element={<Like />} /> */}

          {/* <Route path="/cars" element={<Cars />} /> */}

          {/* <Route path="/chat" element={<Chat />} /> */}

          <Route path='/oneinfo/:id' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <OneInfo/>}/>
          <Route path='/rasim/:id' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Rasim/>}/>
          <Route path='/profile' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Profile/>}/>
          <Route path='/elon' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Elon/>}/>
          <Route path='/sobshena' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Chatbox/>}/>
          <Route path='/addProd' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <AddProd/>}/>
          <Route path='/like' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Like/>}/>
          <Route path='/cars' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Cars/>}/>
          <Route path='/chat' element={!currentUser ? <SignUp reset={setIsSignUp}/> : <Chat/>}/>
          
        </Routes>
      </div>
  );
};

export default App;
