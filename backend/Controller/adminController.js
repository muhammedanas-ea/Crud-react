const User = require('../Models/userModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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


module.exports ={
    adminLogin
}