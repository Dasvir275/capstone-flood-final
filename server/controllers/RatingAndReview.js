const RatingAndReview=require("../models/RatingAndReview");
const Course=require("../models/Course");
const { default: mongoose } = require("mongoose");
//create rating
exports.createRating=async(req,res)=>{
    try{
//get user id
const userId=req.user.id;
//fetchdata from req body
const {rating,review,courseId}=req.body;
//check if user is enrolled or not
const courseDetails=await Course.findOne(
    {
        _id:courseId,
        studentsEnrolled:{$elemMatch:{$eq:userId}},

    }
);

if(!courseDetails){
    return res.status(404).json({
        success:false,
        message:'Student is not enrolled in course',
    });
}
//check if user already review course
const alreadyReviewed=await RatingAndReview.findOne({
    user:userId,
    course:courseId,
});
if(alreadyReviewed){
    return res.status(403).json({
        success:false,
        message:'course is already reviewwed by user'
    })
}
//create rating and review
const ratingReview=await RatingAndReview.create({
    rating,review,
    course:courseId,
    user:userId,
});
//update course
const updatedcoursedetails=await Course.findByIdAndUpdate({_id:courseId},{
    $push:{
        ratingAndReviews:ratingReview._id,
    }
},{new:true});
console.log(updatedcoursedetails);
//return respnse
return res.status(200).json({
    success:true,
    message:"rating and review created succesfully",
    ratingReview,
})
    }
    catch(error){


    }
}



//getaveragerating
exports.getAverageRating=async(req,res)=>{
    try{
//get course Id

const courseId=req.body.courseid;
//calculate avg rating

const result=await RatingAndReview.aggregate([
    {
    $match:{
        course:new mongoose.Types.ObjectId(courseId),
    },
    },
{
    $group:{
        _id:null,
        averageRating:{$avg:"$rating"},
    }

}
]
)
//return rating
if(result.length>0){
    return res.status(200).json({
        success:true,
        averageRating:result[0].averageRating,
    })
}
//if no rating /review exist
return res.status(200).json({
    success:true,
    message:'average rating is 0,no rating given till now',
    averageRating:0,
})

    }
    catch(error){


    }
}



//getallrating



exports.getAllRating=async(req,res)=>{
    try{
const allreviews=await RatingAndReview.find({}).sort({rating:"desc"}).populate({
    path:"user",
    select:"firstName lastName email image",
}).populate({
    path:"course",
    select:"courseName",
}).exec();
return res.status(200).json({
    success:true,
    message:"all reviews fetched succesfully",
    data:allreviews,
});
    }
    catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:error.message

})

    }
}