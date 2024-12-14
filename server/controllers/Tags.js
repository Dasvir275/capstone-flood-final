const Tag=require("../models/tags");
//create tag ka handler function
exports.createTag=async(req,res)=>{
    try{
const {name,description}=req.body;
//validation
if(!name ||!description){
    return res.status(400).json({
        success:false,
        message:'All fields required',
    })
}
//create entry in db
const tagDetails=await Tag.create({
    name:name,
    description:description,
});
console.log(tagDetails);
return res.status(200).json({
    success:true,
    message:"tag created successfully"
})
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
//getalltag
exports.showAlltags=async(req,res)=>{
    try{
const allTags=await Tag.find({},{name:true,description:true});
res.status(200).json({
    success:true,
    message:" all tags returned succesfully",
    allTags
})
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

