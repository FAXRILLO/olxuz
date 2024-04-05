import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const { currentUser } = useInfoContext();
  console.log(currentUser);
  return (
<<<<<<< HEAD
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};
=======
    <div className='app'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
>>>>>>> ab0f254dd35ea662c53dd7cdf7d8c608d4bc4731

export default App;
