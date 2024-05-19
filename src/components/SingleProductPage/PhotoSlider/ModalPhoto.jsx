import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalPhoto = ({isModalOpen, selectedPhoto, setIsModalOpen}) => {
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal width='80%' open={isModalOpen} onCancel={handleCancel} footer={''}>
        <div className="modal--photo--block">
            <img id='modal--photo' src={selectedPhoto} alt="" />
        </div>
      </Modal>
    </>
  );
};
export { ModalPhoto };