import React from 'react';
import { Carousel } from 'antd';
import bag from './Bag.jpg'
import bag2 from './Bag2.jpg'
import bag3 from './Bag3.jpg'
import './MainTab.scss'

const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundRepeat : 'none',
  backgroundSize: 'cover',
};

const MainTab = () => (
  <Carousel style={{marginBottom: '15px'}} autoplay>
    <div id='tab1' >
      <div style={contentStyle}> </div>
    </div>
    <div id='tab2'>
      <div style={contentStyle} />
    </div>
    <div id='tab3'>
      <div style={contentStyle} />
    </div>
  </Carousel>
);
export default MainTab;