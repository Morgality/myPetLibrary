import React, { useState } from 'react';
import "./FeedBack.scss"
import { Button, Modal } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

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
       <Button type="primary" onClick={showModal} shape='circle' style={{color:'yellow', width:'54px', height: '54px'}}>
       ✭
      </Button>
      <Modal
        title={modalText}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form id='feedback--form' action="">
            { !confirmLoading ? <TextArea onChange={(e) => setFeedbackText(e.target.value)} value={feedbackText} autoSize/> : null }
            
        </form>
      </Modal>
    </>
  );
};
export default FeedBack;