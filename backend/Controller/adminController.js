const User = require('../Models/userModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const securePassword = async(password) =>{
    try{
        const passwordHash = await bcrypt.hash(password,10);
        return passwordHash;
    }catch(err){
        console.log(err.message);
    }
}


const adminLogin = async(req,res) =>{
    try{

        const {email,password} = req.body

        const emailExist = await User.findOne({email:email});
        console.log(emailExist);
        if(emailExist){
            if(emailExist.is_admin === 1){
                const access = await bcrypt.compare(password,emailExist.password);
                if(access){
                    const adminToken = jwt.sign({ adminId : emailExist._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                    res.json({adminData:emailExist,status:true,adminToken});
                }else{
                    res.json({alert:'Invalid user name and password'});
                }
            }else{
                res.json({alert:'You are not an admin'});
            }
        }else{
            res.json({alert:'Email does not exist'});
        }

    }catch(err){
        console.log(err);
    }
}

const addUserDetails = async(req,res) =>{
    try{
        const {name,email,number,password} = req.body
        const spassword = await securePassword(password);
        const emailExist = await User.findOne({email:email});
 
        if(emailExist){
            res.json({alert:'Email already exists',status:false});
        }else{
            const user = new User({
                name:name,
                email:email,
                mobile:number,
                password:spassword,
                is_admin:0,
            })
            const userData = await user.save();
            const token = jwt.sign({ userId : userData._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({userData,alert:'Registaion',token,status:true});
        }
    }catch(error){
        console.log(error.message);
    }
}


const userListDetails = async (req,res) =>{
    try{
        const userData = await User.find({is_admin:false})
        if(userData){
            res.json({userData,status:true})

        }else{
            res.json({userData,status:false})
        }
    }catch(err){
        console.log(err);
    }
}


const deleteUserDetails = async (req,res) =>{
    try{
        const userId = req.body.userid;
        const deleteData = await User.deleteOne({_id:userId});
        if(deleteData){
            res.json({delete:true})
        }else{
            res.json({delete:false})
        }
    }catch(err){
        console.log(err);
    }
}


const editUserDetails = async (req,res) =>{
    try{
        const userId = req.params.id
        const userData = await User.findOne({_id:userId});
        if(userData){
            res.json({userData,status:true,message:'data found'})
        }else{
            res.json({status:false,message:'data not found'})
        }
    }catch(err){
        console.log(err);
    }
}


const updateUserDetails = async (req,res) =>{
    try{
        const {id,name,number,email} = req.body 
        const updateUserData = await User.updateOne({_id:id},{$set:{name,mobile:number,email}})
        if(updateUserData){
            res.json({userData:updateUserData,status:true,alert:'updation completed'})
        }else{
            res.json({status:false,alert:'the updation not complete'})
        }
    }catch(err){
        console.log(err);
    }
}

module.exports ={
    adminLogin,
    addUserDetails,
    userListDetails,
    deleteUserDetails,
    editUserDetails,
    updateUserDetails
}