import React, { useState, useEffect } from "react";
import { getCom } from "../../../api/getComments";
import { ChatBlockCommentList } from "./ChatBlockCommentList";
import "./ChatBlock.scss"
import { PendingSpinner } from "../../wrappers/Pending/PendingSpinner";

export const ChatBlock = ()  => {

    const [comments, setComemnts] = useState([]);
    const [filtered, setFiltered] = useState(null)
    const [fetching, setFetching] = useState(true);
    const [page, setPage] = useState(1)

    const states = {
        fetching,
        comments,
        filtered,
        setFiltered,
    }

    useEffect(() => {
        
        getCom(comments, page, setComemnts, setFetching, setPage)

    }, [fetching])

    const getScrolledContent = (e) => {
        if (!(e.target.scrollTop + e.target.offsetHeight < e.target.scrollHeight - 150) && comments.length < 500) {
            setFetching(true)
        }
    }

    useEffect(() => {
        const el = document.querySelector('.ant-drawer-body') || document.querySelector('.product--comments')

        el.addEventListener('scroll', getScrolledContent )

        return function() {
            el.removeEventListener('scroll', getScrolledContent )
        }
    } ,[])

    return (
        <div className="chat--block">
            
            <ChatBlockCommentList states={states}/>
        </div>
    )
}