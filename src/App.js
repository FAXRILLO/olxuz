import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


const App = () => {
  const { currentUser } = useInfoContext();
  return (

    
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <SignUp />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/oneinfo/:id" element={<OneInfo />} />
          <Route path="/rasim/:id" element={<Rasim />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/addProd" element={<AddProd />} />

          <Route path="/like" element={<Like />} />

          <Route path="/cars" element={<Cars />} />

          <Route path="/chat" element={<Chat />} />

          
          
        </Routes>
        <ToastContainer />

      </div>
    </Router>
  );
};

export default App;
