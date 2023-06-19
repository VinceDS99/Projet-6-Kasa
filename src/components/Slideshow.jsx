import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import '../styles/Slideshow.css'

export default function Slideshow() 
{
        const params = useParams()        
        const found = locationsList.find(element => element.id === params.id);

        var i = 0

        if ( found == undefined )
        {
            return
        }
        else
        {
            var pictures = found.pictures[i]
        }


        var taille = found.pictures.length




            var left = document.getElementById('arrows')
            const right = document.querySelector('#arrowRight')
            const iv = document.querySelector('i')

            console.log(iv)
            console.log(left)
            console.log(right)

            console.log('fonction length activé')
            if ( taille == 1 )
            {
                console.log('1 image')

            } 
        




        var num = i + 1

        function getPictureNext() 
        {            
            i  = i + 1

            if (i == found.pictures.length)
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

            if (i == -1)
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
                
                <div className="Bloc-Fleches" id="arrows">
                    <i class="fa-solid fa-chevron-left" id='arrowLeft' onClick={() => getPicturePrev()}></i>
                    <i class="fa-solid fa-chevron-right" id='arrowRight' onClick={() => getPictureNext()}></i><br></br>
                </div>
                <div className="Bloc-Numeros">
                    <span id="numeroImage">{num}</span><span>/{taille}</span>
                </div>
            </div> 
}

