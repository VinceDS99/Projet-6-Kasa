import '../styles/Apropos.css'
import Montagne from '../assets/Montagne.png'
import Collapse from './Collapse.jsx'

export default function Apropos() 
{
    return  <div>

                <div className='img-montagne'>
                    <img src={Montagne} alt="Paysage représentant des montagnes" className='Montagne'/>
                </div>

                <div className='apropos'>

                    <Collapse 
                        titre="Fiabilité" 
                        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." 
                        id="FiabilitéID"
                    />

                    <Collapse 
                        titre="Respect" 
                        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
                        id="RespectID"
                    />

                    <Collapse 
                        titre="Service" 
                        description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
                        id="ServiceID"
                    />

                    <Collapse 
                        titre="Sécurité" 
                        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
                        id="SécuritéID"
                    />

                </div>
                
            </div>
}

