//require('dotenv').config();
const User = require("../model/user");
const express = require('express');

const router = express.Router();

// User Login Endpoint
router.post(`/login`, async (req, res) => {
    console.log(req.body);
    return res.status(200).send(`Login Worked! Hello there ${req.body.username}`); 
})

router.post(`/register`, async (req, res) => {
    console.log(req.body);
    const {firstname, lastname, username, email, password} = req.body;
        const newUserObject = new User({
            firstName: firstname,
            lastName: lastname,
            email: email,
            userName: username,
            passWord: password,
        });
        const user = await newUserObject.save();
    return res.send(user);
})

// User Registration Endpoint
router.get(`/home`, async (req, res) => {
    res.send("It was a success");
    

})

router.get(`/login`, (req, res) => {
 return res.render('login.ejs');
})

module.exports = router;