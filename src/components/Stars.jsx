import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Stars.css'

export default function Stars() 
{
        const params = useParams()
        
        const found = locationsList.find(element => element.id === params.id);
        
        let tabOrange = ['fa-solid fa-star gray','fa-solid fa-star gray','fa-solid fa-star gray','fa-solid fa-star gray','fa-solid fa-star gray']

        for (let i = 0; i < found.rating; i++)
        {
            tabOrange[i] = 'fa-solid fa-star orange'
        }

        
    return <div className="Bloc-Stars">
                
                {tabOrange.map
                    ((rate,index) =>
                        <i className={rate} key={index}></i>
                    )
                }

            </div> 
}

