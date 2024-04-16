import React, { useEffect } from "react";

export const SingleSearchResult = ({title}) => {

    return (
        <li className="search--result">
            <div className="description">
                <span style={{
                    display: 'block',
                    fontSize: '20px'
                }}> {title} </span>
                <p> {title} </p>
            </div>
            <div className="photos">
                Фотографии
            </div>
        </li>
    )
}