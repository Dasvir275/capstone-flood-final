const {instance}=require("../config/razorpay");
const Course=require("../models/Course");
const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const {courseEnrollmentEmail}=require("../mail/courseEnrollmentEmail");
 exports.capturePayment=async(req,res)=>{
//get courseId and UserId

const {course_id}=req.body;
const userId=req.user.id;
if(!course_id){
    return res.json({
        success:false,
        message:'please provide course id'

    })
};

//validation
//validcourseid
//valid course detail
let course;
try{
    course=await Course.findById(course_id);
    if(!course){
        return res.json({
            success:false,
            message:'could not find the course'
        });
    }
const uid=new mongoose.Types.ObjectId(userId);
if(course.studentsEnrolled.includes(uid)){
    return res.status(200).json({
        success:false,
        message:'student enrolled already'
    });
}


}
catch(err){
console.log(err);
return res.status(500).json({
    success:false,
    message:err.message,
})

}
//user already paid or not

const amount=course.price;
const currency="INR";
const options={
    amount:amount*100,
    currency,
    receipt:Math.random(Date.now()).toString(),
    notes:{
        courseId:course_id,
        userId,
    }
}

//paid and return
try{
//initiate payment
const paymentResponse=await instance.orders.create(options);
console.log(paymentResponse);
return res.status(200).json({
    success:true,
    courseName:course.courseName,
    courseDescription:course.courseDescription,
    thumbnail:course.thumbnail,
    orderId:paymentResponse.id,
    currency:paymentResponse.currency,
    amount:paymentResponse.amount,
})
}
catch(error){
console.log(error);
res.json({
    success:false,
    message:"Could not intiate order",
})
} 
 }
 //verify signature of razorpay and server

 exports.verifySignature=async(req,res)=>{
    const webhookSecret="12345678";
    const signature=req.headers("x-razorpay-signature");
    const shasum=crypto.createHmac("sha256",webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest=shasum.digest("hex");

    if(signature===digest){
        console.log("payment authorize");
        const {courseId,userId}=req.body.payload.payment.entity.notes;
        try{
//find a course and enrolled in int
const enrolledCourse=await Course.findOneAndUpdate(
    {_id:courseId},
    {$push:{studentsEnrolled:userId}},
    {new:true},
);
if(!enrolledCourse){
    return res.status(500).json({
        success:false,
        message:'Course not found',
    });
}
//find student  and add course to the user
const enrolledstudent=await User.findOneAndUpdate(
    {_id:userId},
    {$push:{courses:courseId}},
    {new:true},
)
console.log(enrolledstudent);
//mail send

const emailResponse=await mailSender(
    enrolledStudent.email,
    "congrats from code help",
    "congrats,yo are onboarded on course",
);
console.log(emailResponse);
return res.status(200).json({
    success:true,
    message:"Signature verified and course added",
});
        }
        catch(err){

console.log(err);
return res.status(500).json({
success:false,
message:err.message,
});
        }
    }
else{
return res.status(400).json({
    success:false,
    message:"invalid request"
})

}
 };