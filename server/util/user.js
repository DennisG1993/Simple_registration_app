const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '..', 'users.json');

const getAllUsers = () => {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }


}

const findByEmail = email => {
    const users = getAllUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

const findByUserName = userName => {
    const users = getAllUsers();
    return users.find(user => user.userName.toLowerCase() === userName.toLowerCase());
}

module.exports = {usersFilePath, getAllUsers, findByEmail, findByUserName};