import logo from '../assets/Logo.png'
import '../styles/Header.css'
import {Link} from "react-router-dom"

function Header() 
{
        return <header className="header">

                <div className="header-bloc" >
                        <img src={logo} alt="Logo de Kasa"/>
                        <nav className="nav">
                                <Link to="/" className="nav-text">Accueil</Link>
                                <Link to="/A-propos" className="nav-text">A propos</Link>
                        </nav>
                </div>

                </header>
}

export default Header