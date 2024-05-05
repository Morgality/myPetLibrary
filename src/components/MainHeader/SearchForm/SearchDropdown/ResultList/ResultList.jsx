import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ResultList.scss"
import { Spin } from "antd";
import { SingleRecommendation } from "../Recommendations/SingleRecommendation";

export const ResultList = ({searchReq}) => {
    
    const [fullData, getFullData] = useState([]);

    const [isFetching, setFetching] = useState(true);

    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        setFetching(true)
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => {
            getFullData(res.data)
            setFetching(false)
        })
    } ,[]);

    useEffect(() => {
        setFetching(true)
        setTimeout(() => {
            setSearchRes(fullData.filter(item => item.name.toLocaleLowerCase().includes(searchReq.trim().toLocaleLowerCase())))
            setFetching(false)
        }, 300)
    }, [searchReq]);

    if (isFetching) {
        return (
            <div className="search--list" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Spin />
            </div>
        )
    }

    return (
        <div className="result--list" id={searchReq.trim().length < 1 ? '' : 'single--search--result'}>
                { searchRes.slice(0, 6).map(item => <SingleRecommendation id={item.id} description={item.name} /> ) }
        </div>
    )
}