import React, { memo } from 'react';
import './findJob.scss';
import { Button, Dropdown, Flex, Form, Input, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IconSearch } from '../../assets/icons/IconSearch';
import { IconLocation } from '../../assets/icons/IconLocation';
import { IconStack } from '../../assets/icons/IconStack';
import JobItem from '../../components/JobItem/JobItem';

const FindJob = memo(() => {
    const items = [];
    
    return (
        <>
            <div className="find-job">
                <Flex
                    align="center"
                    justify="space-between"
                    className="find-job-title"
                >
                    <Typography.Title level={3}>Find Job</Typography.Title>
                    <span>Home/Find Job</span>
                </Flex>
                <div className="find-job-details">
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={() => {}}
                        autoComplete="off"
                        className="form-find-job"
                    >
                        <Form.Item name="job">
                            <Input
                                placeholder="Job tittle, Keyword..."
                                prefix={<IconSearch />}
                            />
                        </Form.Item>
                        <Form.Item name="location">
                            <Input
                                placeholder="Location"
                                prefix={<IconLocation />}
                            />
                        </Form.Item>
                        <Form.Item name="category">
                            <Input
                                placeholder="Select Category"
                                prefix={<IconStack />}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Dropdown menu={{ items }}>
                                <Space>
                                    Advance Filter
                                    <DownOutlined />
                                </Space>
                            </Dropdown>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Find job
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="find-job-alls">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
            </div>
        </>
    );
});

export default FindJob;