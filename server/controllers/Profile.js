const Profile=require("../models/Profile");
const User=require("../models/User");
exports.updateProfile=async(req,res)=>{
    try{
//get data
const {dateOfBirth="",about="",contactNumber,gender}=req.body;

//get userid
const id=req.user.id;
//validation
if(!contactNumber ||!gender){
    return res.status(400).json({
        success:false,
        message:'All fields are required',
    })
}
//find profile
const userDetails=await User.findById(id);
const profileId=userDetails.additionalDetails;

const profileDetails=await Profile.findById(profileId);
//update profile
profileDetails.dateOfBirth=dateOfBirth;
profileDetails.about=about;
profileDetails.gender=gender;
profileDetails.contactNumber=contactNumber;
await profileDetails.save();
//reeturn response
return res.status(200).json({
    success:true,
    message:'Profile Updated succesfully',
    profileDetails
})

    }
    catch(error){
return res.status(500).json({
    success:false,
    error:error.message
})
    }
}

//delete account


 exports.deleteAccount=async(req,res)=>{
try{
//get id
//validation
//delete profile
//delete user
//return response
const id=req.user.id;
const userDetails=await User.findById(id);
if(!userDetails){
    return res.status(404).json({
        success:false,
        message:'user not found',
    });
}
await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
//dellete user
await User.findByIdAndDelete({_id:id});

//todo hw unenrilled user from enrolled courses delete before deleting user
return res.status(200).json({
    success:true,
    message:'user deleted successfully'
})
}
catch(error){
return res.status(500).json({
    success:false,
    message:"not deleted succesfully"
})
}
 };

 exports.getAllUserDetails=async(req,res)=>{

    try{
const id=req.user.id;
const userDetails=await User.findById(id).populate("additionalDetails").exec();
//populate is use to open up content if ref model
return res.status(200).json({
    success:true,
    message:'user data fetched succesfullty'
})
    }
    catch(error){
return res.status(500).json({
    success:false,
    message:"not get all users"
})
    }
 }

 exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
        return res.status(500).json({
          success: false,
          message: error.message,
        })
      }
    }
    