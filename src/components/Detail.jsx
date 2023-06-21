import NavigationError from './NavigationError';
import Tags from './Tags.jsx'
import Stars from './Stars.jsx';
import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import Slideshow from './Slideshow.jsx';
import '../styles/Fiche.css'

export default function Detail() 
{
        const params = useParams()

        return <div className='' >

                        <NavigationError/>

                        <Slideshow/>
                        
                        {locationsList.filter(person => person.id === params.id).map(filteredPerson => 
                        <div>
                                <div className="bloc-location-loueur" >
                                        <div className='bloc-location' id='locab'>
                                                <h1 className='titre'>
                                                {filteredPerson.title}
                                                </h1>
                                                <h2 className='titre2'>
                                                {filteredPerson.location}
                                                </h2>
                                                <Tags/>
                                        </div>
                                        
                                        <div className='bloc-loueur'>
                                                <div className='loueur'>
                                                        <p className='name'>
                                                                {filteredPerson.host.name}
                                                        </p>
                                                        <img src={filteredPerson.host.picture} alt='Photo de profil du loueur' className='photo-profil'></img>
                                                </div>
                                                <div className='star'>
                                                        <Stars></Stars>
                                                </div>
                                        </div>
                                </div>
                        </div>                        
                        )
                        }  
                        

                        
                        
		</div>
}

