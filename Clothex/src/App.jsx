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

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Cart/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/cloth/:id" element={<Cloth/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
