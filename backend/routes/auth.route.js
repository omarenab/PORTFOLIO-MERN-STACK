const express = require('express');
const {login} = require('../controllers/authController');
const {createUser,getUsers} = require("../controllers/usersController")
const router = express.Router();

router.post('/login',login);
router.post('/signup', createUser('admin'));
router.get('/',getUsers)
module.exports = router;