//require('dotenv').config();
const express = require('express');

const router = express.Router();

// User Login Endpoint
router.post(`/login`, async (req, res) => {
    console.log(req.body);
    //res.send(req.body.name);
    
})

// User Registration Endpoint
router.get(`/home`, async (req, res) => {
    res.send("It was a success");
    

})

router.get(`/login`, (req, res) => {
 return res.render('login.ejs');
})

module.exports = router;