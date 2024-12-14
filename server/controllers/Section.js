const Section=require("../models/Section");
const  Course=require("../models/Course");
exports.createSection=async(req,res)=>{
try{
    //data fetch
    //data validation
    //creeate section
    //update course with section objectid
    //return response
    const {sectionName,courseId}=req.body;
    if(!sectionName || !courseId){
        return res.status(400).json({
            success:false,
            message:'missing properties',
        });
    }
const newSection=await Section.create({sectionName});
const updatedCourse=await Course.findByIdAndUpdate(
    courseId,
    {
        $push:{
      courseContent:newSection._id
        }
    },
    {new:true},
)
//hw use populate to replace section/subsection both in updatedcoursecontent
//return response
return res.status(200).json({
    success:true,
    message:'Section created succesfully',
    updatedCourse
})
}
catch(error){
return res.status(500).json({
    success:false,
    message:'unable to create section',
})
}
}


exports.updateSection=async(req,res)=>{
    try{
//ddat input
const{sectionName,sectionId}=req.body;
if(!sectionName || !sectionId){
    return res.status(400).json({
        success:false,
        message:'missing properties',
    });
}
//data validation
//update data

const section=await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true});
//return response
return res.status(200).json({
    success:true,
    message:'section updated successfully',
});
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'unable to update section,please try again',
            error:error.message,
        })
    }
}
exports.deleteSection=async(req,res)=>{

    try{
        //getID
        //USE FINDBYID AND DELETE
        ////testingtodo do we need to delete the entry from course schema??
const {sectionId}=req.params;
await Section.findByIdAndDelete(sectionId);
return res.status(200).json({
    success:true,
    message:'section delete succesffully',
})
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'unable to delete section,please try again',
            error:error.message,
        })

    }
}


