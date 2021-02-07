import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { connect } from 'react-redux';
import {
    AGE_FIELD_NAME,
    AGE_LABEL,
    EMAIL_FIELD_NAME,
    EMAIL_LABEL,
    formItemLayout,
    invalidEmail,
    required,
    USER_FIELD_NAME,
    USER_INPUT_LABEL,
    validateMessages
} from "./userRegistrationConsts";
import {addUser} from '../../store/actions/user';

const UserRegistrationFrom = ({addUser}) => {
    const [form] = Form.useForm();

    const onFinish = user => {
        addUser(user, form)
    };

    const validateUserName = (_, value) => {
        if (!value) return Promise.reject(required(USER_INPUT_LABEL));
        return Promise.resolve();
    }
    const validateEmail = (_, value) => {
        if (!value) return Promise.reject(required(EMAIL_LABEL));
        const re = /\S+@\S+\.\S+/;
        if (!re.test(value)) return Promise.reject(invalidEmail(value))
        return Promise.resolve();
    }

    return (
        <Form form={form} {...formItemLayout} onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={USER_FIELD_NAME}
                label={USER_INPUT_LABEL}
                rules={[{
                    required: true,
                    validator: validateUserName
                }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={EMAIL_FIELD_NAME}
                label={EMAIL_LABEL}
                rules={[
                    {
                        type: 'email',
                        required: true,
                        validator: validateEmail,
                    }
                    ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={AGE_FIELD_NAME}
                label={AGE_LABEL}
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                        required: true,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{ ...formItemLayout.wrapperCol, offset: 10 }}>
                <Button type='primary' htmlType='submit'>Add user</Button>
            </Form.Item>
        </Form>
    );

}
const mapDispatchToProps = dispatch => {
    return {
        addUser: (user, form) => dispatch(addUser(user, form))
    };
};

export default connect(null, mapDispatchToProps)(UserRegistrationFrom);