const express = require('express');
const router = express.Router();
const path = require('path');


class User {
    constructor (username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password,
        this.valid = valid;
    }
}

let users = [
    new User ('garf', '20/02/1990', 34, 'garf@fat.com.au', '123', false),
    new User ('jon', '12/04/1975', 49, 'jon@fat.com.au', '456', false ),
    new User ('odie', '23/06/1991', 33, 'odie@fat.com.au', '789', false)
]


router.post('/api/auth', function (req, res) {

    if (!req.body) {
        return res.sendStatus(400);
    }

    const reqBody = req.body;

    const login = users.find(u => u.username === reqBody.username && u.password === reqBody.password)

    if (login) {
        login.valid = true;

        const {password, ...userNoPass } = login;

        return res.json(userNoPass);  
        
    } else {
        return res.status(401).send('Invalid username or password');
    }
});

module.exports = router;