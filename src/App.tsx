import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./dist/css/index.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import NoPage from "./pages/NoPage/NoPage";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
