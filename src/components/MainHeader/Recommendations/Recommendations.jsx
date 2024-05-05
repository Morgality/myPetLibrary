import React from "react";
import { SingleRecommendation } from "./SingleRecommendation/SingleRecommendation";

export const Recommendations = () => {
    return (
        <div className="recommmend--block">
            <span style={{
                fontWeight: 'bold',
                fontSize: '24px',
                display: 'block'
            }}>Рекомендации</span>
            
            <div className="recommmend--block--cards">
            <SingleRecommendation />
            </div>

        </div>
    )
}