import Header from './components/Banner'
import Accueil from './pages/Accueil'
import Fiche from './pages/Fiche'
import Footer from './components/Footer'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import {Routes, Route} from "react-router-dom"

function App() 
{
    return (
		<div className="AppDiv">
			<Header/>
			<Routes>
				<Route path="/" element={<Accueil/>} />
				<Route path="/Fiche/:id" element={<Fiche/>} />
				<Route path="/A-propos" element={<Apropos/>} />
				<Route path="/*" element={<Error/>} />
			</Routes>
			<Footer/>
		</div>
	)
}

export default App