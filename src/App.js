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
<<<<<<< HEAD
import AddElon from "./pages/AddElon/AddElon";
=======
import Like from "./pages/Like/Like";
>>>>>>> c6871e92c2bcdaa36a413a3e103dc3860b6223c1


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
<<<<<<< HEAD
          <Route path="/addElon" element={<AddElon />} />
=======
          <Route path="/like" element={<Like />} />
>>>>>>> c6871e92c2bcdaa36a413a3e103dc3860b6223c1
          
          
        </Routes>
        <ToastContainer />

      </div>
    </Router>
  );
};

export default App;
