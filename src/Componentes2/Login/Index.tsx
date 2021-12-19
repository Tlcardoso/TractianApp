import { Form, Input, Button, Checkbox } from 'antd';

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Index.module.css'

export type FormProperties = {
    readonly onSubmit?: void;
}

const LoginForm = () => {

    const [catchEmail, setCatchEmail] = useState('') 
    const [catchPassword, setCatchPassword] = useState('') 
    const navigate = useNavigate()

    const email = 'richard@gmail.com'
    const senha = '123456'

    function loginValidate(){
        if(catchEmail === email && catchPassword === senha){
            navigate('/dashboard') 
            localStorage.setItem('@User','Logged') 
        }else{
            return console.log('errou')
        }

    }

    const onFinish = (values: string) => {
        
        console.log('Success:', values);
        
      };
    
      const onFinishFailed = (errorInfo: any) =>  {
        console.log('Failed:', errorInfo);
      };
    
      return (
          <section className={styles.container}>
            <img src='/images/logo-mobile.png'/>
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.form}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input 
                onChange={(e: any) =>{ setCatchEmail(e.target.value)
                }} 
            />
            </Form.Item>
        
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password  
                onChange={(e: any) =>{ setCatchPassword(e.target.value)
                }}
                />
            </Form.Item>
        
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
        
            <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                <Button 
                type="primary" 
                htmlType="submit"
                onClick={loginValidate}
                >
                    Login
                </Button>
                <br/>
                <a href='https://github.com/Tlcardoso/TractianApp'>Forgot Password?</a>
            </Form.Item>
            </Form>
        </section>
      );
}

export default LoginForm
