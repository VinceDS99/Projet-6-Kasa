import React from 'react';
import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Fiche.css'


export default function Fiche() {

    const params = useParams()
    console.log(params)


    var countTags = 0
    {
        {locationsList.filter(person => person.id === params.id).map(filteredPerson => 
            (
                countTags = filteredPerson.tags.length
            ))}
        console.log(countTags)
    }

    var countImages = 0
    {
        {locationsList.filter(person => person.id === params.id).map(filteredPerson => 
            (
                countImages = filteredPerson.pictures.length
            ))}
        console.log(countImages)
    }



	return (
        
    <div className='' >
    

                    {locationsList.filter(person => person.id === params.id).map(filteredPerson => 
                    (
                        
                        <div>
                            <div className='bloc-images' key={filteredPerson.id}>
                                <img src={filteredPerson.pictures[0]} alt="Image du " className='Images'></img>
                            </div>

                            <div>
                                <div className="bloc-location-loueur">
                                    <div className='bloc-location'>
                                        <h1 key={filteredPerson.id} className='titre'>
                                            {filteredPerson.title}
                                        </h1>
                                        <h2 key={filteredPerson.id} className='titre2'>
                                            {filteredPerson.location}
                                        </h2>

                                        <p className='tags'>{filteredPerson.tags}</p>
                                    </div>
                                    
                                    <div className='bloc-loueur'>
                                        <p className='name'>
                                            {filteredPerson.host.name}
                                        </p>

                                        

                                        <img src={filteredPerson.host.picture} alt='Photo de profil du loueur' className='photo-profil'></img>
                                        <div className='star'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>


                                <div className='description-equipements'>
                                    <section >
                                    <h1 className='des-equi'>Description</h1>
                                    <div className='description'><p className='desequi-p'>{filteredPerson.description}</p></div>
                                    </section>  

                                    <section>
                                    <h1 className='des-equi'>Equipements</h1>
                                    <div className='equipements'><p className='desequi-p'>{filteredPerson.equipments}</p></div>
                                    
                                    </section>

                                </div>
                            </div>
                        </div>
                    ))}                



		</div>



	)
    
}    
