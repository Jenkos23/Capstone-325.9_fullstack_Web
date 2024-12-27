// import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import FashionPage from "./pages/fashion";
import FashWeather from "./components/FashWeather";
import FashionNews from "./components/FashNews";
import PhotoJokéne from "./pages/photoJokene";
import AboutPage from "./pages/Aboutpage";


function App() {
  

  return (
   
     <Router>
     <Navbar/>

     <Routes>
      <Route path="/" element = {<FashionPage/>}/>
        <Route path="/fashweather" element = {<FashWeather/>}/>
        <Route path="/fashnews" element = {<FashionNews/>}/>
        <Route path="/photos" element = {<PhotoJokéne/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
     </Routes>
     
     </Router>

    
  )
}

export default App