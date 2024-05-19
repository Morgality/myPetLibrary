import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recommendations.scss";
import { SingleRecommendation } from "./SingleRecommendation";
import { getRandomPhoto } from "../../../../../api/getRandomPhoto";
import getRecommendations from "../../../../../api/getRecommendations";
import { Spin } from "antd";
import { PendingSpinner } from "../../../../wrappers/Pending/PendingSpinner";

export const Recommendations = () => {

    const [isPending, setisPending] = useState(true)
    
    const [recList, setRecList] = useState([]);

    useEffect(() => {
        getRecommendations(setRecList);
        setisPending(false)
    } , [])


    return (
        <div className="search-recommendations">
            <h2>Рекомендации</h2>
            <div id={isPending ? "search--recommendations--list--pending" : ""} className="search--recommendations--list">
                { recList.length === 0 ? <PendingSpinner /> :  recList.map(item => {
                    return <SingleRecommendation key={item.id} id={item.id} description={item.name} photo={item.photo} />
                })}
            </div>
        </div>
    )
}