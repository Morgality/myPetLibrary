import React from 'react';
import './Navigator.scss'
import { Anchor } from 'antd';
import { ModalStore } from '../ModalStore/ModalStore';
import FeedBack from './Feedback/Feedback';

export const Navigator = () => (
  <nav id='wrapper--main--nav'>
    <ul id='main--navigator'>
        <li>
          <FeedBack />
        </li>
        <li>
          <ModalStore />
        </li>
    </ul>
  </nav>
);