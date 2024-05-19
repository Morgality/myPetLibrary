import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {IsOpenChildStatus} from "../../SearchForm"
import { getRandomPhoto } from "../../../../../api/getRandomPhoto";

export const SingleRecommendation = ({id, description}) => {

    const {setOnSearch, onSearch} = useContext(IsOpenChildStatus);

    const [ photo, setProto ] = useState('');

    useEffect(() => {
        setProto(getRandomPhoto())
    } ,[])

    return (
        <Link 
        onClick={() => setOnSearch(false) }
        style={{textDecoration: 'none'}} 
        to={`product/${id}`}>
            <div className="seacrh--recommendations--single">
                <img 
                src={photo} alt="loading" />
                <p id="texxxt"> { description } </p>
            </div>
        </Link>
    )
}