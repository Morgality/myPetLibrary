import React, { useState } from 'react';
import SingleProductComment from './SingleComment/SingleComment';
import { Avatar, List, Radio, Space } from 'antd';
import { QueryClientProvider, QueryClient } from 'react-query';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const alignOptions = ['start', 'center', 'end'];
const ProductCommentList = () => {

    const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>

        <Space
            direction="vertical"
            style={{
                marginBottom: '20px',
            }}
            size="middle"
            >
        </Space>

        <SingleProductComment data={data} />

    </QueryClientProvider>

    </>
  );
};
export default ProductCommentList;