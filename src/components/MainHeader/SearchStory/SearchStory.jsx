import React, { useState } from "react";
import "./SearchStory.scss"
import Link from "antd/es/typography/Link";

export const SearchStory = () => {
    
    const [story, setStory] = useState(
        localStorage.getItem('story') ? localStorage.getItem('story').split(',') : null
    )

    if (story) return (

        <>
        <div className="stroy--header">
            <h3>История</h3>
            <span onClick={() => {
                localStorage.clear()
                setStory([])
            }}>Очистить</span>
        </div>

        <ul style={{padding: '0'}}>
            {
                story.map(item => {
                    return (
                        <li id="search--story--point"> <a href={`/search/${item}`} >&#128337; { item }</a> </li>
                    )
                })
            }
        </ul></>
    )

    return <p>Нет истории</p>
}