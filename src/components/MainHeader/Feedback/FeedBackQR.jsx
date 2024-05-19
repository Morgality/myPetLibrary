import React from 'react';
import { Input, QRCode, Space } from 'antd';
const QRFeedBack = () => {
  const [text, setText] = React.useState('https://t.me/Zhlatotitan');
  return (
    
      <div className="qr--code">
        <QRCode size={400} value={text || '-'} />
      </div>

  );
};
export {QRFeedBack};