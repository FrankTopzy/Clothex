import { Route, Routes } from "react-router-dom"
import './index.css'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Contact from "./Pages/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Shop from "./Pages/Shop/Shop"
import Favorite from "./Pages/Favorites/Favorite"

function App() {

  return (
    <div className="app">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
