import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const { currentUser } = useInfoContext();
  console.log(currentUser);
  return (
    <div className="app">
      <h1>Kkkkk</h1>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
};

export default App;
