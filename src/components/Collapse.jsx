import React from "react"

export default function Collapse(props) 
{

    const ChevronID = props.titre + props.id

    var tab = [0]
    tab.push(props.description)


    var tableau  = []

    if (props.titre == 'Equipements') 
    {
        for (var i = 0; i < tab[1].length;i++) 
        {            
            tableau.push(tab[1][i])
        }
    }

    else
    {
        tableau.push(tab[1])
    }

    var ID = props.id + props.titre


    function Click()
    {
        if (props.titre == 'Equipements')
        {
            const textEquipements = document.querySelectorAll('#' + ID)
            const chev = document.querySelector('#' + ChevronID)
    
            for (var i = 0; i < tableau.length; i++)
            {
                if (textEquipements[i].className == 'textInactif') 
                {
                    textEquipements[i].className = 'textActif'
                    chev.className = 'fa-solid fa-chevron-up'

                    console.log('oui')
                }
        
                else if (textEquipements[i].className == 'textActif')
                {
                    textEquipements[i].className = 'textInactif'
                    chev.className = 'fa-solid fa-chevron-down'  
                    console.log('non')
                }
            }

        }
        else
        {
            const textAutres = document.querySelector('#' + ID)
            const chev = document.querySelector('#' + ChevronID)
            console.log(textAutres)
    
            if (textAutres.className == 'textInactif') 
            {
                textAutres.className = 'textActif'
                chev.className = 'fa-solid fa-chevron-up'
            }
    
            else if (textAutres.className == 'textActif')
            {
                textAutres.className = 'textInactif'
                chev.className = 'fa-solid fa-chevron-down'  
            }
        }

    }

        return  <div className='Title'>
                    <div className='chevron'>
                                <h1 className='titreCollapse'>{props.titre}</h1>
                                <i className="fa-solid fa-chevron-down" id={ChevronID} onClick={() => Click()}></i>
                    </div>
                    <div className='description-collapse'>
                        {tableau.map
                            ((tab,index) =>
                                <p className="textInactif" key={index} id={ID} >{tab}</p>                    
                            )
                        }
                    </div>

                </div>
}

