const fs = require('fs');
const { validationResult } = require('express-validator');
const errorHandlers = require('../util/errors');
const {usersFilePath, getAllUsers} = require('../util/user');


const createFileAndSaveUser = (users, callback) => {
    fs.writeFile(usersFilePath, JSON.stringify(users), callback);
}

exports.addUser = (req, res, next) => {
    const errors = validationResult(req);
    try {
        errorHandlers.validErrors(errors);
        const {userName, email, age} = req.body;
        const user = {userName, email, age};

        fs.exists(usersFilePath, exists => {
            let users;
            if (exists) {
                users = getAllUsers();
                users.push(user);
            } else {
               users = [user];
            }
            createFileAndSaveUser(users, err => {
                if(err) {errorHandlers.nextError(err, next)}
            })
            res.status(201).json({message: 'userCreated', user});
        })
    } catch (error) {
        errorHandlers.nextError(error, next);
    }
}

exports.getUsers = (req, res, next) => {
    try {
        fs.exists(usersFilePath, exists => {
            if (exists) {
                const readable = fs.createReadStream(usersFilePath);
                readable.pipe(res);
            } else {
                res.status(200).json({data: []});
            }
        })

    } catch (error) {
        errorHandlers.nextError(error, next);
    }
}