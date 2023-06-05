import NavigationError from './NavigationError';
import Tags from './Tags.jsx'
import Stars from './Stars.jsx';
import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Fiche.css'
import { Navigate } from 'react-router-dom';

export default function Detail() 
{
        const params = useParams()


        return <div className='' >
                        <NavigationError/>

                        {/*Carrousel*/}
                        {locationsList.filter(person => person.id === params.id).map(filteredPerson => 
                        

                        <div>
                                <div className='bloc-images' key={filteredPerson.id}>
                                        <img src={filteredPerson.pictures[0]} alt="Image de couverture de la location " className='Images'></img>
                                </div>

                                {/* Carrousel */}

                                <div className="bloc-location-loueur">
                                        <div className='bloc-location' id='locab'>
                                                
                                                <h1 key={filteredPerson.id} className='titre'>
                                                {filteredPerson.title}
                                                </h1>
                                                <h2 key={filteredPerson.id} className='titre2'>
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

