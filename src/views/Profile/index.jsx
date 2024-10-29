import React, { useState } from 'react';
import './profile.scss';
import { Form, Input, Button, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Profile = () => {
    const [form] = Form.useForm();
    const [avatar, setAvatar] = useState('https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg'); // Default avatar path

    const handleFormSubmit = (values) => {
        // eslint-disable-next-line no-console
        console.log('Form values:', values);
        // Process form submission here
    };    

    const handleChangeAvatar = (info) => {
        if (info.fileList.length > 0) {
            const file = info.fileList[0].originFileObj;
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result); // Update the avatar
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="settings-page">
            <h3>Profile</h3>
            <Form
                layout="vertical"
                onFinish={handleFormSubmit}
                form={form}
                className="settings-form"
            >
                <div className="form-grid">
                    <Form.Item label="Avatar" name="avatar">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={avatar} 
                                alt="Avatar" 
                                style={{ width: 100, height: 100, borderRadius: '50%', marginRight: 16 }} 
                            />
                            <Upload 
                                beforeUpload={() => false} // Prevent auto-upload
                                maxCount={1}
                                onChange={handleChangeAvatar}
                            >
                                <Button icon={<UploadOutlined />}>Change Avatar</Button>
                            </Upload>
                        </div>
                    </Form.Item>

                    <div className="form-row">
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please enter your username!' }]}
                        >
                            <Input placeholder="Enter username" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email!' },
                                { type: 'email', message: 'Please enter a valid email!' },
                            ]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>
                    </div>

                    <div className="form-row">
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password!' }]}
                        >
                            <Input.Password placeholder="Enter password" />
                        </Form.Item>

                        <Form.Item
                            label="Role"
                            name="role"
                            rules={[{ required: true, message: 'Please select your role!' }]}
                        >
                            <Select placeholder="Select role">
                                <Select.Option value="Employer">Employer</Select.Option>
                                <Select.Option value="JobSeeker">Job Seeker</Select.Option>
                                <Select.Option value="Admin">Admin</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                <Form.Item
                    label="Biography"
                    name="bio"
                    rules={[{ required: false }]}
                >
                    <Input.TextArea
                        placeholder="Write down your biography here. Let the employers know who you are..."
                        rows={4}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Profile;