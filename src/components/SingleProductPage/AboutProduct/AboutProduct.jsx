import React, { useEffect } from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const AboutProduct = ({productData}) => {

    const items = [
        {
          key: '1',
          label: 'Описание',
          children: <p>{productData ? productData.body : ''}</p>,
        },
        {
          key: '2',
          label: 'Характеристики',
          children: <p>{productData ? productData.name : ''}</p>,
        },
        {
          key: '3',
          label: 'Варианты',
          children: <p>{text}</p>,
        },
      ];

  return (
    <div className='about--product'>
        <Collapse items={items} defaultActiveKey={['1']}/>
    </div>
  );
};
