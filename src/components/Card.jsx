import { locationsList } from '../datas/Annonces'
import '../styles/Accueil.css'
import {Link} from "react-router-dom"

export default function Card() 
{
	return <div className='loc' id='accueil'>
                    {locationsList.map((loc) => 
                        (
                            <div className='loc-item' key={loc.id}>
                                <img src={loc.cover} alt="Image de l'annonce" className='img-location' ></img>
                                <Link to={"Fiche/" + loc.id}  className='loc-text'>
                                    {loc.title}
                                </Link>
                            </div>
                        ))
                    }
            </div>

}
