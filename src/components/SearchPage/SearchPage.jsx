import React, { useEffect, useState } from "react";
import "./SeachPAge.scss"
import { useParams } from "react-router-dom";
import { ResultList } from "./ResultList";


export const SearchPage = () => {

    const [result, setResult] = useState([])

    const params = useParams().request.toLocaleLowerCase()

    useEffect( () => {
        const currentStory = localStorage.getItem('story').split(',')

        localStorage.setItem('story', [...currentStory, params])
    } ,[])


    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/albums?_limit=50').then(res => res.json())
            .then(res => {
                setResult(
                    res.filter(item => {
                        return item.title.toLocaleLowerCase().includes(params)
                    })
                )
            })
    } ,[])

    return (
        <div className="search--page">
            <ul className="search--list">
                { result.length === 0 ? 'Товар не найден' : <ResultList result={result} /> }
            </ul>
        </div>
    )
}