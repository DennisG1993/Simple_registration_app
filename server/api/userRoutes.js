const {findByEmail, findByUserName} = require ('../util/user');
const express = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/users');
const router = express.Router();

router.post('/adduser', [
    body('email')
        .trim()
        .isEmail()
        .withMessage('invalid email')
        .custom((value, { req }) => {
            const user = findByEmail(value);
            return user ? Promise.reject('User with same email exists') : Promise.resolve(true);
        }),
    body('userName',)
        .trim()
        .notEmpty()
        .isAlphanumeric()
        .custom((value, { req }) => {
            const user = findByUserName(value);
                return user ? Promise.reject('user already exists') : Promise.resolve(true);
        }),
], controller.addUser);
router.get('/getusers',controller.getUsers);

module.exports = router;
