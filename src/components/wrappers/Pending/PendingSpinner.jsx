import React from 'react';
import { Spin } from 'antd';

export const PendingSpinner = () => {
    return <div style={{display: 'flex', justifyContent: 'center'}}><Spin style={{margin: '10px'}}/></div>
};