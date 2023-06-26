import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Tags.css'

export default function Tags() 
{
        const params = useParams()
        
        const found = locationsList.find(element => element.id === params.id);
        
    return <div className="Bloc-Tags">
                {found.tags.map
                    ((tag,index) =>
                        <p className="tags" key={index}>{tag}</p>                    
                    )
                }
            </div> 
}

