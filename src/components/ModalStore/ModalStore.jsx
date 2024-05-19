import React, { useState } from 'react';
import "./ModalStore.scss"
import { Button, Modal } from 'antd';
import { SoldPage } from './SoldPage';
import { ModalListPoint } from './ModalListPoint';
import { useDispatch } from 'react-redux';
import { rmAll } from '../../store/counterSlice';
import bug from "../../../public/img/Logos/MainButtons/Bug.svg"

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
      <img id='store--button' src={bug} 
        onClick={showModal}
        alt="" 
      />
      
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
