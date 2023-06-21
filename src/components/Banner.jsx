import logo from '../assets/Logo.png'
import '../styles/Banner.css'
import {Link} from "react-router-dom"

export default function Header() 
{
        return <header className="header">

                <div className="header-bloc" >
                        <img src={logo} alt="Logo de Kasa" className='LogoKasa'/>
                        <nav className="nav">
                                <Link to="/" className="nav-text">Accueil</Link>
                                <Link to="/A-propos" className="nav-text">A propos</Link>
                        </nav>
                </div>

                </header>
}

