const express = require('express');
const userRoute = express();
const userController = require('../Controller/userController');


// ********* USER LOGIN AND REGISTER ROUTE **********//
userRoute.post('/signup',userController.userRegistaion);
userRoute.post('/login',userController.userLoginVerification);



module.exports = userRoute;
