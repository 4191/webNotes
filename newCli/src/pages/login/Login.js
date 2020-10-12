import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UseContext } from '../../globalContext/globalContext';
import { Redirect } from 'react-router-dom';
import { saveUser } from '../../utils/storageUtils';
import './login.less';

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {
    const { user, setUser } = useContext(UseContext);

    const onFinish = (values) => {
        setUser(values.username);
        //判断是否记住密码，下边代码是存到了localStorage中，根据需求自行更改
        if (values.remember) {
            saveUser(values.username);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (user.length !== 0) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
