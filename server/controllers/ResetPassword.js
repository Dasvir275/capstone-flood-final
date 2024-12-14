const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require('crypto');
//resetpasswordtoken
exports.resetPasswordToken=async(req,res)=>{
    try{
    //get email from req body
    const email=req.body.email;
    //check user for this email,email
    const user=await User.findOne({email:email});
    if(!user){
        return res.json({
            success:false,
            message:'your email is not registered with us'
        });
    }
//generate token
const token=crypto.randomUUID();

//update user by addinng token and
 //expiration time
 const updateDetails=await User.findOneAndUpdate(
    {email:email},{
        token:token,
        resetPasswordExpires:Date.now()+5*60*1000,
    },{new:true}
 );

//create url
const url=`http://localhost:3000/update-password/${token}`
//send mail url
await mailSender(email,"password reset link",`Password reset Link ${url}`);
//return response
return res.json({
    success:true,
    message:'email sent success,please check',
})
}
catch(err){
    console.log(err);
    return res.status(500).json({
        success:false,
        message:'something went wrong while reset pwd email'
    })
}
}
//reset password
exports.resetPassword=async(req,res)=>{ //data fetch
    try{
    const {password,confirmPassword,token}=req.body;

    //validation
    if(password!==confirmPassword){
        return res.json({
            success:false,
            message:'password mismatch'
        })
    }

    //getuserdetails from db using 
    //token
    const userDetails=await User.findOne({token:token});

    //if no token-invalid and also check expiration time
    if(!userDetails){
        return res.json({
            success:false,
            message:'token invalid'
        })
    }
    //token time
    if(userDetails.resetPasswordExpires<Date.now()){
        return res.json({
            success:false,
            message:'Token is expired ,please regenerate your token',
        });
    }
    //hash password
const hashedPassword=await bcrypt.hash(password,10);
    //password update
    await User.findOneAndUpdate(
        {token:token},
        {password:hashedPassword},
        {new:true},
    )
    //return response
return res.status(200).json({
    success:true,
    message:'password reset succesfully'
})
}
catch(err){
    console.log(err);
    return res.status(500).json({
        success:false,
        message:'something went wrong password reseting'
    })
}
}