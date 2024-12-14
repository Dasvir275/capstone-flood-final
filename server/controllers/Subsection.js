const SubSection=require("../models/SubSection");
const dotenv=require("dotenv");
dotenv.config();
const Section=require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader")
//create subsection
exports.createSubSection=async(req,res)=>{
    try{
        //fetch data from req body
        //extract file/video
        //validation
         //upload video to cloudinary
         //create subsection
         //update section with sub and return response
const {sectionId,title,timeDuration,description}=req.body;
 const video=req.files.videoFile;
if(!title ||!description || !video ||!timeDuration || !sectionId){
    return res.status(400).json({
        success:false,
        message:'All fields are required',
    })
}

const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
const subSectionDetails=await SubSection.create({
    title:title,
    timeDuration:timeDuration,
    description:description,
   videoUrl:uploadDetails.secure_url,
})
const updatedSection=await Section.findByIdAndUpdate(
    sectionId,
    {
        $push:{
      subSection:subSectionDetails._id
        }
    },
    {new:true},
)

//log updated section here ,after adding populate query

return res.status(200).json({
    success:true,
    message:'sub Section created succesfully',
    updatedSection
})
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'unable to create sub section',
        })

    }
}
//same for updated subsection
//same for deelte subsection