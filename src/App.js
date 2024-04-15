import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const App = () => {
  const { currentUser } = useInfoContext();
  return (
    <Router>
      <div className="app">
        <Routes>

        <Route path="/" element={currentUser ? <Home /> : <SignUp />} />  
          
        </Routes>
        <ToastContainer />

      </div>
    </Router>
  );
};

export default App;
