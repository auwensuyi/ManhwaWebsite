//require('dotenv').config();
const express = require('express');

const router = express.Router();

// User Login Endpoint
router.post(`/login`, async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.loginpsw;
    return res.render("user_page.ejs", {
        username,
        password
    });
})

// User Registration Endpoint
router.get(`/home`, async (req, res) => {
    res.send("It was a success");
    

})

router.get(`/login`, (req, res) => {
 return res.render('login.ejs');
})

module.exports = router;