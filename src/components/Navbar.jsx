import { Link } from "react-router-dom";
import '../styles/navbar.css'



export default function Navbar(){
    return(
        <div >
            
            <nav className="navbar">
                <Link to= "/">Fashion</Link>
                <Link to = "/fashnews" >Fash_News</Link>
                <Link to = "/about">About</Link>
                <Link to = "/photos">PhotoJokéne</Link>
                <Link to = "/fashweather">Fash_Weather</Link>
            </nav>

        </div>
    )
}