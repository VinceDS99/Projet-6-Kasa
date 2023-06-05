import React  from "react";
import { useParams } from "react-router-dom"
import { locationsList } from '../datas/Annonces'
import { Navigate } from 'react-router-dom';

export default function NavigationError() 
{
        const params = useParams()


        const found = locationsList.find(element => element.id === params.id);

        if (found == undefined) 
        {
                return <Navigate to="/ID-Incorrect" />;
        }

        return 
}

