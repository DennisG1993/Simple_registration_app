import { notification } from 'antd';

const showNotification = (type, title, message='') => {
    //success info warning error
    notification[type]({
        message: title,
        description: message,
        duration: 1.7,
        placement: 'topRight',
        bottom: 100,
        closeIcon: null
    });
};

export default showNotification