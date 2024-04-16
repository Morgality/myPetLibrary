import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SoldPage } from './SoldPage';
import { ModalListPoint } from './ModalListPoint';
import { useDispatch } from 'react-redux';
import { rmAll } from '../../store/counterSlice';

export const ModalStore = () => {


  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [selling, setSelling] = useState(false)

  return (
    <>
      <Button type="primary" onClick={showModal} shape='circle' style={{width:'54px', height:'54px', margin: 'auto'}}>
        &#128722;
      </Button>
      
      <Modal 
      title="Корзина" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      footer={[
        <Button danger type='primary' onClick={() => dispatch(rmAll())}>
          Очистить корзину
        </Button>,
        <Button type='primary' onClick={() => {
          setSelling(!selling)
        }}>
          { !selling ? 'К оплате' : "Вернуться к корзине" }
        </Button>

      ]}
      >

        { !selling ? <ModalListPoint/> : <SoldPage/> }

      </Modal>
    </>
  );
};
