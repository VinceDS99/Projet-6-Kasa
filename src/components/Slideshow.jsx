import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Slideshow.css'

export default function Slideshow() 
{
        const params = useParams()        
        const found = locationsList.find(element => element.id === params.id);

        var i = 0

        var taille = found.pictures.length

        var num = i + 1
        var pictures = found.pictures[i]


        function getPictureNext() 
        {            
            i  = i + 1

            if (i === found.pictures.length)
            {
                i = 0
            }

            pictures = found.pictures[i]
            const imgDiv = document.querySelector('#imageCarousel')
            imgDiv.src = pictures

            num = i + 1
            const numDiv = document.querySelector('#numeroImage')
            numDiv.innerHTML = num
        }

        function getPicturePrev() 
        {            
            i  = i - 1
            if (i === -1)
            {
                i = found.pictures.length - 1
            }

            pictures = found.pictures[i]
            const imgDiv = document.querySelector('#imageCarousel')
            imgDiv.src = pictures

            num = i + 1
            const numDiv = document.querySelector('#numeroImage')
            numDiv.innerHTML = num
        }

    return <div className="Bloc-Image">
                <img src={pictures} alt="Logo de Kasa" className='LogoKasa' id="imageCarousel"/>
                
                {taille > 1 && (
                    <div className="Bloc-Fleches" id="arrows">
                        <i className="fa-solid fa-chevron-left" id='arrowLeft' onClick={() => getPicturePrev()}></i>
                        <i className="fa-solid fa-chevron-right" id='arrowRight' onClick={() => getPictureNext()}></i><br></br>
                    </div>
                    )
                }

                <div className="Bloc-Numeros">
                    <span id="numeroImage">{num}</span><span>/{taille}</span>
                </div>
            </div> 
            
}

