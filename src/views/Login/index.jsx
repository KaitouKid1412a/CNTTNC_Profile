import { Button, Form, Input, Typography } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = memo(() => {
    return (
        <div className="login">
            <Typography.Title>Sign in</Typography.Title>
            <span className="login--to-register">
                Dont have account?
                <Link to="/register"> Create account</Link>
            </span>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={() => {}}
                autoComplete="off"
            >
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
                <div className="login--footer">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default Login;
