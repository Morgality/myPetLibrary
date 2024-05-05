import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import './ChatBasement.scss'
import { ChatBlock } from './ChatBlock/ChatBlock';

export const ChatBasement = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button id='chat--button' type="primary" shape="circle" size='large' onClick={showDrawer}>
        &#128172;
      </Button>
      <Drawer title="Отзывы" onClose={onClose} open={open}>
      <ChatBlock/>
      </Drawer>
    </>
  );
};
export default ChatBasement;