const express = require('express');
const userRoute = express();
const userController = require('../Controller/userController');
const { uploadOptions } = require('../Configration/multer');



// ********* USER LOGIN AND REGISTER ROUTE **********//
userRoute.post('/signup',userController.userRegistaion);
userRoute.post('/login',userController.userLoginVerification);


// muter section implimentaion
userRoute.post('/profileImage',uploadOptions.single('image'),userController.userprofileImageUpdate);



module.exports = userRoute;
