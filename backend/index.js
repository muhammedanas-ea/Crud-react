const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


//----------connecting  database-----------//
const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


const userRoutes = require('./Routes/userRouter');
app.use('/',userRoutes);

const adminRoutes = require('./Routes/adminRouter');
app.use('/admin',adminRoutes);




app.listen(3001, () =>{
    console.log('server is running port 3001');
})