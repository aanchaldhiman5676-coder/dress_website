import React from "react";
import Home from "./Component/Home";
import Mens from "./Component/Mens";
import Womens from "./Component/Womens";
import Kids from "./Component/Kids";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Login from './Component/Login';
import Success from "./Component/Success";
import CartPage from "./pages/CartPage";
import Extra from "./Component/Extra";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Extra/><Home /></>} />

        <Route path='/mens' element={<Mens />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/about' element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Success" element = {<Success/>}  />
        <Route path="/Cart" element={<CartPage />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
