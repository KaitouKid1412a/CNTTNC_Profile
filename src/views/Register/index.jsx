import { Button, Form, Input, Typography } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = memo(() => {
    return (
        <div className="register">
            <Typography.Title>Create account</Typography.Title>
            <span className="register--to-login">
                Already have account?
                <Link to="/login"> Login</Link>
            </span>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {}}
                autoComplete="off"
            >
                <div className="register__form--name">
                    <Form.Item
                        label=""
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Please fill in your fullname',
                            },
                        ]}
                    >
                        <Input placeholder="Full name" />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please fill in your username',
                            },
                        ]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                </div>
                <Form.Item
                    label=""
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill in your email',
                        },
                    ]}
                >
                    <Input placeholder="Email address" />
                </Form.Item>
                <Form.Item
                    label=""
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill in your password',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                    label=""
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill in your confirm password',
                        },
                    ]}
                >
                    <Input.Password placeholder="Confirm password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default Register;
