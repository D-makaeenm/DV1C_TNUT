import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import ApiLogin from '../../Api/ApiLogin';

const LoginForm = ({ onClose,open}) => {
  
    const [form] = Form.useForm();
    const handleSubmit = (e) => {

      form.validateFields()
      .then(values=>{
        ApiLogin(values.username,values.password).then(()=>{
            onClose();
        })
      }).catch(info=>{
        console.log(info);
      })
    };

    return (
        <Modal
        open={open}
        title="Login"
        onOk={handleSubmit}
        onCancel={onClose}
        footer={[
            <Button key="back" onClick={onClose}>
                Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleSubmit}>
                Login
            </Button>,
        ]}
    >
        <Form
            form={form}
            layout="vertical"
            name="login_form"
        >
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
        </Form>
    </Modal>
    );
};

export default LoginForm;
