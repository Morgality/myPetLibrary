import React, { useState } from 'react';
import "./FeedBack.scss"
import { Button, Modal } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
import feedback from "../../../../public/img/Logos/MainButtons/Feedback.svg"
import { QRFeedBack } from './FeedBackQR';

const FeedBack = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Пожалуйста, оставьте отзыв');
  const showModal = () => {
    setOpen(true);
  };
  const [feedbackText, setFeedbackText ] = useState('')
  const handleOk = () => {
    if ( feedbackText.trim().length === 0 ) return
    setModalText('Спасибо за отзыв!');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const [areaSize, setAriaSize] = useState(1)

  return (
    <>

      <img src={feedback} 
      style={{
        width: '53px',
        height: '54px',
        cursor: 'pointer'
      }} 
      onClick={showModal}
      alt="" />
      <Modal
        title={modalText}
        open={open}
        footer=''
        onCancel={handleCancel}
      >
        <QRFeedBack />
      </Modal>
    </>
  );
};
export default FeedBack;