import { Route, Routes } from "react-router-dom"
import './index.css'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Contact from "./Pages/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Shop from "./Pages/Shop/Shop"
import Favorite from "./Pages/Favorites/Favorite"
import Cloth from "./Pages/ClothPage/Cloth"
import Cart from "./Components/Cart/Cart"
import MiniNavbar from "./Components/Responsive-navbar/navbar"
import About from "./Pages/AboutPage/About"
import Store from "./Pages/Store/Store"
import Login from "./Pages/Login/Login"
import { useEffect, useState } from "react"
import Payment from "./Pages/Payment/Payment"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const connection = navigator.connection;

    if (connection) {
      console.log(connection.effectiveType);

      if (
        connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g"
      ) {
        console.log("Bad network");
      }
    } else {
      console.log("Network API not supported");
    }
  }, []);

  return (
    <div className="app">
      <Navbar/>
      <Cart/>
      <MiniNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/cloth/:id" element={<Cloth/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/clothexPay" element={<Payment/>}/>
      </Routes>
  
      <Footer/>
    </div>
  )
}

export default App
