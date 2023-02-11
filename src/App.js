import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="about" element={<About></About>} />
          <Route path="cocktails/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
