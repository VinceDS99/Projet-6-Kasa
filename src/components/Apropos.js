import '../styles/Apropos.css'
import Paysage2 from '../assets/Paysage2.png'


export default function Apropos() 
{
    return  <div>

                <div className='img-paysage'>
                    <img src={Paysage2} alt="Paysage en bord de mer" className='paysage2'/>
                </div>




                <div className='apropos'>
                    <div className='Fiabilite'>
                        <div className='chevron'>
                            <h1 className='titre'>Fiabilité</h1>
                            <i class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down" ></i>
                        </div>
                        <p className=''></p>
                    </div>
    
                    <div className='Respect'>
                        <div className='chevron'>
                            <h1 className='titre'>Respect</h1>
                            <i class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down" ></i>
                        </div>
                        <p className=''></p>
                    </div>
    
                    <div className='Service'>
                        <div className='chevron'>
                            <h1 className='titre'>Service</h1>
                            <i class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down" ></i>
                        </div>
                        <p className=''></p>
                    </div>
    
                    <div className='Securite'>
                        <div className='chevron'>
                            <h1 className='titre'>Sécurité</h1>
                            <i class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down" ></i>
                        </div>
                        <p className=''></p>
                    </div>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>



            </div>
}

