/*const Course=require("../models/Course");
const Tag=require("../models/tags");
const User=require("../models/User");
const {uploadImageToCloudianry}=require("../utils/imageUploader");
//createCourse handler function
exports.createCourse=async(req,res)=>{
    try{
  //fetch data
  const{courseName,courseDescription,whatYouWillLearn,price,tag: _tag}=req.body;
  //get thubmnail
  const thumbnail=req.files.thumbnailImage;
  const tag = JSON.parse(_tag);
  //validation
  if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag){
    return res.status(400).json({
        success:false,
        message:'All fields are required',
    });
  }
  //check for instructors//for new couse we make db call not for validaton because it is handled by midelware

  const userId=req.user.id;
const instructorDetails=await User.findById(userId);
console.log(instructorDetails);
if(!instructorDetails){
return res.status(404).json({
    success:false,
    message:'Instructor Details not found',
})
}
//check given tag is valid or not

const tagDetails=await Tag.findById(tag);
if(!tagDetails){
    return res.status(404).json({
        success:false,
        message:'Tag Details not found',
    })
}
//upload image  to cloudinary

const thumbnailImage=await uploadImageToCloudianry(thumbnail,process.env.FOLDER_NAME);
//CREATE A ENTRY NEW COURSE
const newCourse=await Course.create({
    courseName,
    courseDescription,
    instructor:instructorDetails._id,
    whatYouWillLearn,
    price,
    tag:tagDetails._id,
    thumbnail:thumbnailImage.secure_url,

})

//add new course to user schema of instructor
await User.findByIdAndUpdate(
    {_id:instructorDetails._id},
    {
        $push:{
            courses:newCourse._id,
        }
    },
    {
        new:true
    },
)
//update the tag schema ourself




return res.status(200).json({
    success:true,
    message:"course created succesfully",
    data:newCourse
})
    }
    catch(error){

console.log(error);
return res.status(500).json({
    success:false,
    message:'invalid course created scusfiuly'

})
    }
}

//get all couses handler function
exports.showAllCourses=async(req,res)=>{
    try{
const allCourses=await Course.find({},{courseName:true,price:true,thubnail:true,instructor:true,ratingAndReviews:true,studentsEnrolled:true,}).populate("instructor").exec();
return res.status(200).json({
    success:true,
    message:'Data for all courses fetched succesfully',
    data:allCourses
})
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Cannot fetch course data',
            error:error.message
        })
    }
}
//get course details
exports.getCourseDetails=async(req,res)=>{
    try{
//getid
const {courseId}=req.body;
const getCourseDetails=await Course.find(
    {_id:courseId}).populate(
        {
            path:"instructor",
            populate:{
                path:"additionalDetails",
            },
        }
    ).populate("category").populate("ratingAndreviews").populate({
        path:"courseContent",
        populate:{
            path:"subSection",
        },
    }).exec();

    if(!courseDetails){
        return res.status(400).json({
            success:false,
            message:`could not find the course with ${courseId}`,
        });
    }
//return response
return res.status(200).json({
    success:true,
    message:"Course Details fetched succesfully",
    data:courseDetails,
})
    }
    catch(error){
console.log(error);
return res.status(500).json({
    success:false,
    message:error.message,
})

    }
}*/
const Course = require("../models/Course")
const Category = require("../models/Category")
const Section = require("../models/Section")
const SubSection = require("../models/SubSection")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
exports.getCourseDetails=async(req,res)=>{
    try{
//getid
const {courseId}=req.body;
const CourseDetails=await Course.find(
    {_id:courseId}).populate(
        {
            path:"instructor",
            populate:{
                path:"additionalDetails",
            },
        }
    ).populate("category").populate({
        path:"courseContent",
        populate:{
            path:"subSection",
        },
    }).exec();

    if(!CourseDetails){
        return res.status(400).json({
            success:false,
            message:`could not find the course with ${courseId}`,
        });
    }
//return response
return res.status(200).json({
    success:true,
    message:"Course Details fetched succesfully",
    data:CourseDetails,
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

exports.createCourse = async (req, res) => {
  try {
    const userId = req.user.id
    let {courseName, courseDescription,  whatYouWillLearn, price, category,tag:_tag} = req.body
    const thumbnail = req.files.thumbnailImage
  const tagJson = JSON.stringify(_tag);
  // parse the JSON string to an object
  const tag = JSON.parse(tagJson);
    // Check if any of the required fields are missing
    if(!courseName || !courseDescription || !whatYouWillLearn || !price ||  !tag.length ||  !thumbnail || !category) {
          return res.status(400).json({success: false, message: "All Fields are Mandatory", })
       }
  
    // Check if the user is an instructor
    const instructorDetails = await User.findById(userId, {accountType: "Instructor",});
      
    if(!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details Not Found",
      })
    }

    // Check if the category given is valid
    const categoryDetails = await Category.findById(category)
    if(!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category Details Not Found",
      })
    }
    // Upload the Thumbnail to Cloudinary
    //cloudinary not working
    const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME )
    
    // Create a new course with the given details in DB;
    const newCourse = await Course.create({
          courseName,
          courseDescription,
          instructor: instructorDetails._id,
          whatYouWillLearn: whatYouWillLearn,
          price,
          tag,
          category: categoryDetails._id,
         thumbnail: thumbnailImage.secure_url,
        })

    // Add the new course to the User Schema of the Instructor
    await User.findByIdAndUpdate( { _id: instructorDetails._id,},  {$push: {courses: newCourse._id,},},  {new: true} )
     
    // Add the new course to the Categories
    const categoryDetails2 = await Category.findByIdAndUpdate( { _id: category },  {$push: {courses: newCourse._id,},}, { new: true } )
      
    res.status(200).json({                                      // Return the new course and a success message
      success: true,
      data: newCourse,
      message: "Course Created Successfully",
    })
  }
   catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    })
  }
}


