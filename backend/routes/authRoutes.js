const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const auth = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

user_route.use(express.static('public'));
user_route.use(session({ resave: true ,secret: process.env.SESSION_KEY , saveUninitialized: true}));

user_route.set('view engine' , 'ejs');
user_route.set('views' , './views');



user_route.get('/' , auth.isLogout , authController.loginLoad);
user_route.post('/' , auth.isLogout , authController.login);

user_route.get('/resister' , auth.isLogout , authController.resisterLoad);
user_route.post('/resister' , auth.isLogout  , authController.resister);




module.exports = user_route;