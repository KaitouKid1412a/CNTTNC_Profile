import React from 'react';
import './profile.scss';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

const Profile = () => {
    const [form] = Form.useForm();  

    const handleFormSubmit = (values) => {
        console.log('Form values:', values);
    };

    return (
        <div className="profile-page">
            <h3>Profile</h3>
            <Form
                layout="vertical"
                onFinish={handleFormSubmit}
                form={form}
                className="profile-form"
            >
                <Form.Item
                    label="Nationality"
                    name="nationality"
                    rules={[{ required: true, message: 'Please select your nationality!' }]}
                >
                    <Select placeholder="Select...">
                        <Option value="India">India</Option>
                        <Option value="USA">USA</Option>
                        {/* Add more options as needed */}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Date of Birth"
                    name="dob"
                    rules={[{ required: true, message: 'Please select your date of birth!' }]}
                >
                    <DatePicker format="DD/MM/YYYY" />
                </Form.Item>

                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[{ required: true, message: 'Please select your gender!' }]}
                >
                    <Select placeholder="Select...">
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        {/* Add more options if necessary */}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Marital Status"
                    name="maritalStatus"
                    rules={[{ required: true, message: 'Please select your marital status!' }]}
                >
                    <Select placeholder="Select...">
                        <Option value="Single">Single</Option>
                        <Option value="Married">Married</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Education"
                    name="education"
                    rules={[{ required: true, message: 'Please select your education level!' }]}
                >
                    <Select placeholder="Select...">
                        <Option value="High School">High School</Option>
                        <Option value="Bachelor's">Bachelor's</Option>
                        <Option value="Master's">Master's</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Experience"
                    name="experience"
                    rules={[{ required: true, message: 'Please select your experience!' }]}
                >
                    <Select placeholder="Select...">
                        <Option value="0-1 Years">0-1 Years</Option>
                        <Option value="1-2 Years">1-2 Years</Option>
                        <Option value="2-4 Years">2-4 Years</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Biography"
                    name="biography"
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
