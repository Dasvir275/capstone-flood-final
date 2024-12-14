const mongoose=require("mongoose");
const  otpTemplate = require("../mail/emailVerificationTemplate");
const mailSender=require("../utils/mailSender")
const otpschema=new mongoose.Schema({
email:{
    type:String,
    required:true,
},
otp:{
    type:String,
    required:true,
},
createdAt:{
    type:Date,
    default:Date.now(),
    expires:5*60,
}
});
async function sendVerificationEmail(email,otp){
    try{
        console.log("hiii email",email);
        const mailResponse=await mailSender(email,"Verification Email from IMC INDORE",otpTemplate(otp));
        console.log("Email sent Succesfully",mailResponse);
    }
    catch(error){
console.log("error occured while sending mails",error);
throw error;
    }
}
otpschema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})
module.exports=mongoose.model("OTP",otpschema);