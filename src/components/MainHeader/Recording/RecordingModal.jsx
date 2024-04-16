import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import "./RecordingModal.scss"
import micro from "../../../../public/img/Main/Microphone.svg"

const RecordingModal = ({isModalOpen, setIsModalOpen, searchReq ,setsearchReq}) => {

  const [recording, setRecording] = useState(false)

      
  function startRecording() {

    setRecording(true)

    setsearchReq('')

    const recognition = new webkitSpeechRecognition()

    const grammar = "#JSGF V1.0; grammar colors; public <color> = ";

    const speechRecognitionList = new webkitSpeechGrammarList()

    speechRecognitionList.addFromString(grammar, 1);

    recognition.grammar = speechRecognitionList

    recognition.lang = 'ru-RU'

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function (event) {
        setsearchReq(event.results[0][0].transcript)

        setIsModalOpen(false)
    };
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal footer={[]} 
      title={recording ? "Произнесите запрос" : "Нажмите на микрофон"}
      style={{ display: 'flex', justifyContent: 'center' }} 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}>

        <div className="micro--modal"
            style={{
                borderRadius: '50%',
                width: '130px',
                padding: '15px',
                margin: '15px',
                position: 'relative'
            }}
        >
            <div className="micro--icon">

            <svg id='micro--icon--svg' onClick={startRecording} cursor="pointer" fill= {recording ? "rgb(22, 119, 255)" : "#4096ff"} height="130px" width="130px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
              <g>
                <g>
                  <path d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z"/>
                  <path d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z"/>
                </g>
              </g>
            </svg>

              {/* <img 
              style={{
                cursor: 'pointer'
              }}
              onClick={startRecording} src={micro? micro : '#'} width="130px" alt="" /> */}

              { recording ? <div id='animation--pulse'></div> : null }
            </div>
            
        </div>
      </Modal>
    </>
  );
};
export default RecordingModal;