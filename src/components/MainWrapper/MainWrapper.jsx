import React, { useEffect, useState } from 'react';
import "./MainWrapper.scss";
import { Route, Routes } from 'react-router-dom';
import { MainHeader } from '../MainHeader/MainHeader';
import { Footer } from '../Footer/Footer';
import { Button } from 'antd';
import { CardSection } from '../MainContent/CardSection/CardSection';
import SingleProductPage from '../SingleProductPage/SingleProductPage';
import { Userchat } from '../wrappers/Chat/Userchat';
import ChatBasement from '../Char/ChatBasement';
import { SearchPage } from '../SearchPage/SearchPage';
import { ModalStore } from '../ModalStore/ModalStore';

const MainWrapper = () => {


  function getScrollButton(e) {
    if (scrollY > 300) {
      setvisibleUpButton(true)
    } else {
      setvisibleUpButton(false)
    }
  }
  
  const [visibleUpButton, setvisibleUpButton] = useState(false)

  useEffect( () => {
    window.addEventListener('scroll', getScrollButton)

  } ,[])

  return (
    <div id='main-wrapper'>
    <MainHeader />
    <main>
        <Routes>
          <Route path='/' element={<CardSection/>} />
          <Route path='/product' element={ <SingleProductPage/> }/>
          <Route path='/product/:id' element={ <SingleProductPage/> }/>
          <Route path='/chat' element={ <Userchat/> }/>
          <Route path='/search/:request' element={ <SearchPage/> } />
          <Route path='*' element={ <p>Страница не существует</p> }/>
        </Routes>
    </main>

  

      <div className="main--navigation--block">
        <div className='basement--navigator'>
          <Button type='primary' shape='circle'
            onClick={() => {
              window.location.href="#"
            }}
            style={{
              width: '54px',
              height : '54px',
              display: `${visibleUpButton ? 'block' : 'none' }`,
              zIndex: '999',
              margin: '5px'
            }}>
            &#9650;
          </Button>
          <ChatBasement />
          <ModalStore />
        </div>
      </div>

    
    <Footer />
  </div>
  )
};

export default MainWrapper;