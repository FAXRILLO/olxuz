import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const { currentUser } = useInfoContext();
  console.log(currentUser);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
