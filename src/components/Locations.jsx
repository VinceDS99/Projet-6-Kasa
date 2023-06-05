import { locationsList } from '../datas/Annonces'
import '../styles/Locations.css'
import {Link} from "react-router-dom"

function Locations() {



	return (
        <div>
            <div className='img-paysage'>
                <span className='paysage-text'>Chez vous, partout et ailleurs</span>
            </div>
            
            <div className='loc' id='accueil'>
                    {locationsList.map((loc) => 
                        (
                            <div className='loc-item'>
                                <img src={loc.cover} alt="Image de l'annonce" className='img-location'></img>
                                <Link to={"Fiche/" + loc.id} key={loc.id} className='loc-text'>
                                    {loc.title}
                                </Link>
                            </div>
                        ))
                    }
            </div>
        </div>
	)
}

export default Locations