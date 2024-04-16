import React, { useEffect } from "react";

export const SingleComment = ({item, ...props}) => {

    const star = [];

    for (let i = 0; i < item.stars; i++) {
        star.push(<span> &#9734; </span>)
    }

    return (
        <li className="chat--story--message" key={item.id}> 
            <div className="chat--story--message--title" style={{margin:'0'}}>
                <h4> 
                    { item.user?.username ? item.user?.username : 'Anonim' } 
                </h4>
                <p>
                    { star.map(item => {
                        return item
                    }) }
                </p>
            </div>

            <div className="chat--story--message--body" style={{margin:'0'}}>
                <p>
                    { item.body } 
                </p>
            </div>
        </li>
    )
}