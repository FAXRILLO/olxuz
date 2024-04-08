import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

const App = () => {
  const { currentUser } = useInfoContext();
  console.log(currentUser);
  return (
    <Router>
      <div className="app">
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
