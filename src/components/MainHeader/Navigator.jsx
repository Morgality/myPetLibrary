import React, { useEffect, useState } from 'react';
import './Navigator.scss'
import { Anchor } from 'antd';
import { ModalStore } from '../ModalStore/ModalStore';
import FeedBack from './Feedback/Feedback';
import { Profile } from './Profile/Profile';
import { useSelector } from 'react-redux';

export const Navigator = () => {

  const [supplies, setSupplies] = useState(0);

  const data = useSelector(state => (state.basket.basket).length)

  useEffect(() => {
    setSupplies(data)
  }, [data])
  

  return (
    <nav id='wrapper--main--nav'>
    <ul id='main--navigator'>
        <li>
          <Profile />
        </li>
        <li>
          <FeedBack />
        </li>
        <li id={supplies < 1 ? '' : 'navigator--bug--icon'} data-store={String(data)}>
          <ModalStore />
        </li>
    </ul>
    </nav>
  )
}