
//sendotp
const User=require("../models/User");
const OTP=require("../models/OTP");
const Profile=require("../models/Profile");
const otpGenerator=require("otp-generator");
//const bcrypt=require('bcryptjs');
const mailSender = require("../utils/mailSender");
const jwt=require("jsonwebtoken");
require("dotenv").config();
exports.sendOTP=async(req,res)=>{
    //fetch email from request ki body
    try{
    const {email}=req.body;
  const checkUserPresent=await User.findOne({email});  
  //if user already exist,then return a response
if(checkUserPresent){
    return res.status(401).json({
        success:false,
        message:'Userr already registered',
    })
}
//genrate otp
var otp=otpGenerator.generate(6,{
    upperCaseAlphabets:false,
    lowerCaseAlphabets:false,
    specialChars:false,
});
console.log("otp generated,",otp);
const result=await OTP.findOne({otp:otp});
while(result){
    otp=otpGenerator(6,{
        upperCaseAlphabets:false,
      
        
    });
}
const otpPayload={email,otp};
//create an entry in db for otp
const otpBody=await OTP.create(otpPayload);
console.log(otpBody);
res.status(200).json({
    success:true,
    message:'otp send succesfully',
    otp,
})
    }
    catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:error.message,
})
    }
}
//signup
exports.signUp=async(req,res)=>{
    //data fetch from request ki body
    //validate karro
    //2 password match karro
    //check already
    //find most recent otp from db
    //validat eotp
    //hash password
    //entry create in db
    //return res
    try{
const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    accountType,
    contactNumber,
    otp
}=req.body;

if(!firstName ||!lastName||!email||!password||!confirmPassword ||!otp){
    return res.status(403).json({
        success:false,
        message:"all fields are required"
    })
}
if(password!==confirmPassword){
    return res.status(400).json({
        success:false,
        message:'password and confirm password not match,try again'
    })
}
const existingUser=await User.findOne({email});
if(existingUser){
    return res.status(400).json({
        success:false,
        message:'User is already registered',
    });
}
const recentOtp=await OTP.find({email}).sort({createdAt:-1}).limit(1);
console.log(recentOtp);
//validate otp
if(!recentOtp.length){
    return res.status(400).json({
        success:false,
        message:'otp not found '
    })
}
else if(otp!==recentOtp[0].otp){
    return res.status(400).json({
        success:false,
        message:'Invalid otp'
    })
}
//hash password
//const hashedPassword=await bcrypt.hash(password,10);
//entry create in DB
const profileDetails=await Profile.create({
    gender:null,
    dateOfBirth:null,
    about:null,
    contactNumber:null,
});
const user=await User.create({
    firstName,
    lastName,
    email,
    contactNumber,
    password:password,
    accountType:accountType,
    additionalDetails:profileDetails._id,
   image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
})
return res.status(200).json({
    success:true,
    message:'user is registered succesfully',
    user,
})
    }
    catch(error){
        console.log(error);
return res.status(500).json({
    success:false,
    message:"user cannot be registered try again",
})
    }
}
//login
exports.login=async(req,res)=>{
    try{
//get data from req body
//validation data
//user chech exist or not
//generate jwt,after password matching
//create cookie and send resposnse
const {email,password}=req.body;
if(!email ||!password){
    return res.status(403).json({
        success:false,
        message:"All fields required please try again"
    })
}
const user=await User.findOne({email});
if(!user){
    return res.status(401).json({
        success:false,
        message:"user is not registered ,please signup first",
    })
}

if(password===user.password){
    const payload={
        email:user.email,
        id:user._id,
        accountType:user.accountType,
    }
const token=jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn:"2h",
});
user.token=token;
user.password=undefined;
const options={
    expires:new Date(Date.now()+3*24*60*60*1000),
    httpsOnly:true,
}
res.cookie("token",token,options).status(200).json({
    success:true,
    token,
    user,
    message:'logged in succesfully',
})
}
else{

    return res.status(401).json({
        success:false,
        message:'password is inccorect',
    })
}
    }
    catch(error){
console.log(error.message);
return res.status(500).json({
    success:false,
    message:'Login failure try again',
})
    }
}

/*exports.changePassword=async(req,res)=>{
    //get data from req body
    //get old password,new password,confirm password
    //validation
    //update in db
    //send mal
    //return response


    try {
		const userDetails = await User.findById(req.user.id);                         // Get user data from req.user
		const { oldPassword, newPassword, confirmNewPassword } = req.body;            // Get old password, new password, and confirm new password from req.body

		const isPasswordMatch = await bcrypt.compare(oldPassword, userDetails.password );                 // Validate old password
			 
		if(!isPasswordMatch) {                                  // If old password does not match, return a 401 (Unauthorized) error
			return res.status(401).json({ success: false, message: "The password is incorrect" });	 
		}

		if(newPassword !== confirmNewPassword) {                             // Match new password and confirm new password
            return res.status(401).json({ success: false, message: "The password and confirm password does not match" });	 
		}
			 
		const encryptedPassword = await bcrypt.hash(newPassword, 10);             // Update password
		const updatedUserDetails = await User.findByIdAndUpdate(req.user.id , { password: encryptedPassword } , { new: true });
                                                                                  // find user by id and then update password = encryptedPassword , here if you "const updatedUserDetails =" does not wirte this then also it not affect;
		 
		try {                                                          // Send notification email , here passwordUpdated is template of email which is send to user;
			const emailResponse = await mailSender(updatedUserDetails.email, passwordUpdated(updatedUserDetails.email, `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`));
			console.log("Email sent successfully:", emailResponse.response);
		   } 
        catch(error) {
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		return res.status(200).json({ success: true, message: "Password updated successfully" });         // Return success response 	 
	 } 
    catch(error) {
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
}

*/

