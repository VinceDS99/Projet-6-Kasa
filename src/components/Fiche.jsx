import React from 'react';
import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Fiche.css'
import Detail from './Detail.jsx'
import Collapse from './Collapse.jsx'


export default function Fiche() {
    

    const params = useParams()

	return (
        
    <div className='' >
                <Detail/>

                    

                    {locationsList.filter(person => person.id === params.id).map(filteredPerson => 
                    (

                        <div>


                            <div>
                                <div className="bloc-location-loueur">
                                    <div className='bloc-location' id='locab'>
                                        
                                    </div>
                                    
                                    <div className='bloc-loueur'>

                                        

                                        
                                    </div>
                                </div>


                                <div className='description-equipements'>
                                        <Collapse 
                                            id ="DescriptionID" 
                                            titre ="Description" 
                                            description ={filteredPerson.description}
                                        />

                                        <Collapse 
                                            id ="EquipementsID" 
                                            titre ="Equipements" 
                                            description ={filteredPerson.equipments}
                                        />
                                </div>
        


                            </div>
                        </div>
                    ))}                



		</div>



	)
    
}    
