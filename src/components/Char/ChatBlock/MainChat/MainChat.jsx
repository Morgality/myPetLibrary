import React, { useState, useEffect, useRef } from "react";
import "../ChatBlock.scss";
import { Button, Input } from "antd";
import { PendingSpinner } from "../../../wrappers/Pending/PendingSpinner";
import Sumbit from "../../../../../public/img/Chat/Sumbit.svg";
const { TextArea } = Input;
import SingleMessage from "../SibgleMessage/SingleMessage";

export const MainChat = ({login})  => {

    const wsRef = useRef();

    const scrollRef = useRef();

    const [isOnline, setOnline]=  useState(false);

    const [error, setError] = useState(false);

    const [messages, setMessages] = useState([]);

    const [messageText, setMessageText] = useState('');

    useEffect(() => {

        wsRef.current = new WebSocket(`ws://localhost:8080`);

        wsRef.current.onopen = () => {

            setOnline(true)

            wsRef.current.send(JSON.stringify({
                type: '2',
                user: login ? login : 'anonim',
                messageText : '',
                date : new Date(),
                id : crypto.randomUUID()
            }))

        }

        wsRef.current.onmessage = async (event) => {

            const inputMessage = await JSON.parse(event.data)

            setMessages(prev => [...prev, inputMessage])

            console.log(JSON.parse(event.data))
        }

        wsRef.current.addEventListener('error', () => {

            setError(true)

        })



    }, [])

    useEffect(() => {
        
        scrollRef.current.scrollBy(0, scrollRef.current.scrollHeight)

    }, [messages])

    function sumbitMessage() {
        wsRef.current.send(JSON.stringify({
            type: '1',
            user: login ? login : 'anonim',
            messageText : messageText,
            date : new Date(),
            id : crypto.randomUUID()
        }))
    }


    return (
        <div className="chat-basement">

            <div className="messages-block">
                <div ref={scrollRef} className="chat--scroll">

                    <ul id="message--list">
                        <li id="chat--message" ref={audioRef}>
                            <span id="chat--message--username">username</span> <span> 20240514 </span>

                            <p> MessageMessageMessageMessageMessageMessageMessageMessageMessage </p>

                            
                        </li>

                        { messages.map(item => {
                            return (
                                <SingleMessage login={login} item={item} />
                            )
                        }) }
                        
                    </ul>
                
                </div>
                
            </div>

            <div className="chat-input-block">
                <TextArea prefix={'1'} 
                    placeholder="Введите текст сообщения" 
                    value={messageText} 
                    onChange={e => setMessageText(e.target.value)} 
                    style={{resize:'none'}}
                />

                <Button onClick={sumbitMessage} type="primary" style={{display:'flex', height: '100%'}}>
                    <img style={{pointerEvents:'none'}} height="100%" src={Sumbit} alt=""/>
                </Button>
            </div>
        </div>
    )

}