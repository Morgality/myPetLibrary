import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { SingleComment } from "./SingleComment";
import { PendingSpinner } from "../../wrappers/Pending/PendingSpinner";

export const ChatBlockCommentList = ({states}) => {

    const {fetching, comments, filtered, setFiltered} = states;

    const showComments = () => {

        return comments.map(item => {
            return <SingleComment key={item.id} item={item} />
        })

    }


    return (
        <div className="chat--story--list">
            
            <ul style={{width: '100%'}}>
                { comments.length === 0 ? 
                <div style={{display: 'flex', justifyContent: 'center'}}><Spin style={{margin: '10px'}}/></div> : 
                showComments() }
                { fetching && comments.length > 0 && comments.length < 500 ? <PendingSpinner /> : null }
            </ul>

        </div>
    )
}