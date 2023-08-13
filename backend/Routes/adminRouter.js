const express = require('express');
const adminRoute = express();
const adminController = require('../Controller/adminController');


// ******* ADMIN LOGIN SECTION ROUTE *******//
adminRoute.post('/login',adminController.adminLogin);


// ******* ADMIN USER MANAGEMENT ROTE *******//  



module.exports = adminRoute;