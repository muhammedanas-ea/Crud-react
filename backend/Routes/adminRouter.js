const express = require('express');
const adminRoute = express();
const adminController = require('../Controller/adminController');


// ******* ADMIN LOGIN SECTION ROUTE *******//
adminRoute.post('/login',adminController.adminLogin);
adminRoute.post('/addUserData',adminController.addUserDetails);
adminRoute.get('/userlist',adminController.userListDetails);
adminRoute.post('/deleteUser',adminController.deleteUserDetails);
adminRoute.get('/editUser/:id',adminController.editUserDetails); 
adminRoute.post('/updateuser',adminController.updateUserDetails); 



module.exports = adminRoute;