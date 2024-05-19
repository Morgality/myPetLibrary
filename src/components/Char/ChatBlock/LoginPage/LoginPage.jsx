import React, { useState } from 'react';
import { Form, Input, Typography, Button } from 'antd';
const { Paragraph } = Typography;
import "./LoginPage.scss"

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="block"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Логин"
      rules={[
        {
          required: true,
          message: 'Обязательное поле!',
        },
      ]}
    >
      <Input  onChange={(e) => console.log(e)}/>
    </Form.Item>
  </Form>
);
const LoginPage = ({setChatEnter, setLogin, login}) => {

    const [fields, setFields] = useState([
    {
      name: ['username'],
      value: login,
    },
  ]);

  const enterChat = () => {

    localStorage.setItem('login', login)

    setChatEnter(true)

  }

  return (
    <div id='login--page'
    style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >

        <div className="status-bar"
        >
        </div>

      <div className="inputForm">
        <CustomizedForm
            fields={fields}
            onChange={(e) => {
                setLogin(e[0].value);
                console.log(login)
            }}
        />

        <Button 
        type='primary'
        style={{
            width: '100%'
        }}
        onClick={enterChat}
        >Войти в чат</Button>
      </div>
      
    </div>
  );
};
export default LoginPage;