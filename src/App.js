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

const App = () => {
  const { currentUser } = useInfoContext();
  console.log(currentUser);
  return (
    <Router>
      <div className="app">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/oneinfo" element={<OneInfo />} />

          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
