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


// ********** USER REGISTATION DATA STORING AND RESPONSE SENDING SECTION ***********//
const userRegistaion = async(req,res) =>{
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


// ********** USER LOGIN VERIFICATION SECTION ***********//
const userLoginVerification = async(req,res) => {
    try{
        const {email,password} = req.body;
        const emailExist = await User.findOne({email:email});

        if(emailExist){
            const access = await bcrypt.compare(password,emailExist.password);
            if(access){
                const token = jwt.sign({ userId : emailExist._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.json({userData:emailExist,status:true,token});
            }else{
                res.json({alert:'password is incorrect'});
            }
        }else{
            res.json({alert:'No account in this email'});
        }
    }catch(err){
        console.log(err);
    }
}


const userprofileImageUpdate = async (req,res) =>{
    try{
        const id=req.body.userId
        const image=req.file.filename
        const updateImg = await User.findOneAndUpdate({_id:id},{$set:{image:image}},{new:true}).then((response)=>{
            res.json({updated:true,data:response})
        })
       
    }catch(err){
        console.log(err);
    }
}




module.exports = {
    userRegistaion,
    userLoginVerification,
    userprofileImageUpdate,
}