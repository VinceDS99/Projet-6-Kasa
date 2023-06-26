import React from 'react';
import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Fiche.css'
import Detail from '../components/Detail.jsx'
import Collapse from '../components/Collapse.jsx'

export default function Fiche() {
    
    const params = useParams()

	return (
        
    <div className='' key={params.id}>
                <Detail/>
                    {locationsList.filter(person => person.id === params.id).map((filteredPerson,index) => 
                    (
                        <div  key={index}>
                            <div>
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
                    ))
                    }                
		</div>
	)
}    
