export const formItemLayout = {
    labelCol: {
        xs: { span: 24},
        sm: { span: 10},
    },
    wrapperCol: {
        xs: { span: 24},
        sm: { span: 4},
    },
};

export const validateMessages = {
    required: '${label} is required!',
    types: {
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export const USER_INPUT_LABEL = 'User name';
export const EMAIL_LABEL = 'Email';
export const AGE_LABEL = 'Age';
export const USER_FIELD_NAME = 'userName';
export const EMAIL_FIELD_NAME = 'email';
export const AGE_FIELD_NAME = 'age';
export const required = label => `${label} is required!`;
export const invalidEmail = label => `${label} is not a valid email!`;