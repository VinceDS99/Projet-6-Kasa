import Header from './Header'
import Locations from './Locations'
import Fiche from './Fiche'
import Footer from './Footer'
import Error from './Error'
import Apropos from './Apropos'
import {Routes, Route} from "react-router-dom"

function App() 
{
    return (
		<div>
			<Header/>
			<Routes>
				<Route path="/" element={<Locations/>} />
				<Route path="/Fiche/:id" element={<Fiche/>} />
				<Route path="/A-propos" element={<Apropos/>} />
				<Route path="/*" element={<Error/>} />
			</Routes>
			<Footer/>
		</div>
	)
}

export default App