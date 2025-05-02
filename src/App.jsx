import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Collections from './Pages/Collections';
import Contact from './Pages/Contact';
import Orders from './Pages/Orders';
import Placeorder from './Pages/Placeorder';
import Cart from './Pages/Cart';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar/>
      <SearchBar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Collections" element={<Collections/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Product/:productId" element={<Product/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Placeorder" element={<Placeorder/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App