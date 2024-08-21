import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChatBlock.scss"
import LoginPage from "./LoginPage/LoginPage";
import { MainChat } from "./MainChat/MainChat";

export const ChatBlock = ()  => {

    const [login, setLogin] = useState(localStorage.getItem('login') || 'anonim')

    const [chatEnter, setChatEnter] = useState(false);

    
    // if (error) {
    //     return (
    //         <div className="chat-basement-error">
    //             <span id="error--warning">
    //                 Chat is not avaliable, please try lather
    //             </span>
    //         </div>
    //     )
    // }

    if (chatEnter) {
        return <MainChat login={login} />
    }

    return (
        <div className="chat-basement">

            <LoginPage setChatEnter={setChatEnter} setLogin={setLogin} login={login} />

        </div>
    )

}