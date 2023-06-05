import React from "react"

export default function Collapse(props) 
{
    const ID = props.id
    const ChevronID = props.titre + props.id

    function Click()
    {
        const text = document.querySelector('#' + ID)
        const chev = document.querySelector('#' + ChevronID)

        if (text.className == 'textInactif') 
        {
            text.className = 'textActif'
            chev.className = 'fa-solid fa-chevron-up'
        }

        else if (text.className == 'textActif')
        {
            text.className = 'textInactif'
            chev.className = 'fa-solid fa-chevron-down'            
        }
    }

        return  <div className='Title'>
                    <div className='chevron'>
                                <h1 className='titreCollapse'>{props.titre}</h1>
                                <i class="fa-solid fa-chevron-down" id={ChevronID} onClick={() => Click()}></i>
                    </div>
                            <p className='textInactif' id={props.id}>{props.description}</p>
                </div>
}