// Edit Course Details
/*exports.editCourse = async (req, res) => {
  try {
    const { courseId } = req.body
    const updates = req.body
    const course = await Course.findById(courseId)

    if(!course){
      return res.status(404).json({ error: "Course not found" })
    }

    // If Thumbnail Image is found, update it
    if(req.files){
      const thumbnail = req.files.thumbnailImage
      const thumbnailImage = await uploadImageToCloudinary( thumbnail,  process.env.FOLDER_NAME )
      course.thumbnail = thumbnailImage.secure_url
    }

    // Update only the fields that are present in the request body
    for(const key in updates) {
      if(updates.hasOwnProperty(key)) {
        if(key === "tag" || key === "instructions") {
          course[key] = JSON.parse(updates[key])
        } else {
          course[key] = updates[key]
        }
      }
    }

    await course.save()                                     // save the course;

    const updatedCourse = await Course.findOne({ _id: courseId,})
                          .populate({
                            path: "instructor",
                            populate: {
                              path: "additionalDetails",
                            },
                          })
                          .populate("category")
                          .populate("ratingAndReviews")
                          .populate({
                            path: "courseContent",
                            populate: {
                              path: "subSection",
                            },
                          })
                          .exec()

    res.json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    })
  } 
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}


// Get Course List
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find( { status: "Published" }, {courseName: true,  price: true, thumbnail: true, instructor: true, ratingAndReviews: true, studentsEnrolled: true, })
                       .populate("instructor").exec()

    return res.status(200).json({
      success: true,
      data: allCourses,
    })
  } 
  catch(error){
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Course Data`,
      error: error.message,
    })
  }
}


exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body
    const courseDetails = await Course.findOne({ _id: courseId, })
                          .populate({
                            path: "instructor",
                            populate: {
                              path: "additionalDetails",
                            },
                          })
                          .populate("category")
                          .populate("ratingAndReviews")
                          .populate({
                            path: "courseContent",
                            populate: {
                              path: "subSection",
                              select: "-videoUrl",
                            },
                          })
                          .exec()

    if(!courseDetails){
      return res.status(400).json({
        success: false,
        message: `Could not find course with id: ${courseId}`,
      })
    }

    let totalDurationInSeconds = 0
    courseDetails.courseContent.forEach((content) => {
        content.subSection.forEach((subSection) => {
          const timeDurationInSeconds = parseInt(subSection.timeDuration)
          totalDurationInSeconds += timeDurationInSeconds
        })
    })

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

    return res.status(200).json({
      success: true,
      data: {courseDetails, totalDuration,},
    })
  }
   catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.getFullCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body
    const userId = req.user.id
    const courseDetails = await Course.findOne({ _id: courseId, })
                        .populate({
                          path: "instructor",
                          populate: {
                            path: "additionalDetails",
                          },
                        })
                        .populate("category")
                        .populate("ratingAndReviews")
                        .populate({
                          path: "courseContent",
                          populate: {
                            path: "subSection",
                          },
                        })
                        .exec()

    let courseProgressCount = await CourseProgress.findOne({courseID: courseId,  userId: userId,})

    if(!courseDetails){
      return res.status(400).json({
        success: false,
        message: `Could not find course with id: ${courseId}`,
      })
    }

    let totalDurationInSeconds = 0
    courseDetails.courseContent.forEach((content) => {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection.timeDuration)
        totalDurationInSeconds += timeDurationInSeconds
      })
    })

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

    return res.status(200).json({
      success: true,
      data: {
        courseDetails,
        totalDuration,
        completedVideos: courseProgressCount?.completedVideos ? courseProgressCount?.completedVideos : [], 
      },
    })
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


// Get a list of Course for a given Instructor
exports.getInstructorCourses = async (req, res) => {
  try {
    
    const instructorId = req.user.id                      // Get the instructor ID from the authenticated user or request body

    // Find all courses belonging to the instructor
    const instructorCourses = await Course.find({ instructor: instructorId, }).sort({ createdAt: -1 })
      
    res.status(200).json({                     // Return the instructor's courses
      success: true,
      data: instructorCourses,
    })
  }
   catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve instructor courses",
      error: error.message,
    })
  }
}


// Delete the Course
exports.deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.body
    
    const course = await Course.findById(courseId)                     // Find the course
    if(!course){
      return res.status(404).json({ message: "Course not found" })
    }

    const studentsEnrolled = course.studentsEnrolled                   // Unenroll students from the course
    for(const studentId of studentsEnrolled){
      await User.findByIdAndUpdate(studentId, {$pull: { courses: courseId },})
    }

    const courseSections = course.courseContent                   // Delete sections and sub-sections
    for(const sectionId of courseSections) {
      const section = await Section.findById(sectionId)             // Delete sub-sections of the section
      if(section) {
        const subSections = section.subSection
        for (const subSectionId of subSections) {
          await SubSection.findByIdAndDelete(subSectionId)
        }
      }
      await Section.findByIdAndDelete(sectionId)           // Delete the section
    }

    await Course.findByIdAndDelete(courseId)                  // Delete the course

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    })
  }
   catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}
*/