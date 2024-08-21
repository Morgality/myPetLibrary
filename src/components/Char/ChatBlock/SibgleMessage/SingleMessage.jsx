import React from 'react';
import "./SingleMessage.scss"


const SingleMessage = ({login, item}) => {

    if (item.type == '2') {
        return (
            <li id="chat--message">
                <p> <span id={item.user == login ? 'chat--message--username' : 'other--chat--message'} > <strong>{item.user}</strong> </span> присоединился к чату </p>
            </li>
        )
    } else {
        return (
            <li id="chat--message" className={item.user == login ? 'self--message' : 'side--message'} >
                <span id="chat--message--username">{item.user}</span> <span>{item.date}</span>
    
                <p> { item.messageText } </p>
            </li>
        )
    }   

}

export default SingleMessage;