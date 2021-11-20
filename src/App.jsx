import React from "react";
import AppBar from "./components/AppBar";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cast from "./screens/Cast";
import About from "./screens/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
