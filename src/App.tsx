import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Loader from "./components/Loader";
import CartDetails from "./pages/CartDetails";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pokemon" element={<CartDetails />} />
          {/* <Route path="load" element={<Loader />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
